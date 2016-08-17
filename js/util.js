util = {
    redirecionar: function (nomeView) {
        $('#content').load('views/' + nomeView + '.html?_=' + (new Date()).getTime());
    },

    registrar: function () {
        var agora = new Date();
        var daqui30Dias = new Date();
        daqui30Dias.setDate(agora.getDate() + 30);
        var contador = 0;
        while (agora < daqui30Dias) {
            agora.setHours(agora.getHours() + 12);
            contador++;

            var sound = device.platform == 'Android' ? 'file://data/sound/sound.mp3' : 'file://data/sound/beep.caf';

            $.getJSON("content/frases.json", function (data) {
                $.each(data.frases_tipo1, function (i, item) {

                });
            });

            cordova.plugins.notification.local.schedule({
                id: contador,
                title: 'Ei.. ' + localStorage.getItem("nome") + '.',
                text: 'Esse é o ' + contador + 'º motivo para ficar feliz!',
                at: agora,
                sound: sound,
                badge: 0
            });

            localStorage.setItem('Numero_Notificacoes', contador);
        }

        cordova.plugins.notification.local.schedule({
            id: 'INFO',
            title: 'Olá, amigo!',
            text: 'Nos comunicaremos por aqui, fique de olho!',
            at: new Date(),
            sound: sound,
            badge: 0
        });
    }

},

 db = {
     nome: 'garra_nome',
     objetivos: 'garra_objetivos',
     frases: 'garra_frases'
 }
