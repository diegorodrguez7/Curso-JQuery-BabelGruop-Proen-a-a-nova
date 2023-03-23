// Get Css properties values with JQuery

$("#btn1").click(() => {
  $("div").toggleClass("red");
  $("div").css("width", "100px");
});

$("#btn2").click(() => {
  $("div").toggleClass("blue");
  $("div").css("width", "+=50");
});

$("div").click(function () {
  const rc = "#" + Math.random().toString(16).substring(2, 8);
  const rc2 = "#" + Math.random().toString(16).substring(2, 8);
  $(this).css("background-color", rc);
  $(this).css("color", rc2);
  const temp = $(this).css(["color", "background-color", "height", "font-size", "width"]);
  let element = $(this).text();
  let html = `<h1>${element}</h1>`;
  for (const key in temp) {
    html += `<li>: ${temp[key]}</li>`;
  }
  html += "</ul>";
  output(html);
});

$(".div4").click(() => {
  output("test");
});

/**
 * 
 * @param {*} value 
 */
function output(value) {
  $(".div4").html(value);
}