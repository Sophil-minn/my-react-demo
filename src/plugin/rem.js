import devConfig from '../config/config'
console.log(devConfig, 'devConfig');

(function (doc, win) {
  function setHtmlFontSize() {
    let w_height = doc.documentElement.clientHeight,
      w_width = window.innerWidth || doc.body.clientWidth || doc.documentElement.clientWidth
    if (w_width > 768) {
      w_width = 768
      doc.documentElement.style.width = '768px'
    }

    const uiWidth = devConfig.uiWidth
    const html_fontSize = w_width * (100 / uiWidth)
    doc.documentElement.style.fontSize = `${html_fontSize}px`
  }

  const ua = navigator.userAgent
  const isUC = ua.indexOf('UCBrowser') > -1
  if (isUC) {
    doc.addEventListener('DOMContentLoaded', setHtmlFontSize, false)
  } else {
    setHtmlFontSize()
  }
  win.onload = function () {
    win.addEventListener('resize', setHtmlFontSize, false)
  }
})(document, window);
