//Fadding effects
const element = "<h1>Diego Rodriguez</h1>";
$("div").first().html(element);

$("div").click(function () {
  $(this).fadeOut(1000);
  console.log($(this));
});

// Function to fadein and fade out the elements
$("button").click(function () {
  $("div").fadeIn(1000);
  $("h1").fadeIn(1000);
});