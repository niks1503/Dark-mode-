let main_div = document.querySelector("#main_div");
let toggle_btn = document.querySelector(".toggle_btn");

function toggle_modes() {
  let arr = ["main_div", "dark_mode"];

  let mode = Math.floor(Math.random() * arr.length);
  return arr[mode];
}

toggle_btn.addEventListener("click", function () {
  let mode = toggle_modes();
  main_div.id = mode;
});
