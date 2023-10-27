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

  function Func() { 
    fetch("./jon.json") 
        .then((res) => { 
        return res.json(); 
    }) 
    .then((data) => console.log(data)); 
}
});
