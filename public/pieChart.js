var PieChart = function(){

  var container = document.getElementById("pieChart");

  var chart = new Highcharts.Chart({

    chart: {
      type: 'pie',
      renderTo: container
    },

    title: {
      text: "Hogwarts Students by Gender"
    },

    series: [
       {
         name: "Gender of students",
         data: [
         {
         name: "Male",
         y: maleStudents.length,
         color: 'tomato'
       },
       {
         name: "Female",
         y: femaleStudents.length,
         color: 'lightskyblue'
       }]
     }]
  });



}