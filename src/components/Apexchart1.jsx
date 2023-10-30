import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 310,
          type: "pie",
        },
      },
    };
  }

  render() {
    return (
      <div className="apex-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width={310}
        />
      </div>
    );
  }
}

// Create a container to hold four instances of Apexchart1 in a row
function ApexchartContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <ApexChart />
        </div>
        <div className="col-md-3">
          <ApexChart />
        </div>
        <div className="col-md-3">
          <ApexChart />
        </div>
        <div className="col-md-3">
          <ApexChart />
        </div>
      </div>
    </div>
  );
}

export default ApexchartContainer;
