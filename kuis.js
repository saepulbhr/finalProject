
function quiz(){
    var tanya = document.getElementById('hasilPertanyaan')
    for(var i=0; i < pertanyaan.length; i++){
        for(var j=0; j < pertanyaan.length; j++){
            if(i == j ){
                tanya.innerHTML = pertanyaan[i]
            }
        }
    }
}

