// THIS ISN'T WORKING RIGHT NOW - AIM WAS TO HAVE A BAR CHART OF NUMBER OF STUDENTS IN EACH HOUSE AND THEN A LINE SHOWING THE NUMBER IN EACH HOUSE WITH BLACK HAIR.
var CombinationChart = function(){

  var container = document.getElementById("combinationChart");

  var chart = new Highcharts.Chart({

    chart: {
      // type: 'column',
      renderTo: container
    },
    title: {
      text: 'Students in the Houses of Hogwarts'
    },
    plotOptions: {
        column: {
            colorByPoint: true
        }
    },
    yAxis: {
              title: {
                  text: 'No. of students'
              }
          },
    series: [{
      type: 'column',
      name: "Hogwart's Students",
      data: numbers
    },{
      type: 'spline',
      name: 'Black Hair',
      data: hairNumbers
    }
    ],
    xAxis: {
      categories: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    },
    colors: ['red', 'green', 'blue', 'gold']


  });

}


