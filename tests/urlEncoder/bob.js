function bob(){
	var aEnd = encodeURI($('#aEnd').val());
	var bEnd = encodeURI($('#bEnd').val());
	return '/quotationRequest/ports?aEnd='+aEnd+'&bEnd='+bEnd;
}