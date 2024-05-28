// TODO: use react-router-dom for web routing

export function push (path: string) {
  window.location.href = path
}

export function pull () {
  window.history.back()
}