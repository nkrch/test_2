//link

function openLink(link) {
  window.location = link + ".html";
}

function formAct() {
  event.preventDefault();
  console.log("form");
}

document.getElementById("scroll-top").onclick = scrollTop;

function scrollTop() {
  console.log("scroll");

  window.scrollTo(0, 0);
}

if (document.getElementById("link") != null) {
  document.getElementById("link").onclick = postFunc;
}

if (document.getElementById("post") != null) {
  document.getElementById("post").onclick = postFunc;
}

if (document.getElementById("adr") != null) {
  document.getElementById("adr").onclick = adrFunc;
}

if (document.getElementById("scrollBottom") != null) {
  document.getElementById("scrollBottom").onclick = scrollBottom;
}

function scrollBottom() {
  let i = document.getElementById("section-four").offsetTop - 135;
  window.scrollTo(0, i);
}

function postFunc(params) {
  console.log("post");
  window.open(
    "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrtdNbNzmPslqZknxNnVQqPDgDQpGssMhQbRxNVRdzvWvQgTSxTvQPvFCfTXSGwVkMCZL"
  );
}

if (document.getElementById("phoneCall") != null) {
  document.getElementById("phoneCall").onclick = phoneCall;
}

function phoneCall() {
  location.href = "tel:80295536745";
}

function adrFunc() {
  location.href =
    "https://yandex.by/maps/157/minsk/house/Zk4YcwJiSkIFQFtpfXVxcXtkYw==/?indoorLevel=1&ll=27.552372%2C53.900778&utm_medium=mapframe&utm_source=maps&z=16.61";
}

//menu
document.getElementById("menu-burger").onclick = menuBurger;
document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
document.getElementsByTagName("nav")[0].style.position = "absolute";
function menuBurger() {
  console.log("burger");

  document.getElementsByTagName("nav")[0].style.right = 0 + "px";
  document.getElementById("closeBtn").style.display = "flex";
  document.getElementById("closeBtn").onclick = closeMenu;
  document.getElementById("closeBtn").style.position = "relative";
  document.getElementsByTagName("nav")[0].style.top =
    document.getElementsByTagName("header")[0].offsetTop +
    document.getElementsByTagName("header")[0].offsetHeight +
    "px";
}

function closeMenu(params) {
  console.log("close");
  document.getElementsByTagName("nav")[0].style.position = "none";
  document.getElementsByTagName("nav")[0].style.right =
    -2 * this.offsetWidth + "px";
}

//openLink

function openLink(link) {
  window.location = link + ".html";
}

//phone

let clicks = 0;

if (document.getElementById("phone")) {
  document.getElementById("phone").oninput = phoneInputFunc;
  document.getElementById("phone").onclick = phoneClickFunc;
}

function phoneInputFunc() {
  event.preventDefault();
  console.log(Number(event.data));
  if (Number(event.data) == NaN) {
    console.log("not a number");
    document.getElementById("phone").value = document
      .getElementById("phone")
      .value.slice(0, document.getElementById("phone").value.length - 1);
  }
  /*if (
    document.getElementById("phone").value.length == 7 ||
    document.getElementById("phone").value.length == 11 ||
    document.getElementById("phone").value.length == 14
  ) {
    console.log("space");
    document.getElementById("phone").value += " ";
  }*/
}

function phoneClickFunc() {
  if (clicks == 0 && document.getElementById("phone")) {
    clicks++;
    document.getElementById("phone").value = "+375 ";
  }
}

//theme

let theme = "light";
const body = document.getElementsByTagName("body")[0],
  buttons = document.getElementsByTagName("button"),
  a = document.getElementsByTagName("a"),
  div = document.getElementsByTagName("div"),
  li = document.getElementsByTagName("li"),
  nav = document.getElementsByTagName("nav"),
  h3 = document.getElementsByTagName("h3"),
  h4 = document.getElementsByTagName("h4"),
  article = document.getElementsByTagName("article"),
  main = document.getElementsByTagName("main"),
  header = document.getElementsByTagName("header"),
  form = document.getElementsByTagName("form"),
  input = document.getElementsByTagName("input"),
  whitebutton = document.getElementsByClassName("white-button"),
  langCard = document.getElementsByClassName("lang-card"),
  section = document.getElementsByTagName("section");
const darkTheme = {
  background: "#1E1E1E",
  color: "white",
  btn: "#4159BB",
  svg: `<div id='moonImg'></div>
`,
  mainBtnInvert: 1,
};
const lightTheme = {
  background: "white",
  color: "black",
  btn: "#4159BB",
  svg: `<svg
  width="30.000000"
  height="30.000000"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <desc>Created with Pixso.</desc>
  <defs>
    <pattern
      id="pattern_2_18890"
      patternContentUnits="objectBoundingBox"
      width="1.000000"
      height="1.000000"
    >
      <use
        xlink:href="#image2_1889_0"
        transform="matrix(0.013889,0,0,0.013889,0,0)"
      />
    </pattern>
    <image
      id="image2_1889_0"
      width="72.000000"
      height="72.000000"
      xlink:href="data:image/png;base64,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"
    />
  </defs>
  <rect
    id="Sun"
    width="22.000000"
    height="22.000000"
    fill="url(#pattern_2_18890)"
    fill-opacity="1.000000"
  />
</svg>
`,
  mainBtnInvert: 0,
};
function changeTheme() {
  if (theme == "light") {
    theme = "dark";
    localStorage.setItem("theme01050403", "dark");
    colors(darkTheme);
    objTheme = darkTheme;
    document.getElementById("theme-button").innerHTML = objTheme.svg + " Тема";
    innerChangeF(objTheme);
  } else {
    theme = "light";
    objTheme = lightTheme;
    localStorage.setItem("theme01050403", "light");
    document.getElementById("theme-button").innerHTML = objTheme.svg + " Тема";
    colors(lightTheme);
    innerChangeF(objTheme);
  }

  function innerChangeF(objTheme) {
    if (document.getElementById("subs")) {
      document.getElementById("subs").style.borderColor = objTheme.color;
    }
    if (document.getElementById("adr")) {
      document.getElementById("adr").style.color = "white";
    }

    console.log(theme);
  }
}

function colors(objTheme) {
  /*document.getElementById(
    "main-button"
  ).style.filter = `invert(${objTheme.mainBtnInvert})`;*/
  invertF(objTheme);
  body.style.backgroundColor = objTheme.background;
  body.style.color = objTheme.color;
  document.getElementById(
    "menu-burger"
  ).style.filter = `invert(${objTheme.mainBtnInvert})`;
  colorFC(buttons, objTheme);
  colorFC(h3, objTheme);
  borderColorFC(h3, objTheme);
  colorFC(h4, objTheme);
  borderColorFC(h4, objTheme);
  borderColorFC(section, objTheme);
  borderColorFC(langCard, objTheme);
  borderColorFC(form, objTheme);

  whiteCLR(whitebutton);
  whiteCLR(document.getElementsByClassName("white-button-footer"));

  colorFC(a, objTheme);
  colorFC(input, objTheme);
  colorFC(li, objTheme);
  borderColorFC(li, objTheme);
  borderColorFC(article, objTheme);
  bcrColor(header, objTheme);
  bcrColor(nav, objTheme);
  borderColorFC(header, objTheme);
  borderColorFC(div, objTheme);
  borderColorFC(main, objTheme);
}

function invertF(objTheme) {
  document.getElementById(
    "main-button"
  ).style.filter = `invert(${objTheme.mainBtnInvert})`;
  let logo = document.getElementsByClassName("logo");

  for (let i = 0; i < logo.length; i++) {
    const element = logo[i];
    element.style.filter = `invert(${objTheme.mainBtnInvert})`;
  }
}
function colorFC(arr, objTheme) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.style.color = objTheme.color;
  }
}

function borderColorFC(arr, objTheme) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.style.borderColor = objTheme.color;
  }
}

function bcrColor(arr, objTheme) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.style.backgroundColor = objTheme.background;
  }
}

function whiteCLR(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.style.color = "white";
  }
}

function placehColor(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.placeholder.style.color = "white";
  }
}

//localstor
if (!localStorage.getItem("theme01050403")) {
  localStorage.setItem("theme01050403", "light");
} else {
  if (localStorage.getItem("theme01050403") == "light") {
    theme = "dark";
    changeTheme(localStorage.getItem("theme01050403"));
  } else {
    theme = "light";
    changeTheme(localStorage.getItem("theme01050403"));
  }
}
