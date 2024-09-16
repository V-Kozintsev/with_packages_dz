export function runApp(el) {
  el.innerHTML = `<input autofocus /><button hidden>Add</button><div></div>`;

  const input = el.querySelector("input");
  const button = el.querySelector("button");

  input.addEventListener("input", (ev) => {
    // показывать/скрывать кнопку
    button.hidden = ev.target.value.length === 0;
  });

  button.addEventListener("click", () => {
    const text = input.value;
    input.value = "";
    button.hidden = true;

    const p = document.createElement("p");
    p.innerHTML = text;
    el.querySelector("div").prepend(p);

    if (el.querySelectorAll("p").length > 5) {
      el.querySelectorAll("p")[5].remove();
    }
  });
}
