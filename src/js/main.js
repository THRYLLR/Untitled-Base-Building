import GameCore from "./engine/core";

window.addEventListener("load", function () {
  const theCore = new GameCore();
  theCore.renderer.createCanvas();
  const ctx = theCore.renderer.context;
  ctx.fillRect(30, 40, 50, 60);
});
