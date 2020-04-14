$ (document).ready(function(){

  // Invio un nuovo messaggio dinamico e ricevo in risposta un messaggio statico
  $ ('.quadrato').on("click", ".invia", inviaMsg);

  // Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
  // vengono visualizzati solo i contatti il cui nome
  // contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar”
  // rimangono solo Marco e Martina)

  $('#cerca').keyup(filtroContatti);

  // Click sul contatto mostra la conversazione del contatto cliccato,
  // è possibile inserire nuovi messaggi per ogni conversazione
  $ ('.chat').click(conversazioneActive);

  // Cancella messaggio: cliccando sul messaggio appare un menu a tendina
  // che permette di cancellare il messaggio selezionato

  // Faccio apparire la preccia su i messaggi dinamici
  $('.over').on("mouseenter", '.ricevuto, .inviato', freccia);

  // Faccio apparire il menu al click sulla freccia
  $('.over').on("click", ".menu", menu);

  // Faccio scomparire il messaggio al click sul menu
   $ ('.over').on('click', '.voce-menu', cancellaMsg);

// Funzioni----------------------------------------------------------------------------------------------------
  function inviaMsg(){
    // Salvo l'orario corrente
    var d = new Date();
    var ora = d.getHours();
    var minuti = d.getMinutes();
    var orario = ora + ':' + minuti;

    // Salvo l'input dell'utente
    var utente = $ ('#msg').val();

    $ ('.over.active').append('<div class="flotta">' + '<div class="inviato">'+'<div class="menu">'+'<i class="freccia fas fa-chevron-down">'+'</i>'+'</div>'+'<div class="voce-menu">'+ "cancella messaggio"+'</div>'+ utente + '<p class = "orario">' + orario + '</p>' + '</div>' + '</div>');
    $('#msg').val("");

    // Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
    //  l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

    setTimeout(risposta, 1000);
    function risposta() {
      $('.over.active').append('<div class="ricevuto">' + '<div class="menu">'+'<i class="freccia fas fa-chevron-down">'+'</i>'+'</div>'+'<div class="voce-menu">'+ "cancella messaggio"+'</div>'+'ok' + '<p class = "orario">' + orario + '</p>'+ '</div>');
    };
  };

  function filtroContatti(){
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
  };

  function conversazioneActive() {
    var indice = $ (this).data('indice');
    $ ('.chat').removeClass('active');
    $(this).addClass('active');
    $('.over').removeClass('active');
    $('.over').eq(indice).addClass('active');
  };

  function freccia(){
   $(this).children('.menu').toggle();
 };

  function menu(){
    $ (this).siblings('.voce-menu').toggle();
  };

  function cancellaMsg(){
   $ (this).parents('.ricevuto, .inviato').hide();
 };

});
