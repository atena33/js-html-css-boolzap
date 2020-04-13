// Aggiunta di un messaggio: l’utente scrive
// un testo nella parte bassa e cliccando invia
// il testo viene aggiunto al thread sopra, come messaggio verde
$ (document).ready(function(){

  var d = new Date();
  var ora = d.getHours();
  var minuti = d.getMinutes();
  var orario = ora + ':' + minuti;


  $ ('.quadrato').on("click", ".invia",
    function(){
      // Salvo l'input dell'utente
      var utente = $ ('#msg').val();

      $ ('.over.active').append('<div class="flotta">' + '<div class="inviato">'+'<div class="menu">'+'<i class="freccia fas fa-chevron-down">'+'</i>'+'</div>'+'<div class="voce-menu">'+ "cancella messaggio"+'</div>'+ utente + '<p class = "orario">' + orario + '</p>' + '</div>' + '</div>');
      $('#msg').val("");

      // Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
      //  l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

      setTimeout(risposta, 1000);
      function risposta() {
        $('.over.active').append('<div class="ricevuto">' + '<div class="menu">'+'<i class="freccia fas fa-chevron-down">'+'</i>'+'</div>'+'<div class="voce-menu">'+ "cancella messaggio"+'</div>'+'ok' + '<p class = "orario">' + orario + '</p>'+ '</div>');
      }
  });

  // Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
  // vengono visualizzati solo i contatti il cui nome
  //  contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar”
  //   rimangono solo Marco e Martina)

  $('#cerca').keyup(
    function(){
      //salvo l'input dell'utente
      var utente = $(this).val();
      console.log(utente);
      //salvo in una var tutti i nomi della chat
      var nomi = $ ('.chat');
      var testo;
      // faccio ciclare i nomi
      nomi.each(
        function () {
          testo = $(this).find('.nome').text();
          console.log(testo);

          if (testo.toLowerCase().includes(utente.toLowerCase())) {
            $ (this).show();
          }else {
            $ (this).hide();
        }
      });
    });

    // Click sul contatto mostra la conversazione del contatto cliccato,
    // è possibile inserire nuovi messaggi per ogni conversazione
    $ ('.chat').click(
      function () {
        var indice = $ (this).data('indice');
        $ ('.chat').removeClass('active');
        $(this).addClass('active');
        $('.over').removeClass('active');
        $('.over').eq(indice).addClass('active');

    });

  // Cancella messaggio: cliccando sul messaggio appare un menu a tendina
  // che permette di cancellare il messaggio selezionato
     $('.over').on("mouseenter", '.ricevuto, .inviato',
       function (){
        $(this).children('.menu').toggle();
    });

     $('.over').on("click", ".menu",
       function(){
         $ (this).siblings('.voce-menu').toggle();
    });

     $ ('.over').on('click', '.voce-menu',
      function (){
       $ (this).parents('.ricevuto, .inviato').hide();
    });
});
