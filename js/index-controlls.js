
$(document).ready(function(){


	$(window).scroll(function(){
				var st = $(this).scrollTop();
				// console.log($(this).scrollTop());

				// var targetH = 546;
				var targetH = $("#cover").height() - $("#filters-container").outerHeight(true);

				console.log(targetH);

				if ( st > targetH ) {
					$("#filters-container").addClass("fixed");
					// $("#map").css({marginTop: anchorHeight}).after($("#fake-scroll"));
				}else if( st < targetH){
					$("#filters-container").removeClass("fixed");
				}else{
					console.log("hello");
				}
			});


	// drop down stuff
	$(".filter").find(".dropdown-menu").find("li").click(function(){

		var newText = $(this).find("a").text();
		console.log(newText);

		$(this).closest(".filter").find("button").html(newText+'<span class="caret"></span>');

		console.log($(this).closest(".filter-drop-down"));

	});



})

