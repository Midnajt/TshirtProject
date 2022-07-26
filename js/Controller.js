import { FormHandler } from "./modules/FormHandler.js";

class Controller {
  #formHandler = new FormHandler();
  constructor() {
    console.log(FormHandler);
    this.#formHandler.init();
  }
}

window.onload = () => {
  const controller = new Controller();
};
