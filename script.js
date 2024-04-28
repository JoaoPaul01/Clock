function showTime() {
    var msg = window.document.getElementById('msg');
    var horaDiv = window.document.getElementById('hora');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    // Formatar minutos e segundos para garantir que tenham sempre dois dígitos
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundo = segundo < 10 ? '0' + segundo : segundo;

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}.`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde3.png';
        document.body.style.background = '#b9846f';
        } else {
        //BOA NOITE
        img.src = 'fotonoite3.png';
        document.body.style.background = '#515154';
        }
    }
// Atualiza a hora, minuto e segundo a cada segundo
function intTime() {
setInterval(showTime, 1000);
}
