
var houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
var numbers = [];
var maleStudents = [];
var femaleStudents = [];
var hairNumbers = [];


var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var response = JSON.parse(jsonString);
  console.log(response); 
  sortStudentsIntoHouses(response);
  sortStudentsByGender(response);
  getNumbersByHouseAndBlackHair(response);
}

var sortStudentsIntoHouses = function(response){
  var gryffindor = [];
  var slytherin = [];
  var ravenclaw = [];
  var hufflepuff = [];
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
  numbers.push(gryffindor.length);
  numbers.push(slytherin.length);
  numbers.push(ravenclaw.length);
  numbers.push(hufflepuff.length);
  makeChart();  
}

var sortStudentsByGender = function(response){ 
  for (var character of response){
    if (character.gender === 'male'){
      maleStudents.push(character);
    }    
    if (character.gender === 'female'){
      femaleStudents.push(character);
    }    
  }
  makePieChart(); 
}

var getNumbersByHouseAndBlackHair = function(response){
  var gryffBlack = [];
  var slythBlack = [];
  var ravenBlack = [];
  var huffleBlack = [];
  for (var character of response){
    if ((character.hairColour === 'black') && (character.house === 'Gryffindor')){
      gryffBlack.push(character);
    }if ((character.hairColour === "black") && (character.house === "Slytherin")){
      slythBlack.push(character);
    }if ((character.hairColour === "black") && (character.house === "Ravenclaw")){
      ravenBlack.push(character);
    }if ((character.hairColour === "black") && (character.house === "Hufflepuff")){
      huffleBlack.push(character);
    }
  }
  hairNumbers.push(gryffBlack.length);
  hairNumbers.push(slythBlack.length);
  hairNumbers.push(ravenBlack.length);
  hairNumbers.push(huffleBlack.length);
  console.log(hairNumbers);
  makeCombinationChart();
}
  

var makeChart = function(){
  new ColumnChart();
}

var makePieChart = function(){
  new PieChart();
}

var makeCombinationChart = function(){
  new CombinationChart();
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




