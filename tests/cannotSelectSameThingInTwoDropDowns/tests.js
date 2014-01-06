test( "When data centre is selected in a end list, it is removed from b end list ", function() {
	var aEndOptions = $('#aEnd').text();
	var bEndOptions = $('#bEnd').text();
	assertContains(bEndOptions, 'a');
	assertContains(bEndOptions, 'b');
	assertContains(bEndOptions, 'c');

	$('#aEnd').val('2').trigger('change');

	assertContains($('#bEnd').text(), 'a');
	assertContains($('#bEnd').text(), 'b');
	assertDoesNotContain($('#bEnd').text(), 'c');
});

function assertContains(text, subString){
	ok((text.indexOf(subString) > -1), "Whoops! " + text + " does not contain " +subString);
}

function assertDoesNotContain(text, subString){
	notEqual((text.indexOf(subString) > -1), true, "Bugger! " + text + " does contain " +subString);
}