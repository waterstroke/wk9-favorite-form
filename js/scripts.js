$(document).ready(function() {

  $("form#user-faves").submit(function(event) {
    var favDog = $("input#favDog").val();
    var favFruit = $("input#favFruit").val();
    var favColor = $("input#favColor").val();
    var favPlace = $("input#favPlace").val();

    $(".fillInDog").text(favDog);
    $(".fillInFruit").text(favFruit);
    $(".fillInColor").text(favColor);
    $(".fillInPlace").text(favPlace);

    $("#story").show();
    event.preventDefault();
  });
});
