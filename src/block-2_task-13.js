export function isWord(str) {
  return str.trim().length > 0 && str.trim().split(" ").length === 1;
}
