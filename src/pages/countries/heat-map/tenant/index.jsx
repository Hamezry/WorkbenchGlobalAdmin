import React from 'react';
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
  const { countries, mapData } = useCountriesCtx();
  const africanCountries = countries
    .map((el) => ({
      cont: el.country_code_2.toLowerCase(),
      tenants: el.no_of_tenants,
    }))
    .map((el) => [el.cont, el.tenants]);

  return (
    <>
      {
        <HighmapsProvider Highcharts={Highmaps}>
          <HighchartsMapChart map={mapData}>
            <Title></Title>

            <MapSeries
              name='Tenants'
              states={{
                hover: {
                  color: '#e2f8ee',
                },
              }}
              data={africanCountries}
              dataLabels={{
                enabled: false,
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
      }
    </>
  );
};

export default TenanatsHeatMap;
