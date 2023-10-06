$(document).ready(function() {


  $("input[type='radio']").click(function() {
    var marcado = this.value;

    if (marcado == "s") {
      alert("Correto");
    } else {
      var resposta = $('[name="resposta"][value="e"]').get(0).nextSibling.textContent;
      alert("Errado, a resposta correta seria: " + resposta);
    }
  });


});