test( "When data centre is selected in a end list, it is removed from b end list ", function() {
	//Get the values of the selects
	var aEndOptions = $('#aEnd').text();
	var bEndOptions = $('#bEnd').text();
	
	//Check everything is there
	assertContains(bEndOptions, '3');
	assertContains(bEndOptions, '1');
	assertContains(bEndOptions, '2');

	//Select one of the options
	$('#aEnd').val('2').trigger('change');

	//Get the updated options
	bEndOptions = $('#bEnd').text();

	//Check the option has been removed
	assertContains(bEndOptions, '3');
	assertContains(bEndOptions, '1');
	assertDoesNotContain(bEndOptions, '2');
});

function assertContains(text, subString){
	ok((text.indexOf(subString) > -1), "Whoops! " + text + " does not contain " +subString);
}

function assertDoesNotContain(text, subString){
	notEqual((text.indexOf(subString) > -1), true, "Bugger! " + text + " does contain " +subString);
}