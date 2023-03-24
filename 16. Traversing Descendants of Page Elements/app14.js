// Traversing Descendants

$("#btn1").click(() => {
  const sel = $("input").val();
  if (sel) {
    $(sel).css("background-color", "red");
    $(".main").find(sel).css("color", "blue");
  }
});

$("#btn2").click(() => {
  $(".main div").find("button").css("background-color", "purple");
});