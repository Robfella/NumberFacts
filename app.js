$(function Test(){
     $("#button-sbm").click(function() {
            var userInput = document.getElementById("userInput").value;
            console.log(userInput);

            $.ajax({
                type: 'GET',
                url: "http://numbersapi.com/" + userInput + "/math?callback=?",
                dataType: 'jsonp',
                success: function(results) {
                    $("#results").append("•   " + results + "<br>");

                }
            });
       });
});