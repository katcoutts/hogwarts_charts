var gryffindor = [];
var slytherin = [];
var ravenclaw = [];
var hufflepuff = [];
var houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
var numbers = [];
var maleStudents = [];
var femaleStudents = [];


var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var response = JSON.parse(jsonString);
  console.log(response); 
  for (var character of response){
    if (character.house === 'Gryffindor'){
      gryffindor.push(character);
    }    
    if (character.house === 'Slytherin'){
      slytherin.push(character);
    }    
    if (character.house === 'Ravenclaw'){
      ravenclaw.push(character);
    }    
    if (character.house === 'Hufflepuff'){
      hufflepuff.push(character);
  }
  }  
  for (var character of response){
    if (character.gender === 'male'){
      maleStudents.push(character);
    }    
    if (character.gender === 'female'){
      femaleStudents.push(character);
    }    
  } 
  numbers.push(slytherin.length);
  numbers.push(gryffindor.length);
  numbers.push(ravenclaw.length);
  numbers.push(hufflepuff.length);
  makeChart();
  makePieChart();
}

var makeChart = function(){
  new ColumnChart();
}

var makePieChart = function(){
  new PieChart();
}



var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var app = function(){
  var url = "http://hp-api.herokuapp.com/api/characters";
  makeRequest(url, requestComplete);
}

window.onload = app;




