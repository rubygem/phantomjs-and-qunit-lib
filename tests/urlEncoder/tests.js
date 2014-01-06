test( "Build url based on dataCentres", function() {
	$('#aEnd').append('<option>Jimmy</option>');
	$('#bEnd').append('<option>Rolf</option>');
	$('#aEnd').val('Jimmy').trigger('change');
	$('#bEnd').val('Rolf').trigger('change');
	equal( bob(), '/quotationRequest/ports?aEnd=Jimmy&bEnd=Rolf');
});

function bob(){
	var aEnd = $('#aEnd').val();
	var bEnd = $('#bEnd').val();
	return '/quotationRequest/ports?aEnd='+aEnd+'&bEnd='+bEnd
}