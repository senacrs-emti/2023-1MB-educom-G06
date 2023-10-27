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
  $('#perguntas h1').html(data[1].pergunta);
  console.log(data[1]);
});



//
/*fetch("jon.json").then((Response) => {
  Response.json().then((perguntas) => {
    console.log(perguntas);
  })
});*/




     

});
