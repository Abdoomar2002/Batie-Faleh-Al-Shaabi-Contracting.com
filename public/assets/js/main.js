function increaseNumber(target, element) {
  var current = 0;
  var increment = target / 50; // Adjust the increment value as desired

  var interval = setInterval(function () {
    current += increment;
    element.textContent = Math.floor(current);

    if (current >= target) {
      clearInterval(interval);
    }
  }, 50); // Adjust the interval time as desired
}

function startCounterAnimation() {
  var targetNumber1 = 217; // Change the target number for element 1
  var targetNumber2 = 4870; // Change the target number for element 2
  var targetNumber3 = 9458; // Change the target number for element 3

  var number1Element = document.querySelector("#first");
  var number2Element = document.querySelector("#second");
  var number3Element = document.querySelector("#third");

  increaseNumber(targetNumber1, number1Element);
  increaseNumber(targetNumber2, number2Element);
  increaseNumber(targetNumber3, number3Element);
}

function checkVisibility() {
  var targetElement = document.getElementById("speed");
  var rect = targetElement.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (rect.top < windowHeight) {
    startCounterAnimation();
    window.removeEventListener("scroll", checkVisibility);
  }
}
window.addEventListener("scroll", checkVisibility);
document.addEventListener("DOMContentLoaded", function () {
  var photo = document.getElementById("photo");
  var dataOfProduct = document.querySelector(".data-of-product");

  photo.classList.add("show");
  dataOfProduct.classList.add("show");
});
