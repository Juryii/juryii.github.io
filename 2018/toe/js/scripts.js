$(function(){
    
  $('.asc').click(function (event) {
   	var answer = $(this).next();
        
    var ans = answer.not(answer).slideUp(400);
   	answer.slideToggle(400);
    console.log(ans);
})

});


        