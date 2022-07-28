import { FormHandler } from "./modules/FormHandler.js";
import { EventsHandler } from "./modules/EventsHandler.js";
import { ImgChanger } from "./modules/ImgChanger.js";

class Controller {
  #formHandler = new FormHandler();
  #eventsHandler = new EventsHandler();
  #imgChanger = new ImgChanger();
  constructor() {
    this.#formHandler.init();
    this.#eventsHandler.init();
    this.#imgChanger.init();
  }
}

window.onload = () => {
  const controller = new Controller();
};
