import { Navigation } from "./Navigation.js";

export class FormHandler {
  #form = document.querySelector("#post");

  init() {
    this.#form.addEventListener("submit", (event) => this.formHandler(event));
  }

  formHandler(e) {
    e.preventDefault();

    let data = new FormData(this.#form);

    for (let [key, value] of data) {
      switch (key) {
        case "name":
          this.insertValue("name", value);
          break;
        case "lastName":
          this.insertValue("name", value);
          break;
        case "street":
          this.insertValue("street", value);
          break;
        case "streetNumber":
          this.insertValue("street", value);
          break;
        case "homeNumber":
          this.insertValue("street", `/${value}`);
          break;
        case "zipCode":
          this.insertValue("city", `${value}`);
          break;
        case "city":
          this.insertValue("city", `${value}`);
          break;
        case "phone":
          this.insertValue("phone", `${value}`);
          break;
        case "email":
          this.insertValue("email", `${value}`);
          break;
        default:
          // console.log("default");
          break;
      }
    }

    const section = this.checkCurrentSection();
    const navigation = new Navigation();

    switch (section) {
      case "1":
        navigation.addSection(1);
        navigation.nextSection();
        break;
      case "2":
        navigation.addSection(2);
        navigation.nextSection();
        this.sendOrder(data);
        break;
    }
  }

  insertValue(item, value) {
    document.querySelector(`[data-order-data="${item}"]`).innerHTML += `${value} `;
  }

  checkCurrentSection() {
    return document.querySelector(".form__section--active").dataset.section;
  }

  sendOrder(data) {
    const img = JSON.parse(window.localStorage.getItem("chosenImg"));
    // send(data,img)
  }
}
