const DEBUG = false

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "updateScroll") {
    if (DEBUG) {
      console.log(`Received scroll update from tab ${sender.tab.id}:`, message.scroll)
    }

    currentScroll = message.scroll

    // Query all tabs and propagate the new scroll position
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach((tab) => {
        if (tab.id !== sender.tab.id) {
          if (DEBUG) {
            console.log(`Updating scroll position for tab ${tab.id}`)
          }

          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: updateScrollPosition,
            args: [currentScroll],
          })
        }
      })
    })
  }
})

// Function to update the scroll position
function updateScrollPosition(scroll) {
  var iframe = document.getElementById("storybook-preview-iframe")
  const rootElement = iframe.contentWindow.document.querySelector('html')
  if (rootElement) {
    if (DEBUG) {
      console.log('Updating scroll position for "html" element:', scroll)
    }
  
    // TODO: refactor addition of 16px to scroll.top
    rootElement.scrollTo({ top: scroll.top * -1 + 16 })
  }
}
