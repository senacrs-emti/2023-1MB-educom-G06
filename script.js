$(document).ready(function() {

  // clique no botao
  $("input[type='submit']").click(function() {

    // percorre todos os raidos checkes 
    $("input[type='radio']:checked").each(function() {
      // valida se esta correto ou nao 
      if( $(this).val() == 's'){
          alert('Correto');
      }else{
          alert('Errado');
      }
    }); 

    // le a questao 
    var questao = parseInt($('#questao').val())+1;
    // adiciona novamente a questao
    $('#questao').val(questao);

    $.getJSON("jon.json", function (data) {
      // adiciona a pergunta
      $('#perguntas h1').html(data[questao].pergunta);
      // respostas
      $('#a').html(data[questao].alternativa[0].A);
      $('#b').html(data[questao].alternativa[0].B);
      $('#c').html(data[questao].alternativa[0].C);
    });

  });
  
$.getJSON("jon.json", function (data) {

  let questao = 0;
  // adiciona a questao
  $('#questao').val(questao);
  // adiciona a pergunta
  $('#perguntas h1').html(data[questao].pergunta);
  // respostas
  $('#a').html(data[questao].alternativa[0].A);
  $('#b').html(data[questao].alternativa[0].B);
  $('#c').html(data[questao].alternativa[0].C);
});

  let respostas = 0;

  $('#respostas').val()

});
