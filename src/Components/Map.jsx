import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// Geo data for the world map
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Markers for India and USA
const markers = [
  {
    markerOffset: -15,
    name: "India",
    coordinates: [78.9629, 20.5937],
  },
  {
    markerOffset: 15,
    name: "USA",
    coordinates: [-95.7129, 37.0902],
  },
];

const Map = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Global Reach, Local Expertise: We Code In All Languages Of Success
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We are empowering global innovation with tailored software/app solutions.
        Bridging cultures, languages, and distances for business success worldwide.
      </p>
      <div className="w-full max-w-6xl">
        <ComposableMap
          projectionConfig={{
            scale: 200, // Increased scale for better visibility
            center: [0, 20], // Center the map
          }}
          className="w-full h-auto"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#FFD700" // Similar background color as in the provided image
                  stroke="#FFF"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" }
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="0" cy="0" r="10" fill="#FF5533" />
              </g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "14px" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
