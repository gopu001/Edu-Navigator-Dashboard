import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      domain: [0, 100], 
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    English: 10,
    LogicalReasoning: 23,
    month: 'Jan',
  },
  {
    English: 19,
    LogicalReasoning: 25,
    month: 'Fev',
  },
  {
    English: 42,
    LogicalReasoning: 17,
    month: 'Mar',
  },
  {
    English: 62,
    LogicalReasoning: 15,
    month: 'Apr',
  },
  {
    English: 67,
    LogicalReasoning: 15,
    month: 'May',
  },
  {
    English: 59,
    LogicalReasoning: 21,
    month: 'June',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'English', label: 'English', valueFormatter, color : '#467FFF' },
        { dataKey: 'LogicalReasoning', label: '', valueFormatter, color : '#43B5F4' },
      ]}
      {...chartSetting}
       
    />
  );
}
