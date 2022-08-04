const URL = "https://picsum.photos/200";

export class ImgChanger {
  #btnPrevious = document.querySelector('[data-btn-value="previous"]');
  #btns = [...document.querySelectorAll(".imgBtn")];
  #scrollBack = false;
  #currentImg = null;
  #lastImg = null;

  init() {
    this.saveImg(URL);
    this.addEvents(this.#btns);
  }

  saveImg(url) {
    const getBase64FromUrl = async (url) => {
      const data = await fetch(url);
      const blob = await data.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    };

    getBase64FromUrl(url).then((data) => {
      this.#currentImg = data;
      this.setImgSrc(this.#currentImg);
    });
  }

  setImgSrc(imgSrc) {
    const imgs = [document.querySelector("[data-shirt-img]"), ...document.querySelectorAll(".imgMiniature")];
    imgs.forEach((img) => {
      img.src = imgSrc;
      setTimeout(() => {
        img.classList.add("opacity--one");
      }, 300);
    });
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
      this.setImgSrc(this.#lastImg);

      this.#scrollBack = !this.#scrollBack;
    } else {
      this.#btnPrevious.classList.remove("btn--inactive");

      this.#lastImg = this.#currentImg;
      this.setImgSrc(URL);

      this.#scrollBack = true;
    }
  }

  getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
