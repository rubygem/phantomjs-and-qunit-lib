test( "When data centre is selected in a end list, it is removed from b end list ", function() {
	//Get the values of the selects
	var aEndOptions = $('#aEnd').text();
	var bEndOptions = $('#bEnd').text();
	
	//Check everything is there
	assertContains(bEndOptions, 'a');
	assertContains(bEndOptions, 'b');
	assertContains(bEndOptions, 'c');

	//Select one of the options
	$('#aEnd').val('b').trigger('change');

	//Get the updated options
	bEndOptions = $('#bEnd').text();

	//Check the option has been removed
	assertContains(bEndOptions, 'a');
	assertContains(bEndOptions, 'b');
	assertDoesNotContain(bEndOptions, 'c');
});

function assertContains(text, subString){
	ok((text.indexOf(subString) > -1), "Whoops! " + text + " does not contain " +subString);
}

function assertDoesNotContain(text, subString){
	notEqual((text.indexOf(subString) > -1), true, "Bugger! " + text + " does contain " +subString);
}