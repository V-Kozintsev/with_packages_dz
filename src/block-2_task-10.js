const user = {
  name: "John",
};
export function userPrompt() {
  const input = prompt("Введи число");
  user.age = +input;
  const admin = { ...user, role: "admin" };
  return { user, admin };
}
export { user };
