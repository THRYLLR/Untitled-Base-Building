import ViewManager from "./view-manager";

export default class TimeManager {
  constructor() {
    if (!window.requestAnimationFrame)
      throw new Error(
        "Your browser does not support requestAnimationFrame, a key component of the game system."
      );
  }

  startTicking() {}
}
