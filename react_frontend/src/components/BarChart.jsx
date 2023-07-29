import Highcharts from "highcharts";
import { memo, useCallback, useEffect, useState } from "react";

function BarChart({ data, distributionChannel, customerNumber }) {
  const [dataSeries, setDataSeries] = useState([]);

  const noCustomer = useCallback(() => {
    const finalData = { data: [0], name: distributionChannel };
    data.forEach((e) => {
      if (e.DISTRIBUTION_CHANNEL === distributionChannel) {
        finalData.data[0] += e.AMOUNT_IN_USD;
      }
    });
    return [finalData];
  }, [data, distributionChannel]);

  const forCustomer = useCallback(() => {
    const newData = {};
    data.forEach((e) => {
      if (e.CUSTOMER_NUMBER == customerNumber) {
        const oldAmount = newData[e.DISTRIBUTION_CHANNEL];
        newData[e.DISTRIBUTION_CHANNEL] =
          e.AMOUNT_IN_USD + (isNaN(oldAmount) ? 0 : oldAmount);
      }
    });

    const outputArray = [];
    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        const newObj = {
          name: key,
          data: [newData[key]],
        };
        outputArray.push(newObj);
      }
    }

    outputArray.sort((a, b) => b.data[0] - a.data[0]);
    const topFive = outputArray.slice(0, 5);

    return topFive;
  }, [data, customerNumber]);

  const forCustAndDist = useCallback(() => {
    const finalData = { data: [0], name: distributionChannel };
    data.forEach((e) => {
      if (
        e.DISTRIBUTION_CHANNEL == distributionChannel &&
        e.CUSTOMER_NUMBER == customerNumber
      ) {
        finalData.data[0] += e.AMOUNT_IN_USD;
      }
    });
    return [finalData];
  }, [data, customerNumber, distributionChannel]);

  useEffect(() => {
    if (!customerNumber) {
      setDataSeries(noCustomer());
    } else if (!distributionChannel) {
      setDataSeries(forCustomer());
    } else {
      setDataSeries(forCustAndDist());
    }
  }, [distributionChannel, customerNumber, data]);

  useEffect(() => {
    Highcharts.chart("barContainer", {
      chart: {
        type: "column",
        plotBackgroundColor: "#4f4f4f",
        backgroundColor: "#4f4f4f",
        style: {
          color: "#fff",
        },
      },
      title: {
        text: "Total Amount Per Distribution Channel",
        style: {
          color: "#fff",
        },
      },
      xAxis: {
        type: "category",
        labels: {
          style: {
            color: "#ffffff",
          },
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          style: {
            color: "#ffffff",
          },
        },
      },
      tooltip: {
        headerFormat: null,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: dataSeries,
    });
  }, [dataSeries]);
  return <div id="barContainer"></div>;
}

export default memo(BarChart);
