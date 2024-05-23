const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "PLC",
    price: 4345,
    colors: [
      {
        code: "black",
        img: "./img/plc2.png",
      },
      {
        code: "darkblue",
        img: "./img/plcblack.png",
      },
    ],
  },
  {
    id: 2,
    title: "UFD",
    price: 3583,
    colors: [
      {
        code: "lightgray",
        img: "./img/ufd.png",
      },
      {
        code: "green",
        img: "./img/ufd.png",
      },
    ],
  },
  {
    id: 3,
    title: "SENSOR",
    price: 250,
    colors: [
      {
        code: "lightgray",
        img: "./img/senor.png",
      },
      {
        code: "green",
        img: "./img/senor.png",
      },
    ],
  },
  {
    id: 4,
    title: "RELAYS",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/relay.png",
      },
      {
        code: "lightgray",
        img: "./img/relay.png",
      },
    ],
  },
  {
    id: 5,
    title: "CONTACTORS",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/contactor.png",
      },
      {
        code: "black",
        img: "./img/contactor.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₱" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


function addClickEffect(button) {
  if (!button.classList.contains('clicked')) {
      button.classList.add('clicked');
      setTimeout(() => {
          button.classList.remove('clicked');
      }, 600);
  }
}