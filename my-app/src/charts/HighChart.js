import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class HighChart extends Component {
  render() {
    const options = {
        title: {
            text: 'My chart'
        },
        chart: {
            type: 'bar',
            zoomType: 'x'   //x or y or xy
        },
        credits: {
            enabled: false, //by default it is true
            text: 'This is my chart',
            href: 'https://www.google.com',
            position: {
                align: 'left',
                x: 10
            },
            style: {
                fontSize: '10px'
            }
        },
        yAxis: {
            title: {
                text: 'y axis'
            },
            alternateGridColor: '#ffaaf',
        },
        xAxis: {
            alternateGridColor: '#fffff',
            categories: ['3 months', '6 months', '9 months', '12 months']
        },
        series: [
            {
                name: 'Dmart', 
                negativeColor: 'blue',  // to show negative value in blue color
                data: [1, 2, 3, 4],
                // if we don't specify xAxis.categories then we can define them here
                // series: [ { data: [[x, y]] } ]
                // ex: series: [ { data: [ ['john', 1], [3,4], ['boy',56], ['the man', 45] ] } ]
                // or one another way as well:
                // series: [ { name: 'Finential result comparison', data: [{name: 'Dmart', x: 2, y: 1, color: 'red'}, {name:'Tcs', x: 4, y: 2, color: 'green'}] } ]
            },
            {
                name: 'Tcs',
                data: [10, 20, 30, 40]
            }, 
            {
                name: 'Dixon',
                data: [100, 200, 300, 400],
                zones: [{value: 0, color: '#fff'}, {value:10, color: '#333'}, {color: '#777'}]   // this define upto 0, color will be '#fff' and then from 0 to 9 color will be #333 and anything greater than or equal to 10 will be #777
            }
        ],
        tooltip: {
            animation: false, //bydefault it is true
            backgroundColor: '#232323',
            borderRadius: 20,
            borderColor: '#f01f11',
            followPointer: true,    //bydefault it is false // to follow the tooltip by curson
            style: {
                color: '#ffffff'
            },
            formatter() {
                let s = `<strong>X value - </strong>${this.x}`
                this.points.forEach(point=>{
                    console.log(point);
                    s += `<br> Y is: ${point.y} ${point.series.name}`;
                })
                return s;
                //return `<strong>X value - </strong>${this.x} and <em>Y value</em> - ${this.y}`
            },
            shared: true, //if x values or y values are same then they will be display together //by default it is false
        },
        colors: ['#333333', '#fffff', '#554646', '#888888'],    //to give color for every xAxis category
    };

    const options2 = {
        chart:{
            type: 'pie', //line , spline , area , areaspline , column , bar , pie , scatter ... 
            zoomType: 'xy'
        },
        credits:{
            text: 'Sk@domain.com',
            href: 'https://www.google.com',
            position: {
                align: 'left',
                x: 10
            },
            style:{
                color: 'red',
                fontSize: 20
            }
        },
        title: {
            text: 'Sports'
        },
        xAxis: {
            title: {
                text: 'X axis for values'
            },
            categories: ['Sachin', 'Naman', 'Pradeep'],
            // alternateGridColor: 'green'
        },
        yAxis: {
            title: {
                text: 'Y axis for values'
            },
            // alternateGridColor: 'yellow'
        },
        series: [
            {
            name: 'Badminton',
            data: [5,4,1]
            },
            {
                name: 'Cricket',
                data: [5,6,1]
                }
        ],
        colors: ['red', 'green', 'blue'],
        tooltip: {
            backgroundColor: 'lightgreen',
            borderColor: 'yellow',
            borderRadius: 10,
            // formatter() {
            //     return `${this.x} - ${this.y} - ${this.point.series.name}`
            // },
            style: {
                color: 'blue'
            }
        }
    };
    return (
      <div>
        {/* <HighchartsReact
          highcharts={Highcharts}
          options={options}
        /> */}

        <br></br><br></br><br></br>
        <HighchartsReact
          highcharts={Highcharts}
          options={options2}
        />
      </div>
    );
  }
}

export default HighChart;


