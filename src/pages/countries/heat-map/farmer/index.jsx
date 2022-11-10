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

const FarmersHeatMap = () => {
  const { countries, mapData } = useCountriesCtx();

  const africanCountries = countries
    .map((el) => ({
      cont: el.country_code_2.toLowerCase(),
      farmers: el.no_of_farmers,
    }))
    .map((el) => {
      return el.farmers > 0 ? [el.cont, el.farmers] : [];
    });

  return (
    <>
      {
        <HighmapsProvider Highcharts={Highmaps}>
          <HighchartsMapChart map={mapData}>
            <Title></Title>

            <MapSeries
              name='Farmers'
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

            <Legend
              layout='horizontal'
              verticalAlign='bottom'
              align='right'
              wrapperStyle={{ width: '80%' }}
            />
            <Tooltip />

            <Credits />
          </HighchartsMapChart>
        </HighmapsProvider>
      }
    </>
  );
};

export default FarmersHeatMap;
