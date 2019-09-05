// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var contactScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.78,
  reverse: true
})
  .setClassToggle(".contactContainer", "contactContainerDark")
  .addTo(controller); // assign the scene to the controller

var menuScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.1,
  reverse: true
})
  .on("enter", darkMenuEnter)
  .on("leave", darkMenuLeave)
  .addTo(controller);

var logoScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.05,
  reverse: true
})
  .setClassToggle(".logo", "darkLogo")
  .addTo(controller);

function contactButton() {
  console.log("click");
  // document.getElementById("contactFormContainer").style.display = "flex";

  let form = document.getElementById("contactForm");

  form.style.display = "block";
  console.log(typeof form);
}

function darkMenuEnter() {
  document.getElementById("noteImg").src = "../images/music-note-white.png";
  document.getElementById("bracketImg").src = "../images/brackets-white.png";
}

function darkMenuLeave() {
  document.getElementById("noteImg").src = "../images/music-note-black.png";
  document.getElementById("bracketImg").src = "../images/brackets-black.png";
}
