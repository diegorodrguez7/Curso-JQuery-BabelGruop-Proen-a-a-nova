// Manipulate DOM elements classes with JQUERY. Adding or removing.

$("div").click(function () {
  const boo = $(this).hasClass("red");
  if (boo) {
    $(this).text("Already red");
  } else {
    $(this).text("Change to red");
  }
  $(this).addClass("red");
  $(this).removeClass("blue");
});

$("#btn1").click(() => {
  $("div").addClass("blue");
});

$("#btn2").click(() => {
  $("div").toggleClass("red");
  $("div").toggleClass("blue");
});


