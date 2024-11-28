//get audio element
var audio = document.getElementById("chaching");

//get the coin image element
var coin = document.getElementById("coin");

// Hide coin image when clicked
coin.addEventListener("click", () => {
  // Play the audio
  audio.play();
  //Hide the coin image
  coin.style.display = "none";
});

// Display coin image when the sound finishes
audio.addEventListener("ended", () => {
  //Display the coin image
  coin.style.display = "block";
});
function counter() {
  //counter input text element
  var counterElement = document.getElementById("counter");

  //current Value & next Value
  var currentValue = counterElement.getAttribute("value");
  var newValue = parseInt(currentValue) + 1;

  //set counter input text element value
  counterElement.setAttribute("value", newValue.toString());
}
