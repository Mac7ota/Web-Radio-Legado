function Player() {

    var Controlador = 0;

    var audio = new Audio('https://servidor24.brlogic.com:7160/live?identifier=Player&source=7007');
    document.getElementById('Player_Music').addEventListener('click', function () {

        if (Controlador == 1) {
            this.setAttribute('src', '../Picture/Pages/botao-play.png');
            audio.pause();
            Controlador = 2;
        }
        if (Controlador == 0) {
            this.setAttribute('src', '../Picture/Pages/pause-play.png');
            audio.play();
            Controlador = 1;
        }
        if (Controlador == 2) {
            Controlador = 0;
        }
    });

    var volumeControl = document.createElement("input");
    volumeControl.type = "range";
    volumeControl.min = "0";
    volumeControl.max = "1";
    volumeControl.step = "0.1";
    volumeControl.value = "1";
    volumeControl.id = 'VolumeControle'
    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value;
    });

    var muteButton = document.createElement("img");
    muteButton.src = "../Picture/Pages/aumentar-o-volume.png";
    muteButton.addEventListener('click', function () {
        audio.muted = !audio.muted;
        if (audio.muted) {
            this.setAttribute('src', '../Picture/Pages/mudo (2).png');
        } else {
            this.setAttribute('src', '../Picture/Pages/aumentar-o-volume.png');
        }
    });

    document.getElementsByClassName("Volume_Player")[0].append(muteButton, volumeControl);
}