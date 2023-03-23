/**
 * Exercise to hide and show divs.
 */

const firstDiv = $("div").first();

//Autocomplete the h3 with a value with .html()
const value = "<h3>Texto do pueba</h3>";
firstDiv.html(value);

//Evento para esconder cada div
$("div").click((e) => {
  const targetElementClicked = $(e.target);
  targetElementClicked.hide("progress");
});

//Evento para mostrar de nuevo los divs.
$("button").click((e) => {
  $("div").show("fast");
  $("h3").show("slow");
});