// Aggiunta di un messaggio: l’utente scrive
// un testo nella parte bassa e cliccando invia
// il testo viene aggiunto al thread sopra, come messaggio verde
$ (document).ready(function(){

  var d = new Date();
  var ora = d.getHours();
  var minuti = d.getMinutes();
  var orario = ora + ':' + minuti;
  // $ (orario).addClass('orario');
  $ ('.invia').click(
    function(){
      // Salvo l'input dell'utente
      var utente = $ ('#msg').val();

      $ ('.flotta').append('<div class="inviato">' + utente + '<p class = "orario">' + orario + '</p>'+ '</div>');

    }
  )
  }
);
