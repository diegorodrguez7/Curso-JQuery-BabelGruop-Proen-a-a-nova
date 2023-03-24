//Custom JQuery Animations

$("#btn1").click(() => {
  $(".div1").text("Im moving");
  $(".div1").animate({
    left: "+=50",
    opacity: 0.5
  }, 500, () => {
    $(".div1").text("STOPPED");
  });
  $(".div2").animate({
    left: "+=50",
    fontSize: "+=5px"
  }, 2000, () => {
    $(".div2").css("color", "red");
    $(".div2").text("IM BIGGER");
  });
  $(".div3").animate({
    top: "+=50"
  }, 1000, () => {
    $(".div3").text("DONE");
  });
});

$("#btn2").click(() => {
  $(".div1").text("Im moving").animate({
    left: "-=50",
    opacity: 1
  }, 500, () => {
    $(".div1").text("STOPPED");
  });
  $(".div3").animate({
    top: "-=50"
  }, 3000, () => {
    $(".div3").text("DONE");
  });
});