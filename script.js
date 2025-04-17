// Typing Effect Script
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Full Stack Web Developer",
  "Software Developer",
  "Python Enthusiast",
  "Node.js Developer",
  "Tech Explorer"
];

const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
