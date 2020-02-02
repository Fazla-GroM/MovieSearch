const trimString = (string, num) => {
  if (string.length <= num) {
    return string
  }
  return string.substring(0, num - 1) + "..."
}

export default trimString
