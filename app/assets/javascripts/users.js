var ready = function (){
	$('.post-tools').hide();

	$('.post-form').on('click', function(){
		$('.post-form textarea').attr('rows', 3);
		$('.post-tools').show();
	});

	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
		e.stopPropagation();
	});

	console.log('test', Math.random());
};

$(document).ready(ready);
$(document).on('page:load', ready);