$().ready(function() {
	$('#matt-photo-container').hover(
		function() { // in
			$('#matt-photo').fadeOut(250);
		},
		function() { // out
			$('#matt-photo').fadeIn(250);
		}
	);
});
