import React, { useEffect, useState } from "react";
import axios from "axios";
import Highmaps from "highcharts/highmaps";
import {
  HighchartsMapChart,
  Title,
  Subtitle,
  Tooltip,
  MapSeries,
  MapNavigation,
  Credits,
  XAxis,
  Legend
} from "react-jsx-highmaps";
const colorAxis = {
  minColor: "#FFFFFF",
  maxColor: "#006666" //Highcharts.getOptions().colors[0]
};

function Map() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      const resp = await axios.get('https://code.highcharts.com/mapdata/countries/sv/sv-all.geo.json');

      if (!resp.data) return;

      setData(resp.data)
    }

    fetchCountries()
  }, [])

  const tooltipFormatter = function () {
    // console.log(this.key);
    return `${this.key}: ${this.point.value}`;
  };
  return (
    <div className="app">

      {!data && 'Loading'}
      {data && (
        <HighchartsMapChart map={data} colorAxis={colorAxis}>
          <Title>El Salvador</Title>

          <Subtitle>
            Demo of drawing all areas in the map, only highlighting
            partial data
          </Subtitle>

          <MapSeries
            name="Area"
            states={{
              hover: {
                color: "#BADA55"
              }
            }}
            data={[
              ["sv-un", 2],
              ["sv-li", 1],
              ["sv-pa", 2],
              ["sv-cu", 3],
              ["sv-so", 4],
              ["sv-ss", 5],
              ["sv-mo", 6],
              ["sv-sm", 7],
              ["sv-sv", 8],
              ["sv-us", 9],
              ["sv-ch", 10],
              ["sv-sa", 11],
              ["sv-ah", 12],
              ["sv-ca", 13]
            ]}
            dataLabels={{
              enabled: true,
              color: "#FFFFFF",
              format: "{point.name}"
            }}
          />

          <MapNavigation>
            <MapNavigation.ZoomIn />
            <MapNavigation.ZoomOut />
          </MapNavigation>

          <Tooltip formatter={tooltipFormatter} />
          <Credits />
          <Legend />
          <XAxis />
        </HighchartsMapChart>
      )}
    </div>
  );
}


export default Map;




