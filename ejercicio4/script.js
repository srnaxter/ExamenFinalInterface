$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});

$(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#myModal2").modal();
    });
});
$(document).ready(function(){
    $("#myBtn3").click(function(){
        $("#myModal3").modal();
    });
});


$(function () {
    $(".custom-close").on('click', function() {
        $('#myModal, #myModal2, #myModal3').modal('hide');
    });
});