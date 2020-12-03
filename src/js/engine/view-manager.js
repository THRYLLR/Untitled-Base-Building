export default class ViewManager {
  /** @type {ViewManager} - Class property containing the first instance of ViewManager,
   * used in the constructor to make sure it's singular*/
  static instance;

  constructor() {
    if (!ViewManager.instance) {
      ViewManager.instance = this;
      this.interfaces = [];
      //Constructor code here
      this.setupResize();
    }
    return ViewManager.instance;
  }

  registerInterface(id, iface) {
    this.interfaces.push({ [id]: iface });
    console.log(
      `%cDetected new interface.%c\n  %cID:%c ${id}`,
      "background-color: green; color: black; font-weight: bold",
      "",
      "background-color: red; color: black; font-weight: bold",
      ""
    );
  }

  setupResize() {
    window.addEventListener("resize", (e) => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      if (this.draw) this.draw();
    });
  }

  createRenderer() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "gameCanvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    document.body.appendChild(this.canvas);
  }
}
