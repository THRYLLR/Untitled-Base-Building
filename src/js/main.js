import GameCore from "./engine/core";
import ViewInterface from "./engine/view-interface";

const theCore = new GameCore();
const view = new ViewInterface("main (test)");

window.addEventListener("load", () => {
  theCore.View.createRenderer();
  theCore.View.draw = function () {
    const ctx = view.ctx;
    ctx.fillRect(20, 30, 40, 50);
  };
  theCore.View.draw();
});
