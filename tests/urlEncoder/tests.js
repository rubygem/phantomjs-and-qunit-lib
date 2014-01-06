test( "Build url based on dataCentres", function() {
	var aEndDataCentre = 'Jimmy';
	var bEndDataCentre = 'Rolf';

	$('#aEnd').append('<option>'+aEndDataCentre+'</option>');
	$('#bEnd').append('<option>'+bEndDataCentre+'</option>');
	
	$('#aEnd').val(aEndDataCentre).trigger('change');
	$('#bEnd').val(bEndDataCentre).trigger('change');
	
	equal( bob(), '/quotationRequest/ports?aEnd='+aEndDataCentre+'&bEnd='+bEndDataCentre);
});

test( "Build url with encoded names of dataCentres with funny characters", function() {
	var aEndDataCentre = 'Hex 6&7';
	var bEndDataCentre = 'Hex 8&9';
	var encodedAEndDataCentre = encodeURI(aEndDataCentre);
	var encodedBEndDataCentre = encodeURI(bEndDataCentre);

	$('#aEnd').append('<option>'+aEndDataCentre+'</option>');
	$('#bEnd').append('<option>'+bEndDataCentre+'</option>');
	
	$('#aEnd').val(aEndDataCentre).trigger('change');
	$('#bEnd').val(bEndDataCentre).trigger('change');
	
	equal( bob(), '/quotationRequest/ports?aEnd='+encodedAEndDataCentre+'&bEnd='+encodedBEndDataCentre);
});