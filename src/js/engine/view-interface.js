import ViewManager from "./view-manager";

export default class ViewInterface {
  constructor(id) {
    this.manager = new ViewManager();
    this.manager.registerInterface(id, this);
  }

  get ctx() {
    return this.manager.ctx;
  }
}
