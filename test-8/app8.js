// Manipulate DOM with JQuery.

$("#btn1").click(() => {
  $("<h1>Hello</h1>").replaceAll(".div3");
  $(".div2").replaceWith("<h3>Hello 3</h3>");
});

$("#btn2").click(() => {
  const $element = $("#myInput").clone();
  const valueInput = $("#myInput").val();
  $("input").last().clone().prependTo("div");
});