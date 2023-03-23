// Fadding effects
const element = "<h1>Diego Rodriguez</h1>";
$("div").first().html(element);

// Local variables
let counter = 0;
let hiddenElements = 0;
let fader = 0.5;

// Function to fadeOut the nodos
$("div").click(function (e) {
  $(this).fadeOut(1000, () => {
    counter++;
    hiddenElements++;
    const temp = `<h3>Counter: ${counter}</h3>`;
    $(this).html(temp);
    $("button").text(`Show(${hiddenElements})`);
  });
})

// Function to fadeTo the nodos.
$("button").click(function () {
  // $("div").fadeIn(1000);
  $("div").toggle(2000);
  hiddenElements = 0;
  $("button").text("All showing");
  $("button").fadeTo("slow", fader, () => {
    if (fader == 0.5) {
      fader = 1;
    } else {
      fader = 0.5;
    }
  });
});