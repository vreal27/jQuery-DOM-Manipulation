$(document).ready(function(){
	$("h2").on('click', function(e){
		$(".description").removeClass("active")
		$(this).find("+ .description").addClass("active")
	})
})