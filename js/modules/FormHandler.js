export class FormHandler {
  #formBtn = document.querySelector("#formValideateBtn");

  init() {
    this.#formBtn.addEventListener("click", this.formHandler);
  }

  formHandler() {
    // ? https://gomakethings.com/working-with-forms-with-vanilla-javascript/
    // ? http://kursjs.pl/kurs/formularze/formularze-walidacja
    let form = document.querySelector("#post");

    // Get all field data from the form
    // returns a FormData object
    let data = new FormData(form);

    console.log(form);
    console.log(data);

    // for (let entry of data) {
    //   console.log(entry);
    // }

    for (let [key, value] of data) {
      console.log(key);
      console.log(value);
    }
  }
}
