import React from 'react';
import Chart from 'react-apexcharts';

const RadialBar = ({ data }) => {
  console.log({ data });
  const options = {
    labels: [],

    colors: ['#003C51', '#F3722C', '#559BB1', '#FFA800', '#90BE6D', '#1D925D'],
    stroke: {
      lineCap: 'round',
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,

      horizontalAlign: 'end',
      floating: false,
      fontSize: '16px',
      width: undefined,
      height: undefined,
      formatter: undefined,
      offsetX: -30,
      offsetY: 80,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },

      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        startAngle: 0,
        endAngle: 359,
        offsetX: 0,
        offsetY: 0,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
          imageWidth: 0,
          imageHeight: 0,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: true,
          position: 'front',
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: '#f2f2f2',
          strokeWidth: '10%',
          opacity: 1,
          margin: 6,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '16px',
            fontFamily: undefined,
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '25px',
            fontFamily: undefined,
            color: undefined,
            offsetY: 16,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            label: 'Total Numbers',
            color: '',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
    },
  };
  return (
    <>
      {data && data.length > 1 && (
        <Chart
          series={data.map((el) => el.count)}
          type='radialBar'
          width={600}
          options={{
            ...options,
            labels: data.map((el) => {
              if (el.category === null) return '';
              return el.category;
            }),
          }}
        />
      )}

      {(!data || data.length < 1) && <p>No Char Found</p>}
    </>
    //
  );
};

export default RadialBar;
