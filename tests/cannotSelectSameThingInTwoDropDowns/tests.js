test( "When data centre is selected in a end list, it is removed from b end list ", function() {
	var aEndOptions = $('#theOptions1').text();
	var bEndOptions = $('#theOptions2').text();
	assertContains(bEndOptions, 'a');
	assertContains(bEndOptions, 'b');
	assertContains(bEndOptions, 'c');

	$('#theOptions1').val('2').trigger('change');

	assertContains($('#theOptions2').text(), 'a');
	assertContains($('#theOptions2').text(), 'b');
	assertDoesNotContain($('#theOptions2').text(), 'c');
});

function assertContains(text, subString){
	ok((text.indexOf(subString) > -1), "Whoops! " + text + " does not contain " +subString);
}

function assertDoesNotContain(text, subString){
	notEqual((text.indexOf(subString) > -1), true, "Bugger! " + text + " does contain " +subString);
}