export class EventsHandler {
  init() {
    this.inputsAddEvents();
  }

  inputsAddEvents() {
    const inputs = [...document.querySelectorAll("[data-side-input]")];
    inputs.forEach((input) => input.addEventListener("change", this.changeSide.bind(this)));
  }

  changeSide(event) {
    const imgMiniatures = [...document.querySelectorAll(".imgMiniature")];
    const tshirtSides = [document.querySelector("[data-img-front]"), document.querySelector("[data-img-rear]")];
    const side = event.target.value;
    const chosenSide = document.querySelector(`[data-img-${side}]`);

    tshirtSides.forEach((img) => img.classList.remove("tshirtImg--chosen"));
    chosenSide.classList.add("tshirtImg--chosen");

    imgMiniatures.forEach((img) => img.classList.remove("imgMiniature--show"));
    const minitaure = chosenSide.querySelector(".imgMiniature");
    minitaure.classList.add("imgMiniature--show");
  }
}
