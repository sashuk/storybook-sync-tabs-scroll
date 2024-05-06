const DEBUG = false

// Function to report scroll position to the background script
function reportScrollPosition() {
  if (DEBUG) {
    console.log('"html" element scrolled.')
  }

  var iframe = document.getElementById("storybook-preview-iframe")
  const rootElement = iframe.contentWindow.document.getElementById('root')
  if (rootElement) {
    const currentScroll = rootElement.getBoundingClientRect()
    if (DEBUG) {
      console.log('Reporting scroll position to background:', currentScroll)
    }

    chrome.runtime.sendMessage({
      type: "updateScroll",
      scroll: currentScroll,
    })
  }
}

// Add event listener to the 'root' element to detect scroll changes
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    var iframe = document.getElementById("storybook-preview-iframe")
    const rootElement = iframe.contentWindow.document
    if (rootElement) {
      if (DEBUG) {
        console.log('iframe document element found. Adding scroll event listener.')
      }

      rootElement.addEventListener('scroll', reportScrollPosition)
    } else {
      console.warn('iframe document element not found.')
    }
  }, 5000)
})
