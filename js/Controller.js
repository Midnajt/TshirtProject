import { FormHandler } from "./modules/FormHandler.js";
import { ImgChanger } from "./modules/ImgChanger.js";

class Controller {
  #formHandler = new FormHandler();
  #imgChanger = new ImgChanger();
  constructor() {
    this.#formHandler.init();
    this.#imgChanger.init();
  }
}

window.onload = () => {
  const controller = new Controller();
};
