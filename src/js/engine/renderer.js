class Renderer {
  constructor() {}

  createCanvas() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Renderer;
