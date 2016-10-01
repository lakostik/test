$(document).ready(function(){
	$('.item_tool').click(function(event){
	event.preventDefault();
		if ($(this) == $('.active')) {
			return
		}
		else {
			$('.list').children().removeClass('active');
			$(this).addClass('active');
			$('.info_tool_header, .info_tool_content').html('');
			var headerItem 	= $(this).closest('.item_tool.active').find('.header_item').html();
			var contentItem = $(this).closest('.item_tool.active').find('.content_item').html();
			$('.info_tool_header').append(headerItem);
			$('.info_tool_content').append(contentItem);
		}
	});
	$('.item_tool.active').trigger('click');
	
});




