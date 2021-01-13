function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    $("#text").show();

    const g_melee = ["2 For 1", "And Stay Down!", "Armor Dent", "Back Breaker", "Bell Ringer"];

    const randomNumber = getRandomInt(5);

    $("#text").prepend(g_melee[randomNumber] + "<br>");

    event.preventDefault();
  });
});

// Each button will link to a different array
// Might straight up make 16 arrays

// One each for each table