// Check off specific Todos By Clicking. This listener will fire everytime a new li is added. 
$("ul").on("click", "li", function(event){
    $(this).toggleClass("completed");
});

// click on X to delete To-Do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});



    //add a listener for the enter key
    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
            //grabing new todo text from input 
                var todoText = $(this).val();
                
            // clear the input box
                $(this).val("");  
                
            // create a new li and add to ul 
            $('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
        };
    });
    
           
 $(".fa-plus").click(function(){
     $("input[type='text']").fadeToggle();
 });           

            
  
 