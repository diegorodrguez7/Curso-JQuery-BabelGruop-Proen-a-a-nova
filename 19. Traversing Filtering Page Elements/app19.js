// Traversing filtering

$("#btn1").click(() => {
  $main = $(".main").children();
  $main.first().css("color", "red");
  $main.last().css("color", "blue");
  $main.eq(6).css("color", "blue");
  $main.eq(7).css("background-color", "green");
});

$("#btn2").click(() => {
  $main = $(".main").children();
  $btns = $main.filter("button");
  $main.filter("button").css("background-color", "black");
  $btns.css("color", "white");
});

$("#btn3").click(() => {
  $main = $(".main").children();
  $btns = $main.not("button");
  $main.not("button").css("background-color", "purple");
  $btns.css("color", "white");
});

$("#btn4").click(() => {
  $(".main div").filter(".div1").css("color", "red");
});

$("#btn5").click(() => {
  $(".main div").filter(".div").css("color", "green");
});

