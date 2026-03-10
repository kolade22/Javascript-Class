function censorText() {
  let textInput = document.getElementById("text-input").value;
  let censoredText = textInput;
  censoredText = censoredText.toLowerCase().replaceAll("bad", "****");
  censoredText = censoredText.toLowerCase().replaceAll("stupid", "****");
  censoredText = censoredText.toLowerCase().replaceAll("dumb", "****");
  censoredText = censoredText.toLowerCase().replaceAll("ugly", "****");

  document.getElementById("output-box").textContent = censoredText;
}
