$(document).ready(function () {
  var text = "Established itself as a leader in innovative energy solutions committed to providing sustainable and efficient fuel options for a greener future.";
  var index = 0;
  var speed = 10;

  function typeWriter() {
    if (index < text.length) {
      $(".main_txt").html(
        text.substring(0, index + 1) + '<span class="cursor">|</span>'
      );
      index++;
      setTimeout(typeWriter, speed);
    } else {
      $(".cursor").remove(); 
    }
  }

  typeWriter();
});
