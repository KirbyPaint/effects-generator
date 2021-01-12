function rng() {
  return 40;
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    $("#text").show();

    const randomNumber = rng();

    $("#text").prepend(randomNumber);

    event.preventDefault();
  });
});