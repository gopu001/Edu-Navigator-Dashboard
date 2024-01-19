import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      domain : [0,100]
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
    seoul: 11,
    month: 'Jan',
  },
  {
    seoul: 21,
    month: 'Fev',
  },
  {
    seoul: 64,
    month: 'Mar',
  },
  {
    seoul: 21,
    month: 'Apr',
  },
  {
    seoul: 68,
    month: 'May',
  },
  {
    seoul: 41,
    month: 'June',
  },
  {
    seoul: 80,
    month: 'July',
  },
  {
    seoul: 42,
    month: 'Aug',
  },
  {
    seoul: 21,
    month: 'Sept',
  },
  {
    seoul: 25,
    month: 'Oct',
  },
  {
    seoul: 48,
    month: 'Nov',
  },
  {
    seoul: 68,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        
        { dataKey: 'seoul',
         valueFormatter,
          color : '#467FFF',
         
          },
      ]}
      {...chartSetting}
    />
  );
}