  $(document).ready(function() {

  // clique no botao
  $("input[type='submit']").click(function() {

    var resposta = false;

    // percorre todos os raidos checkes 
    $("input[type='radio']:checked").each(function() {
      // valida se esta correto ou nao 
      if( $(this).val() == 's'){
          alert('Correto');
          resposta = true;
      }else{
          alert('Errado');
          
        }
      // limpa o check de cada elementos
      $(this).prop('checked',false);
      $(this).val('e');
    }); 

    if(resposta){
      // le a questao 
      var questao = parseInt($('#questao').val())+1;
      // adiciona novamente a questao
      $('#questao').val(questao);
    }

    $.getJSON("jon.json", function (data) {
      // adiciona a pergunta
      $('#perguntas h1').html(data[questao].pergunta);
      // respostas
      $('#a').html(data[questao].alternativa[0].A);
      $('#b').html(data[questao].alternativa[0].B);
      $('#c').html(data[questao].alternativa[0].C);
      var x = (data[questao].resposta);
      console.log(x);
      $('#r'+x.toLowerCase()).val('s');
    
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

  var x = (data[questao].resposta);
  console.log(x);
  $('#r'+x.toLowerCase()).val('s');
  
});

  let respostas = 0;
  $('#respostas').val(alternativa);
  $('#respostas label').html(data[questao].pergunta);

   

});

