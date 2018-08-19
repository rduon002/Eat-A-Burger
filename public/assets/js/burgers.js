//Methods utilized to perform AJAX request
$(function() {
    //Submit button 
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //Grab burger name from form field.
        //When user submits burger name, set devoured state to false.
        let newBurger = {
        burger_name: $("#burgerToGo").val().trim(),
        devoured: 0
        };

        //Ajax request POST .
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            //If burger is submitted, reload page to reflect
            location.reload();
        }
        );
    });

    //Click event for "Devour me" button.
    $(".change-devour").on("click", function(event) {
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");
        //Change state to true when devour is clicked
        let newDevourState = {
          devoured: "true"
        };
    
        //Ajax PUT request for devouring burger.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed devour to", newDevour);
            //If devoured clicked, reload page to reflect update
            location.reload();
          }
        );
      });   
});