import React, { useState, useEffect } from 'react';
import Highmaps from 'highcharts/highmaps';
import {
  HighchartsMapChart,
  HighmapsProvider,
  Title,
  Tooltip,
  MapSeries,
  Credits,
  ColorAxis,
  Legend,
} from 'react-jsx-highmaps';
import { useCountriesCtx } from '../../../../contexts';

const TenanatsHeatMap = () => {
  const [item, setItem] = useState(null);
  const { countries } = useCountriesCtx();
  const tenants = countries.map((el) => el.no_of_tenants);

  useEffect(() => {
    fetch('https://code.highcharts.com/mapdata/custom/africa.geo.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch((err) => console.log('Error', err));
  }, []);
  return (
    <>
      {item && (
        <HighmapsProvider Highcharts={Highmaps}>
          <HighchartsMapChart map={item}>
            <Title></Title>

            <MapSeries
              name='Tenants'
              states={{
                hover: {
                  color: '#BADA55',
                },
              }}
              data={[
                ['ng', tenants[0]],
                ['ke', tenants[1]],
              ]}
              dataLabels={{
                enabled: true,
                color: '#FFFFFF',
                format: '{point.name}',
              }}
            />
            <ColorAxis
              stops={[
                [0, '#92D669'],
                [1, '#1D925D'],
              ]}
            />
            <Legend />
            <Tooltip />

            <Credits />
          </HighchartsMapChart>
        </HighmapsProvider>
      )}
    </>
  );
};

export default TenanatsHeatMap;
