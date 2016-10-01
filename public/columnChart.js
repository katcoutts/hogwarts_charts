var ColumnChart = function(){

  var container = document.getElementById("columnChart");

  var chart = new Highcharts.Chart({

    chart: {
      type: 'column',
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
      name: "Hogwart's Students",
      data: numbers
    }],
    xAxis: {
      categories: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
    },
    colors: ['red', 'green', 'blue', 'gold']


  });

}

