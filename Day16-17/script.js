// Dropdown Menu - Also works for mobile menu
function createMenu() {
  const mainContent = document.querySelector(".main-content");
  const dropdownDiv = document.createElement("div");
  const dropdownBtn = document.createElement("button");
  const dropdownContentDiv = document.createElement("div");

  dropdownDiv.classList.add("dropdown");
  dropdownBtn.classList.add("dropdown-btn");
  dropdownContentDiv.classList.add("dropdown-content");

  mainContent.appendChild(dropdownDiv);
  dropdownDiv.appendChild(dropdownBtn);
  dropdownDiv.appendChild(dropdownContentDiv);

  let creditArray = [
    ["Diego PH", "https://unsplash.com/photos/BCuxVP5WEsU"],
    ["Dominik Schröder", "https://unsplash.com/photos/FIKD9t5_5zQ"],
    ["Guillaume Galtier", "https://unsplash.com/photos/3YrppYQPoCI"],
    ["uriel", "https://unsplash.com/photos/xtgONQzGgOE"],
  ];

  dropdownBtn.textContent = "Image Credits";

  for (i = 0; i < creditArray.length; i++) {
    const l = document.createElement("a");
    l.textContent = creditArray[i][0];
    l.href = creditArray[i][1];
    l.target = "_blank";
    dropdownContentDiv.appendChild(l);
  }
}

function createImageSlider() {
  let currentIndex = 0;
  let imgArray = [
    "./Images/diego-ph-BCuxVP5WEsU-unsplash.jpg", // Diego PH: https://unsplash.com/photos/BCuxVP5WEsU
    "./Images/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg", // Dominik Schroder: https://unsplash.com/photos/FIKD9t5_5zQ
    "./Images/guillaume-galtier-3YrppYQPoCI-unsplash.jpg", // Guillaume Galtier: https://unsplash.com/photos/3YrppYQPoCI
    "./Images/uriel-xtgONQzGgOE-unsplash.jpg", // Uriel: https://unsplash.com/photos/xtgONQzGgOE
  ];
  const mainContent = document.querySelector(".main-content");
  const imageSliderDiv = document.createElement("div");
  const imageDiv = document.createElement("div");
  const sky = new Image(500, 250);
  const dotsDiv = document.createElement("div");
  const imgCaption = document.createElement("span");
  const leftButton = document.createElement("button");
  const rightButton = document.createElement("button");
  const left = new Image(50, 50);
  const right = new Image(50, 50);

  left.src = "./Images/chevron-left.svg";
  right.src = "./Images/chevron-right.svg";

  imageDiv.classList.add("img-div");
  imageSliderDiv.classList.add("img-slider-div");
  sky.classList.add("sky-img");
  dotsDiv.classList.add("dots-div");
  imgCaption.classList.add("img-caption");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.type = "button";
  rightButton.type = "button";

  leftButton.addEventListener("click", function () {
    currentIndex = leftPic(currentIndex, imgArray);
  });
  rightButton.addEventListener("click", function () {
    currentIndex = rightPic(currentIndex, imgArray);
  });

  mainContent.appendChild(imageSliderDiv);
  imageSliderDiv.appendChild(imageDiv);
  imageDiv.appendChild(sky);
  imageSliderDiv.appendChild(dotsDiv);

  for (let i = 0; i < imgArray.length; i++) {
    const dot = document.createElement("button");
    dot.classList.add("img-dots");
    dot.type = "button";
    dot.dataset.index = i;
    dot.addEventListener("click", function () {
      currentIndex = setSlideImage(i, imgArray);
    });
    dotsDiv.appendChild(dot);
  }

  imageDiv.appendChild(imgCaption);
  imageDiv.appendChild(leftButton);
  imageDiv.appendChild(rightButton);
  leftButton.appendChild(left);
  rightButton.appendChild(right);

  setSlideImage(currentIndex, imgArray);
  let interval = setInterval(function () {
    currentIndex = rightPic(currentIndex, imgArray);
  }, 5000);
}

function setSlideImage(i, arr) {
  const skyImg = document.querySelector(".sky-img");
  const imgCaption = document.querySelector(".img-caption");
  const dot = document.querySelector(`[data-index='${i}']`);
  skyImg.src = arr[i];
  imgCaption.textContent = `${i + 1} / ${arr.length}`;
  setActiveTab(dot);
  return i;
}

function leftPic(i, arr) {
  if (i === 0) {
    i = arr.length - 1;
  } else {
    i -= 1;
  }
  setSlideImage(i, arr);
  return i;
}

function rightPic(i, arr) {
  if (i === arr.length - 1) {
    i = 0;
  } else {
    i += 1;
  }
  setSlideImage(i, arr);
  return i;
}

function setActiveTab(dot) {
  let prev = document.getElementsByClassName("active");
  if (prev.length > 0) {
    prev[0].className = prev[0].className.replace("active", "");
  }
  dot.classList.add("active");
}

createMenu();
createImageSlider();
