export class FormHandler {
  #formBtn = document.querySelector("#formValideateBtn");
  #form = document.querySelector("#post");

  init() {
    // this.#form.addEventListener("submit", (event) => this.formHandler(event));
    // TODO zmien type  btn na submit
  }

  formHandler(e) {
    e.preventDefault();
    // ? https://gomakethings.com/working-with-forms-with-vanilla-javascript/
    // ? http://kursjs.pl/kurs/formularze/formularze-walidacja
    // let form = document.querySelector("#post");

    // Get all field data from the form
    // returns a FormData object
    let data = new FormData(this.#form);

    console.log(data);
    console.log(data.keys);

    // for (let entry of data) {
    //   console.log(entry);
    // }

    for (let [key, value] of data) {
      console.log(key);
      console.log(value);
    }
  }
}
