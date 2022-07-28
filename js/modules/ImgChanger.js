export class ImgChanger {
  #btnNext = document.querySelector('[data-btn-value="next"]');
  #btnPrevious = document.querySelector('[data-btn-value="previous"]');
  #btns = [...document.querySelectorAll(".imgBtn")];
  #scrollBack = true;

  init() {
    this.addEvents(this.#btns);
  }

  addEvents(btns) {
    btns.forEach((btn) => btn.addEventListener("click", this.changeImg.bind(this)));
  }

  changeImg(e) {
    const img = document.querySelector("[data-shirt-img]");
    if (e.target.dataset.btnValue === "previous") {
      e.target.classList.add("btn--inactive");

      if (!this.#scrollBack) {
        console.log("!previous");
        return;
      }
      const dataImage = localStorage.getItem("imgData"); // nie działa, broken state
      img.src = "data:image/png;base64," + dataImage; // nie działa, broken state

      this.#scrollBack = !this.#scrollBack;
      console.log("previous");
    } else {
      this.#btnPrevious.classList.remove("btn--inactive");

      const imgData = this.getBase64Image(img);
      this.getBase64Image(img);
      localStorage.setItem("currentImgSrc", imgData);
      img.src = "https://picsum.photos/200";
      this.#scrollBack = true;
      console.log("next");
    }
  }

  getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");
    // console.log(dataURL);

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
