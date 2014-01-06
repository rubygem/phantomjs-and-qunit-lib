$(document).ready(function() {
    //copy the second select, so we can easily reset it
    var bEndClone = $('#bEnd').clone();
    $('#aEnd').change(function() {
        var val = $(this).val();
        //reset the second select on each change
        $('#bEnd').html(bEndClone.html())
        $('#bEnd').find('option:contains('+val+')').remove();
    });

    var aEndClone = $('#aEnd').clone();
    $('#bEnd').change(function() {
        var val = $(this).val();
        //reset the second select on each change
        $('#aEnd').html(aEndClone.html())
        $('#aEnd').find('option:contains('+val+')').remove();
    });
});