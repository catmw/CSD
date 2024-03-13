$(document).ready(function(){
    $('#playerType').change(function(){
        var selectedType = $(this).val();
        if(selectedType !== "") {
            $.ajax({
                url: selectedType + '.txt',
                dataType: 'text',
                success: function(data) {
                    $('#myDiv').html(data);
                }
            });
        } else {
            $('#myDiv').html(''); // Clear the div if no option is selected
        }
    });
});