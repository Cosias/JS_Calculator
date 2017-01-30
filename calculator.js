$(document).ready(function(){
var inputs = [''];

var total;

var operators1 = ['+','-','/','*'];

var operators2 = ['.'];

var nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){
  if(inputs.includes(operators2[0])===true && input ==='.'){
    console.log('Duplicate "." ');
  }
  else if(inputs.length===1 && operators1.includes(input)===true){
    // inputs.push(input);
    console.log(inputs);
    console.log("Can't start with an operator");
  }
  else if(operators1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
  else if(nums.includes(Number(input))){
    inputs.push(input);
  }
  update();
}

function update(){
  total = inputs.join('');
  $('#steps').html(total);
  $('#ans').html(total);
}

function getTotal(){
  // console.log(inputs);
  total = inputs.join('');
  total = Math.round((eval(total) * 100)) / 100;
  inputs = ['',total.toString()];
  // console.log(inputs);
  $('#ans').html(total);
}

$('a').on('click',function(){
  if(($('#steps').html().length )>12 && $('#steps').html() !== 'Digit Limit Met'){
    inputs = [''];
    update();
    $('#steps').html('Digit Limit Met');
    $('#ans').html('0');
  }
  
  else if(this.id==='deleteAll'){
    inputs = [''];
    update();
    $('#steps').html('0');
    $('#ans').html('0')
    // console.log($('#steps').length);
    
  } 
  else if(this.id==='backOne'){
    if(inputs.length>1){
      inputs.pop();
      update();
    } 
    if (inputs.length === 1){
      $('#steps').html('0');
      $('#ans').html('0');
    }
  }
  else if(this.id === 'total'){
    getTotal();
  }
  else{
    if(inputs[inputs.length-1].indexOf('+','-','/','*') === -1){
      getValue(this.id);
    }
    else{
      getValue(this.id);
    }
  }
});


});