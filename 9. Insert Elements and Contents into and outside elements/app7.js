// Insert and Contents into elements with JQUERY.

let counter = 0;
const total = 10;
const totalTwo = 3;

for (let i = 0; i < total; i++) {
  counter += 1;
  const $span = $(`<span>Hello, counter: ${counter}</span>`);
  $span.text("new");
  $(".div2").append($span);
}

for (let i = 0; i < totalTwo; i++) {
  const $btn = $(`<button>After ${i + 1}</button>`);
  $(".div4").after($btn);
  $btn.click(function () {
    console.log($(this).text());
  })
  $(`<button>iBefore ${i + 1}</button>`).insertBefore(".div4").click(function () {
    console.log($(this).text());
  });
}

for (let i = 0; i < totalTwo; i++) {
  $(`<button>iAfter ${i + 1}</button>`).insertAfter(".div4").click(function () {
    console.log($(this).text());
  });
}

$("#btn1").click(() => {
  $(".div1").text($("input").val());
  $(".div1").text(val);
  $(".div2").append(val);
  $(".div3").prepend(val);
  $(".div4").remove();
});

$("#btn2").click(() => {
  counter++;
  const $div = $(`<div>Hello, counter: ${counter}</div>`);
  // $(".div3").append($div);
  $div.appendTo(".div3");
});