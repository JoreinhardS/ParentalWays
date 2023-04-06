export function toKebabCase(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '') // remove special character
    .replace(/ +(?= )/g, '') // remove multiple spaces
    .split(' ')
    .join('-');
}
