// Aggiunta di un messaggio: l’utente scrive
// un testo nella parte bassa e cliccando invia
// il testo viene aggiunto al thread sopra, come messaggio verde
$ (document).ready(function(){

  var d = new Date();
  var ora = d.getHours();
  var minuti = d.getMinutes();
  var orario = ora + ':' + minuti;

  $ ('.invia').click(
    function(){
      // Salvo l'input dell'utente
      var utente = $ ('#msg').val();

      $ ('.flotta').append('<div class="inviato">' + utente + '<p class = "orario">' + orario + '</p>'+ '</div>');
      $('#msg').val("");

      // Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
      //  l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

      setTimeout(risposta, 1000);
      function risposta() {
        $('.over').append('<div class="ricevuto">' + 'ok' + '<p class = "orario">' + orario + '</p>'+ '</div>');
      }
    }
  )
  }
);
