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

const CommodityHeatMap = () => {
  const { singleCommodity, mapData } = useCountriesCtx();

  const commodityVolume = singleCommodity
    .map((el) => ({
      cont: el.country_code_2.toLowerCase(),
      volume: el?.volume || 0,
    }))
    .map((el) => [el.cont, el.volume]);

  return (
    <>
      {
        <HighmapsProvider Highcharts={Highmaps}>
          <HighchartsMapChart map={mapData}>
            <Title></Title>

            <MapSeries
              name='Commodities'
              states={{
                hover: {
                  color: '#e2f8ee',
                },
              }}
              data={commodityVolume}
              dataLabels={{
                enabled: false,
                color: '#FFFFFF',
                format: '{point.name}',
              }}
            />
            <ColorAxis stops={[[0, '#1D925D']]} />

            <Legend
              layout='horizontal'
              verticalAlign='bottom'
              align='right'
              wrapperStyle={{ right: '-70%', width: '60%' }}
            />
            <Tooltip />

            <Credits />
          </HighchartsMapChart>
        </HighmapsProvider>
      }
    </>
  );
};

export default CommodityHeatMap;
