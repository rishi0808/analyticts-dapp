import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "./ChartsDynamicColor";


export default function Chart({ dataColors, datasale, datadate }){
    var PopularityChartColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Volume',
        data: datasale
    }];
    //console.log("Datajson chart",datasale);
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        // markers: {
        //     size: 4,
        // },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        colors: PopularityChartColors,
        xaxis: {
            categories: datadate,
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={260}
                className="apex-charts mt-n4"
            />
        </React.Fragment>
    );
}

