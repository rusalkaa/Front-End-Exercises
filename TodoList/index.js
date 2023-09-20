//Adding items to the list:
$("#submit").click(function(){
    var userAddingTodoValue = $("#new-todo").val();
    if(userAddingTodoValue !== ""){
        addItems(userAddingTodoValue);
    }
    else{
        alert("Please write something");
    }
    
})

$(document).keydown(function(event){
    
if(event.key==="Enter"){
    var userAddingTodoValue = $("#new-todo").val();
    if(userAddingTodoValue !== ""){
        addItems(userAddingTodoValue);
    } else {
        alert("Please write something");
    }
}
})

function addItems(userAddingTodoValue){
    var newItem = $("<li>");
    var newButton = $("<button>");

    newItem.addClass("item").text(userAddingTodoValue);
    newButton.addClass("delete").text("Delete");

    $(newItem).append(newButton);
    $("#things").append(newItem);

    $("#new-todo").val("");
}

//Deleting Items from the list:
$(document).on("click", ".delete", function () {
    $(this).closest("li").remove();
});

//Clearing All items: 
$(".delete-all").click(function(){
    clearAll();
})

function clearAll(){
    $("#things").empty(); 
} 