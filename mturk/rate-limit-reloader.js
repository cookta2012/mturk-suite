/* globals scriptEnabled */

(async function () {
  const enabled = await scriptEnabled(`paginationLastPage`)
  if (!enabled) return

  const error = document.getElementsByClassName(`error-page`)

  if (error.length && ~error[0].textContent.indexOf(`You have exceeded`)) {
    setTimeout(window.location.reload.bind(window.location), 1000)
  }
})()
