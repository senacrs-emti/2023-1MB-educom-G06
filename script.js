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

  });
  
$.getJSON("jon.json", function (data) {

  let questao = 1;
  $('#questão').val(1)


  $('#perguntas h1').html(data[1].pergunta);
  // respostas
  $('#a').html(data[1].alternativa[0].a);
  $('#b').html(data[1].alternativa[0].b);
  $('#c').html(data[1].alternativa[0].c);
});

     

});
