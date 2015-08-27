
$(document).ready(function(){

   total = 0;
   display = '';
   
  
   $('#buttonTotal').click(function(){
	   
	   var inputString =  inputString = $('#number1').val();
		   
	   inputStringIterator(inputString);
	  });
   
   
   
   
   function inputStringIterator(inputString){
	   
	   var arrayPlus = inputString.split('+') ;
	   var operation = '';
	   var booleanNumberComplete;
	   var arrayMinus = new Array();
	   
	   for(i=0;i<arrayPlus.length;i++){
		   
		   arrayMinus = arrayPlus[i].split('-');
		   
		   
	   }
	   
	   
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
   
   // totalResult = 0;
   numbersString = new Array();
   auxNumber = 0;
   auxString = '';

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

  function total(){

	  add();
	  $('#result').html(memory);
  }

  function cE(){
   $('#number1').val('');
   $('#result').html('');
   $('#display').html('');
   memory = 0;
  }
   
  function add(){
    
    var inputString = $('#number1').val();

   for(i=0;i<inputString.length;i++){

      var c = inputString.charAt(i);
      
	   if(isNaN(c)){
		   
		   auxNumber = parseInt(auxString);
		   if(c=='+'){
			   memory = memory + auxNumber;
		   }if(c=='-'){
			   memory = memory - auxNumber;
		   }
    	  
    	  
      }else{
    	  auxString = auxString + c;
    	  
      }

   
   }



   //var number1 = parseInt($('#number1').val());
   
   // memory = memory + number1;
    
   // display = display + number1 + '+';
   // numbersString = numbersString + number1;
   
    //$('#number1').val("");
   // $('#display').html(memory);
   }
  
   function rest(){
   var number1 = parseInt($('#number1').val());
   var number2 = parseInt($('#number2').val());
   var result = number1 - number2;
   $('#result').html(result);
   }
   
   */

});

