$(document).ready(function(){
  $("form#form").submit(function(event) {
    var answer1 = $("input#question1").val();
    var answer1final=answer1.toLowerCase();
    var answer2 = $("input#question2").val();
    var answer2final=answer2.toLowerCase();
    var answer3 = $("input#question3").val();
    var answer3final=answer3.toLowerCase();

    if (answer1final === "yes") {
      alert("You are a conservative");
    } else if (answer2final === "yes") {
      alert("You are a moderate");
    } else if (answer3final === "yes"){
      alert("You are a liberal");
    } else {
      alert("Congratulations on nothing.");
    }




    event.preventDefault();
  });
});
