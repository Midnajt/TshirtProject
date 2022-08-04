const STARTING_SIDE = "front";

export class EventsHandler {
  init() {
    this.inputsAddEvents();
    this.changeSideOrderData(STARTING_SIDE);
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

    this.changeSideOrderData(side);
  }

  changeSideOrderData(side) {
    const orderDataImg = [document.querySelector("[data-order-img-front]"), document.querySelector("[data-order-img-rear]")];
    orderDataImg.forEach((img) => (img.style.display = "none"));
    document.querySelector(`[data-order-img-${side}]`).style.display = "block";

    const orderDataMiniImg = [document.querySelector("[data-order-img-front] .imgMiniature"), document.querySelector("[data-order-img-rear] .imgMiniature")];
    orderDataMiniImg.forEach((img) => img.classList.remove("imgMiniature--show"));
    document.querySelector(`[data-order-img-${side}] .imgMiniature`).classList.add("imgMiniature--show");
  }
}
