function filterKevinsWith(_language){
	$("#kevin-list").children().find(".kevin").each(function(kevin){
		console.log($(this).attr("data-language"));
		var language = $(this).attr("data-language");
		if (language == _language) {
			$(this).css("display", "table");
		}else{
			$(this).css("display", "none");
		}
	});
}
