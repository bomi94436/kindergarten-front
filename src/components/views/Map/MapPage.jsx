import React, { useEffect } from "react";
import "./Map.css";

const MapPage = ({ maps, setMap, getLatLng }) => {
  useEffect(() => {
    let mapCover = document.getElementById("map-cover");
    let container = document.createElement("div");
    container.setAttribute("class", "map");
    mapCover.appendChild(container);
    const options = {
      center: new window.kakao.maps.LatLng(
        maps.location.lat,
        maps.location.lng
      ),
      level: 5,
    };
    setMap({ container, options, mapCover });
  }, [maps.location.lat, maps.location.lng, setMap]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "column wrap",
        }}
      >
        <div id="map-cover" />
      </div>
    </div>
  );
};

export default MapPage;
