$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("Incorrect one, please try again");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text(
      "You have WOW! Congratulations for choosing the correct one!"
    );
    $("#outputDiv").toggle();
  });
});
