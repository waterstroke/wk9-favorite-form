$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    // var favDog = $("input#favDog").val();
    // var favFruit = $("input#favFruit").val();
    // var favColor = $("input#favColor").val();
    // var favPlace = $("input#favPlace").val();
    var blanks = ["favDog","favFruit","favColor","favPlace"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(blank);
      $("." + blank).text(userInput)
     });
    //

    // $(".fillInDog").text(favDog);
    // $(".fillInFruit").text(favFruit);
    // $(".fillInColor").text(favColor);
    // $(".fillInPlace").text(favPlace);

    $("#story").show();

    event.preventDefault();
  });
});
