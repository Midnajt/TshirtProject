import { FormHandler } from "./modules/FormHandler.js";
import { Navigation } from "./modules/Navigation.js";
import { ImgChanger } from "./modules/ImgChanger.js";

class Controller {
  #formHandler = new FormHandler();
  #navigation = new Navigation();
  #imgChanger = new ImgChanger();
  constructor() {
    this.#formHandler.init();
    this.#navigation.init();
    this.#imgChanger.init();
  }
}

window.onload = () => {
  const controller = new Controller();
};
