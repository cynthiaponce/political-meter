$(document).ready(function(){
  $("form#form").submit(function(event) {
    var answer1 = $("input#question1").val();
    var answer2 = $("input#question2").val();
    var answer3 = $("input#question3").val();

    if (answer1.toLowerCase() === "yes") {
      alert("You are a conservative");
    } else if (answer2.toLowerCase() === "yes") {
      alert("You are a moderate");
    } else if (answer3.toLowerCase() === "yes"){
      alert("You are a liberal");
    } else {
      alert("Congratulations on nothing.");
    }




    event.preventDefault();
  });
});
