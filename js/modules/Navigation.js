export class Navigation {
  #nextSectionBtn = document.querySelector("#nextSectionBtn");
  #currentSection = 0;
  #sections = [...document.querySelectorAll("[data-section]")];
  #navBars = [...document.querySelectorAll(".positionBar__item")];

  init() {
    this.addEvents();
  }

  addEvents() {
    this.#nextSectionBtn.addEventListener("click", this.nextSection.bind(this));
  }

  nextSection() {
    this.#currentSection++;
    if (this.#currentSection === 4) return;

    this.#sections.forEach((section) => {
      section.classList.remove("form__section--active");
    });
    this.#navBars.forEach((bar) => {
      bar.classList.remove("positionBar__item--green");
    });

    this.#sections[this.#currentSection].classList.add("form__section--active");
    if (this.#currentSection <= 2) {
      this.#navBars[this.#currentSection].classList.add("positionBar__item--green");
    }
  }

  addSection(value) {
    this.#currentSection = value;
  }
}
