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

  var test = $.getJSON(jon.json); 
  var jsontest = JSON.parse(test);
  
  console.log(jsontest);

});
