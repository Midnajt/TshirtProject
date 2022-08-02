export class EventsHandler {
  init() {
    this.inputsAddEvents();
  }

  inputsAddEvents() {
    const inputs = [...document.querySelectorAll("[data-side-input]")];
    inputs.forEach((input) => input.addEventListener("change", this.changeSide.bind(this)));
  }

  changeSide(event) {
    const imgMiniature = document.querySelector(".imgMiniature");
    const tshirtSides = [document.querySelector("[data-img-front]"), document.querySelector("[data-img-rear]")];
    const side = event.target.value;
    const chosenSide = document.querySelector(`[data-img-${side}]`);

    tshirtSides.forEach((img) => img.classList.remove("tshirtImg--chosen"));
    chosenSide.classList.add("tshirtImg--chosen");

    if (side === "rear") {
      imgMiniature.classList.add("imgMiniature--right");
    } else {
      imgMiniature.classList.remove("imgMiniature--right");
    }
  }
}
