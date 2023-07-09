import React from 'react';
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={'chart'}>
            {dataPoints.map((datapoint) => {
                return <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaximum}
                    label={datapoint.label}
                />
            })}
        </div>
    );
};

export default Chart;