// Gettin and Setting element attributes with Query.

let counter = 0;
const arr = [];

for (let i = 0; i < 5; i++) {
  $("<input>").attr({
    type: "checkbox",
    value: i,
    checked: "checked"
  }).appendTo(".div4");
}

for (let i = 0; i < 5; i++) {
  $element = $("<input>");
  $element.attr({
    type: "checkbox",
    value: i
  }).appendTo(".div3");
  $element.prop("checked", true);
}

$(".div1").click(function () {
  counter++;
  $(".div1").html(`<div>Counter: ${counter}</div>`);
});

$("div").click(function () {
  const random = Math.floor(Math.random() * 100);
  $(this).attr("id", `id${random}`);
});

$("#btn1").click(() => {
  // $(".div1").addClass("box").empty();
  if (arr.length > 0) {
    $element = arr.shift();
    $(".div4").append($element);
  }
  $("input").attr(
    {
      type: "number",
      min: "0",
      min: "10",
      value: "5",
    }
  );
});

$("#btn2").click(() => {
  // $element = $(".div1").detach();
  // arr.push($element);
});