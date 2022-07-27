export class ImgChanger {
  #btns = [...document.querySelectorAll(".imgBtn")];

  init() {
    console.log("hello");
    this.addEvents(this.#btns);
  }

  addEvents(btns) {
    btns.forEach((btn) => btn.addEventListener("click", this.changeImg));
  }

  changeImg() {
    console.log("changeImg()");
    const img = document.querySelector("[data-shirt-img]");

    this.someFunction(); // this issue

    // if (e.target.dataset.btnValue === "previous") {
    //   const dataImage = localStorage.getItem("imgData");
    //   img.src = "data:image/png;base64," + dataImage;
    //   console.log("previous");
    // } else {
    //   //   const imgData = this.getBase64Image(img);
    //   //   this.getBase64Image(img);
    //   //   this.someFunctions();
    //   //   localStorage.setItem("currentImgSrc", imgData);
    //   img.src = "https://picsum.photos/200";
    //   console.log("next");
    // }
  }

  #someFunction() {
    console.log("someFunction");
  }

  getBase64Image(img) {
    console.log(img);
    // const canvas = document.createElement("canvas");
    // canvas.width = img.width;
    // canvas.height = img.height;

    // const ctx = canvas.getContext("2d");
    // ctx.drawImage(img, 0, 0);

    // const dataURL = canvas.toDataURL("image/png");

    // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
