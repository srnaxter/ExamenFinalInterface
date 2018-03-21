function mostrarPestana(pestana){
    $('#myTab2').find('a[href="#'+pestana+'2"]').tab('show');
}

$(function() {
    $('#myTab3').find('a').on('hidden.bs.tab', function (e) {
        alert("Se ha quitado la pestaña"+ e.target);
    })
});