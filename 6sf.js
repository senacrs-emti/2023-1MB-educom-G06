$(document).ready(function() {
  let score = 0;
  let acerto = 17;

  console.log(score);
  

  // clique no botao
  $("input[type='submit']").click(function() {

    var resposta = false;

    // percorre todos os raidos checkes 
    $("input[type='radio']:checked").each(function() {
      // valida se esta correto ou nao 
      if( $(this).val() == 's'){

          score = score + acerto;
          console.log(score);
          $('#score').html(score);

          alert('Correto');
          resposta = true;
          var questao = parseInt($('#questao').val())+1;
          
          switch (questao) {
            case 1:
              ball1.classList.toggle('animation2');
              ball2.style.backgroundColor = 'rgb(0, 211, 0)';
            break;
            case 2: 
              ball2.classList.toggle('animation3');
              ball3.style.backgroundColor = 'rgb(0, 211, 0)';
            break;
            case 3:
              ball3.classList.toggle('animation3'); 
              ball4.style.backgroundColor = 'rgb(0, 211, 0)';   
            break;
            case 4: 
              ball4.classList.toggle('animation3');   
              ball5.style.backgroundColor = 'rgb(0, 211, 0)';
            break;
            case 5:
              ball5.classList.toggle('animation3'); 
              ball6.style.backgroundColor = 'rgb(0, 211, 0)';   
            break;
            case 6:
              ball6.classList.toggle('animation3'); 
              ball7.style.backgroundColor = 'rgb(0, 211, 0)';   
            break;
            case 7:
              ball7.classList.toggle('animation3');  
              ball8.style.backgroundColor = 'rgb(0, 211, 0)';  
            break;
            case 8:
              ball8.classList.toggle('animation3');  
              ball9.style.backgroundColor = 'rgb(0, 211, 0)';  
            break;
            case 9:
              ball9.classList.toggle('animation3');  
              ball10.style.backgroundColor = 'rgb(0, 211, 0)';  
            break;
            case 10:
              ball11.style.backgroundColor = 'rgb(0, 211, 0)';
              submit.setAttribute('data-target', '#congratulations')
            break;
          }
          

      }else{
          alert('Errado');    
          score = score - acerto;
          console.log(score);

          var questao = parseInt($('#questao').val())+1;
          
          switch (questao) {
            case 1: 
              ball2.style.backgroundColor = 'red';
            break;
            case 2:
              ball3.style.backgroundColor = 'red';
            break;
            case 3:
              ball4.style.backgroundColor = 'red';
            break;
            case 4:
              ball5.style.backgroundColor = 'red';
            break;
            case 5:
              ball6.style.backgroundColor = 'red';
            break;
            case 6:
              ball7.style.backgroundColor = 'red';
            break;
            case 7:
              ball8.style.backgroundColor = 'red';
            break;
            case 8:
              ball9.style.backgroundColor = 'red';
            break;
            case 9:
              ball10.style.backgroundColor = 'red';
            break;
            case 10:
              ball11.style.backgroundColor = 'red';
            break;
          }
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

    $.getJSON("6sf.json", function (data) {
      // adiciona a pergunta
      $('#perguntas h1').html(data[questao].pergunta);
      // respostas
      $('#a').html(data[questao].alternativa[0].A);
      $('#b').html(data[questao].alternativa[0].B);
      $('#c').html(data[questao].alternativa[0].C);
      var x = (data[questao].resposta);
 
      $('#r'+x.toLowerCase()).val('s');
      return false
    });

  });
  
$.getJSON("6sf.json", function (data) {

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
  $('#r'+x.toLowerCase()).val('s');
  
});

  let respostas = 0;
  $('#respostas').val(alternativa);
  $('#respostas label').html(data[questao].pergunta);

   

});


