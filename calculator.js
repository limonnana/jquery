
$(document).ready(function(){

   memory = 0;
   display = '';
  // totalResult = 0;
   var numbersString = new Array();

  $('#buttonAdd').click(function(){
     add();
  });

  $('#buttonTotal').click(function(){
     total(totalResult);
  });

  $('#buttonRest').click(function(){
    rest();
  });

   $('#buttonCE').click(function(){
    cE();
  });

  function total(memory){

   $('#result').html(memory);
  }

  function cE(){
   $('#number1').val('');
   $('#result').html('');
   $('#display').html('');
   memory = 0;
  }
   
  function add(){
    
    var auxNumber = 0;
    var inputString = $('#number1').val();

   for(i=0;i<inputString.length;i++){

      if(

   
   }



   var number1 = parseInt($('#number1').val());
   
    memory = memory + number1;
    
    display = display + number1 + '+';
    numbersString = numbersString + number1;
   
    //$('#number1').val("");
    $('#display').html(display);
   }
  
   function rest(){
   var number1 = parseInt($('#number1').val());
   var number2 = parseInt($('#number2').val());
   var result = number1 - number2;
   $('#result').html(result);
   }

});

