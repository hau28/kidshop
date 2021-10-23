export const pathFromStrings = (...stringArr) => {
  const nonEmtpyStrings = stringArr.filter((s) => s)
  return nonEmtpyStrings.join('/')
}
