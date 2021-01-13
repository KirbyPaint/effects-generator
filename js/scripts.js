function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    $("#text").show();

    const randomNumber = getRandomInt(40);

    $("#text").prepend(randomNumber + " " + "<br>");

    event.preventDefault();
  });
});