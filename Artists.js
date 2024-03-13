$(document).ready(function(){
    $.getJSON("getArtistsJSON.php", function(data){
        var artists = data.artists;
        var artistNames = [];
        
        $.each(artists, function(index, artist){
            artistNames.push(artist.name);
        });
        
        $("#myDiv").html(artistNames.join("<br>"));
    });
});