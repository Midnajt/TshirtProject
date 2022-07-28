export class EventsHandler {
  #nextSectionBtn = document.querySelector("#nextSectionBtn");
  #currentSection = 0;
  #sections = [...document.querySelectorAll("[data-section]")];
  #inputs = [...document.querySelectorAll("[data-side-input]")];
  init() {
    // console.log("FormHandler");
    this.addEvents();
  }

  addEvents() {
    this.#nextSectionBtn.addEventListener("click", this.nextSection.bind(this));
  }

  nextSection() {
    this.#currentSection++;
    this.#sections.array.forEach((section) => {
      section.classList.remove("form__section--active");
    });
    console.log("nextSection");
  }
}
