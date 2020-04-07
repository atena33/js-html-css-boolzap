// Aggiunta di un messaggio: l’utente scrive
// un testo nella parte bassa e cliccando invia
// il testo viene aggiunto al thread sopra, come messaggio verde
$ (document).ready(function(){
  $ ('.invia').click(
    function(){
      // Salvo l'input dell'utente
      var utente = $ ('#msg').val();


      $ ('.flotta').append('<div class="inviato">' + utente + '</div>');
    }
  )
  }
);
