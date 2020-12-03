import ViewManager from "./view-manager";
import InputManager from "./input-manager";
import EventManager from "./event-manager";
import LoggingManager from "./logging-manager";
import DataManager from "./data-manager";
import TimeManager from "./time-manager";

export default class GameCore {
  constructor() {
    this.View = new ViewManager();
    this.Input = new InputManager();
    this.Events = new EventManager();
    this.Logging = new LoggingManager();
    this.Data = new TimeManager();
  }

  preBoot() {}

  boot() {}
}
