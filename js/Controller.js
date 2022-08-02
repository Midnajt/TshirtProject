import { FormHandler } from "./modules/FormHandler.js";
import { Navigation } from "./modules/Navigation.js";
import { ImgChanger } from "./modules/ImgChanger.js";
import { EventsHandler } from "./modules/EventsHandler.js";

const STARTING_SECTION = 0;

class Controller {
  #navigation = new Navigation(STARTING_SECTION);
  #formHandler = new FormHandler();
  #imgChanger = new ImgChanger();
  #eventsHandler = new EventsHandler();
  constructor() {
    this.#formHandler.init();
    this.#navigation.init();
    this.#imgChanger.init();
    this.#eventsHandler.init();
  }
}

window.onload = () => {
  const controller = new Controller();
};
