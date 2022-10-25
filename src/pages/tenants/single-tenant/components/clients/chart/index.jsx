import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import { commaFormatter } from '../../../../../../utils/formatter';

const ClientGraph = ({ data }) => {
  const [chartdata, setChartData] = useState(data);

  const renderLegend = (props) => {
    return (
      <div className='ml-3'>
        {props.payload.map((entry) => {
          return (
            <div className=' p-2 rounded-2xl gap-2 flex items-center'>
              <span
                className=' p-[6px] rounded-full'
                style={{ background: entry.color }}></span>
              <span className='text-[12px]'>{entry.value ?? 'Null'}</span>
              <span className='text-[12px]'>
                {commaFormatter(entry.payload.pv)}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    const colorCodes = [
      '#2d586a',
      '#f3722b',
      '#559bb0',
      '#ffa800',
      '#90be6d',
      '#1c925c',
      '#003d51',
    ];

    const populateChart = () => {
      if (data && data.length > 0) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          sum += data[i].count;
        }

        setChartData(() =>
          data
            .map((el, index) => {
              return {
                name: el.category,
                fill: colorCodes[index],
                pv: el.count,
                uv: (el.count / sum) * 100,
              };
            })
            .sort((a, b) => a.pv - b.pv)
        );
      }
    };
    populateChart();
  }, [data]);
  return (
    <>
      {!data ||
        (data.length === 0 && (
          <div className='flex p-10 justify-center items-center'>
            <p>This tenant has no Client Data</p>
          </div>
        ))}
      {chartdata && chartdata.length > 0 && (
        <RadialBarChart
          width={600}
          height={400}
          innerRadius='20%'
          outerRadius='80%'
          data={chartdata}
          startAngle={30}
          endAngle={360}>
          <RadialBar minAngle={30} background clockWise={false} dataKey='uv' />
          <Legend
            layout='vertical'
            verticalAlign='middle'
            align='right'
            content={renderLegend}
            wrapperStyle={{ right: -30 }}
          />
        </RadialBarChart>
      )}
    </>
  );
};

export default ClientGraph;
