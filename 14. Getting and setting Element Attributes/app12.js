// Gettin and Setting element attributes with Query.

let counter = 0;
const arr = [];

for (let i = 0; i < 5; i++) {
  $("<input>").attr({
    type: "checkbox",
    value: i,
    checked: "checked"
  }).appendTo(".div3").click(function () {
    checkerInput($(this));
  });
}

for (let i = 0; i < 5; i++) {
  $element = $("<input>");
  $element.attr({
    type: "checkbox",
    value: i
  }).appendTo(".div4");
  $element.prop("checked", true);
  $element.click(function () {
    checkerInput($(this));
  });
}

/**
 * 
 * @param {*} $ele 
 */
function checkerInput($ele) {
  let temporary = "";
  temporary += `<div>Attr: ${$ele.attr("checked")}</div>`;
  temporary += `<div>Prop: ${$ele.prop("checked")}</div>`;
  temporary += `<div>Is: ${$ele.is(":checked")}</div>`;
  $(".div1").html(temporary);
}

$(".div2").click(function () {
  counter++;
  $(".div1").html(`<div>Counter: ${counter}</div>`);
});

$("div").click(function () {
  const random = Math.floor(Math.random() * 100);
  $(this).attr("id", `id${random}`);
  console.log(`id${random}`);
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