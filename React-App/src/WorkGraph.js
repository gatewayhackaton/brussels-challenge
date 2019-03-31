import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default class WorkGraph extends Component {
  
    componentDidMount() {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
  
      chart.data = [{
        "country": "Lithuania",
        "reports": 5698,
        "color": "red"
      }, {
        "country": "Republic",
        "reports": 9856,
        "color": "green"
      }, {
        "country": "Ireland",
        "reports": 12000,
        "color": "blue"
      }, {
        "country": "Germany",
        "reports": 14896,
        "color": "pink"
      }, {
        "country": "Austria",
        "reports": 8457,
        "color": "yellow"
      }, {
        "country": "Belgium",
        "reports": 8265,
        "color": "lightgreen"
      }, {
        "country": "The Netherlands",
        "reports": 7896,
        "color": "orange"
      }];
      
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "reports";
      series.dataFields.categoryX = "country";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.propertyFields.stroke = "color";
      this.chart = chart;
    }
  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
    render() {
    return (
      <div>
        <h2 className="ml-5">Most recents reports about <b>Work</b> by country</h2>
        <div id="chartdiv">
          
        </div>
      </div>
    )
  }
}
