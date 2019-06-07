function createGrid(x) 
{
    for (var i = 0; i < x; i++) {
        $("#container").append(" <div class='row' id='row"+i+"'"+ "</div>");
        
        for (var j = 0; j < x; j++) {
            $('#row'+ i+ '').append("<div class='box' ><div class='inner'></div></div>");
        }

    }
};

function clearGrid(){
    $(".grid").remove();
};  
function refreshGrid(){
window.location.reload();
};

 var z = prompt("Hello User,Enter the number of boxes you want? ");
function myFunction()
{
return document.getElementById("coloq").value;

}
$(document).ready(function() {
    createGrid(z);
    $(".box").click(function() {
        $(this).css("background-color", myFunction());
        });
    $("#coloq").click(function() {
        $(".box").css("background-color", "");        
        });
    $(".box").dblclick(function() {
        $(this).css("background-color", "");
        });
    $("#newGrid").click(function() {
        refreshGrid();
    $(".box").dblclick(function() {
        $(this).css("background-color", "");
        });
        $(".box").click(function() {
        $(this).css("background-color",myFunction());
        });
    }); 
});
