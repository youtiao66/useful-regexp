function add(arg) {
  let total = 0
  function doAdd(innerArg) {
    if (innerArg === undefined) return total
    total += innerArg
    return doAdd
  }
  return doAdd(arg)
}

export default add
