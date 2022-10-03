function watchActiveElement() {
  let activeElement = document.activeElement;

  function logActiveElement() {
    console.log({
      activeElement,
      content:
        activeElement.innerText || activeElement.getAttribute("aria-label"),
    });
  }

  logActiveElement();
  setInterval(function checkActiveElement() {
    if (document.activeElement !== activeElement) {
      activeElement = document.activeElement;
      logActiveElement();
    }
  }, 100);
}
if (process.env.NODE_ENV === "development") {
  watchActiveElement();
}
