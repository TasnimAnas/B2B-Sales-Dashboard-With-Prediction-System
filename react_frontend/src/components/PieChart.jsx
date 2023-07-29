import Highcharts from "highcharts";
import { memo, useEffect, useState } from "react";

function PieChart({ data, distributionChannel, customerNumber }) {
  const [dataSeries, setDataSeries] = useState([]);

  const topCustomers = () => {
    const newData = {};
    data.forEach((e) => {
      if (e.DISTRIBUTION_CHANNEL == distributionChannel) {
        const oldAmount = newData[e.CUSTOMER_NUMBER];
        newData[e.CUSTOMER_NUMBER] =
          e.AMOUNT_IN_USD + (isNaN(oldAmount) ? 0 : oldAmount);
      }
    });
    const outputArray = [];
    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        const newObj = {
          name: key,
          y: newData[key],
        };
        outputArray.push(newObj);
      }
    }

    outputArray.sort((a, b) => b.y - a.y);
    const topFive = outputArray.slice(0, 5);

    return topFive;
  };

  useEffect(() => {
    setDataSeries(topCustomers());
  }, [distributionChannel, customerNumber, data]);

  useEffect(() => {
    const title = `Top Customers of ${distributionChannel}`;
    Highcharts.chart("pieContainer", {
      chart: {
        plotBackgroundColor: "#4f4f4f",
        backgroundColor: "#4f4f4f",
        style: {
          color: "#fff",
        },
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: title,
        align: "center",
        style: {
          color: "#fff",
        },
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Customers",
          colorByPoint: true,
          data: dataSeries,
        },
      ],
    });
  }, [dataSeries]);
  return <div id="pieContainer"></div>;
}

export default memo(PieChart);
