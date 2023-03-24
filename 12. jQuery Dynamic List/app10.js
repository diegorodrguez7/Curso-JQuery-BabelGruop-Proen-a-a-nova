// Dinamic list in JQuery.

const divOutput = $(".output");
let counter = 0;

$("#btn1").click(() => {
  counter++;
  const value = $("input").val();
  const $li = $("<li>");
  const $span = $("<span>").text(value);
  const $btn = $("<button>").text("X");
  $span.click(function () {
    $li.toggleClass("red");
  });
  $btn.click(function () {
    $li.remove();
  })
  $li.append($span).append($btn);
  divOutput.append($li);
});
