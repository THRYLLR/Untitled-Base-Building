import { hello } from "./test.js";

window.addEventListener("click", (e) => {
  console.log(hello, ", menu opened. Event thing: ", e);
});
