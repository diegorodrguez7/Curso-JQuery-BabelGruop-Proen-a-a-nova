//Sliding effects.
$("#btn2").hide();

//Fucntion to slide up the divs when u clicked.
$("#btn1").click(() => {
  $("div").slideUp("slow", doneFunction);
});

$("#btn2").click(() => {
  $("div").slideDown("fast", doneFunction);
});

// Fucntion that hide and show elements (divs)
function doneFunction() {
  $("#btn1").toggle();
  $("#btn2").toggle();
}