import { FormHandler } from "./modules/FormHandler.js";

class Controller {
  #formHandler = new FormHandler();
  constructor() {
    this.#formHandler.init();
  }
}

window.onload = () => {
  const controller = new Controller();
};

const btns = [...document.querySelectorAll(".imgBtn")];

btns.forEach((btn) => btn.addEventListener("click", changeImg));

function changeImg() {
  const img = document.querySelector("[data-shirt-img]");
  const imgTest = document.querySelector("[img-testing]");

  if (this.dataset.btnValue === "previous") {
    // const dataImage = localStorage.getItem("imgData");
    // img.src = "data:image/png;base64," + dataImage;
    console.log("previous");
  } else {
    imgTest.innerHTML = "";
    imgTest.appendChild(img.cloneNode());
    // const imgData = getBase64Image(img);
    // localStorage.setItem("currentImgSrc", imgData);
    // img.src = "https://picsum.photos/200";
    console.log("next");
  }
}

// function getBase64Image(img) {
//   const canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   const ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   const dataURL = canvas.toDataURL("image/png");

//   // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
//   console.log("ok");
// }
