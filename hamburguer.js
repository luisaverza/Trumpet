$( '.hamburger' ).toggleClass('show');
$( '.cross' ).toggleClass('hide');

$( '.hamburger' ).click(function() {
	$( '.menu-list' ).slideToggle( 'slow', function() {
		$( '.hamburger' ).toggleClass('hide show');
		$( '.cross' ).toggleClass('show hide');
	});
});

$( '.cross' ).click(function() {
	$( '.menu-list' ).slideToggle( 'slow', function() {
		$( '.hamburger' ).toggleClass('show hide');
		$( '.cross' ).toggleClass('hide show');
	});
});
