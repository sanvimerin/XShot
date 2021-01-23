const smartphoneScreenshotBtn = document.querySelector("#smartphoneScreenshot");
const tabletScreenshotBtn = document.querySelector("#tabletScreenshot");
const visiblePageScreenshotBtn = document.querySelector("#visibleScreenshot");
const fullPageScreenshotBtn = document.querySelector("#fullpageScreenshot");
const browserMockupBtn = document.querySelector("#browserMockup");
const curentWebPageURL = document.querySelector("#curentWebPageURL");
const downloadMockup = document.querySelector("#downloadMockup");
const main = document.querySelector(".main");

smartphoneScreenshotBtn.onclick = (e) => {
  e.preventDefault();
  smartphoneScreenshot();
};
tabletScreenshotBtn.onclick = (e) => {
  e.preventDefault();
  tabletScreenshot();
};
visiblePageScreenshotBtn.onclick = (e) => {
  e.preventDefault();
  visiblePageScreenshot();
};
fullPageScreenshotBtn.onclick = (e) => {
  e.preventDefault();
  fullPageScreenshot();
};
downloadMockup.onclick = (e) => {
  e.preventDefault();
  browserMockup();
};
chrome.tabs.query(
  { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  function (tabs) {
    curentWebPageURL.innerHTML = tabs[0].url;
  }
);

const smartphoneScreenshot = () => {
  const screenshotURL =
    "https://api.screenshotmachine.com?key=ea5c80&url=" +
    curentWebPageURL.innerHTML +
    "&device=phone&dimension=480x800";

  window.open(screenshotURL);
};
const tabletScreenshot = () => {
  const screenshotURL =
    "https://api.screenshotmachine.com?key=ea5c80&url=" +
    curentWebPageURL.innerHTML +
    "&device=tablet&dimension=800x1280";

  window.open(screenshotURL);
};
const visiblePageScreenshot = () => {
  const screenshotURL =
    "https://api.screenshotmachine.com?key=ea5c80&url=" +
    curentWebPageURL.innerHTML +
    "&device=desktop&dimension=1024x768";

  window.open(screenshotURL);
};
const fullPageScreenshot = () => {
  const screenshotURL =
    "https://api.screenshotmachine.com?key=ea5c80&url=" +
    curentWebPageURL.innerHTML +
    "&device=desktop&dimension=1024xfull";

  window.open(screenshotURL);
};
const browserMockup = () => {
  const screenshotURL =
    "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
    curentWebPageURL.innerHTML +
    "&color=" + colorCode.innerHTML.substring(1);

  window.open(screenshotURL);
};

const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

setColor();
input.addEventListener("input", setColor);

//ES7 is not working here, so used old
function setColor() {
	colorCode.innerHTML = input.value;
}

//For About page to fade in
$("#browserMockup").click(function () {
  main.style.display="none";
  $(".mockup").fadeIn(350);
});

//For About page to fade out
$(".backIcon").click(function () {
  main.style.display="block";
  $(".mockup").fadeOut(350);
});