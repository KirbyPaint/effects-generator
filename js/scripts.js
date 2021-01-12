$(document).ready(function() {
  $("form#form").submit(function(event) {
    $("#text").show();

    event.preventDefault();
  });
});