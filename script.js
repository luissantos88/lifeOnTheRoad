function success() {
  if (
    document.getElementById("input").value === "" ||
    document.getElementById("input").value <= 0
  ) {
    document.getElementById("subButon").disabled = true;
  } else {
    document.getElementById("subButon").disabled = false;
  }
}

$(function () {
  $("body").on("click", "#subButon", function (e) {
    const audio = new Audio("resources/audio.mp3");
    audio.volume = 0.5;
    audio.play();
    e.preventDefault();

    $("body").append(
      '<div id="overlay">' +
        '<img id="loading" src="resources/carro2.gif">' +
        "</div>"
    );

    setTimeout(function () {
      $("#overlay").remove();
      calculate();
    }, 3000); //2 seconds
  });
});
