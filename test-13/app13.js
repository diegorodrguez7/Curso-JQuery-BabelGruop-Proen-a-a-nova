// Element Dimensions in JQuery.

$("div").addClass("box").click(function () {
  let html = `<div>width: ${$(this).width()}</div>`;
  html += `<div>height: ${$(this).height()}</div>`;
  html += `<div>iwidth: ${$(this).innerWidth()}</div>`;
  html += `<div>iheight: ${$(this).innerHeight()}</div>`;
  html += `<div>owidth: ${$(this).outerWidth()}</div>`;
  html += `<div>oheight: ${$(this).outerHeight()}</div>`;
  html += `<div>owidth: ${$(this).outerWidth(true)}</div>`;
  html += `<div>oheight: ${$(this).outerHeight(true)}</div>`;
  $(this).html(html);
});

$("#btn1").click(() => {
  console.log($(document).width());
  console.log($(document).height());
  console.log($(window).width());
  console.log($(window).height());
});