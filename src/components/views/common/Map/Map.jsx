import React, { useEffect } from "react";
import "./Map.css";

const MapPage = ({ lat, lng }) => {
  useEffect(() => {
    let mapCover = document.getElementById("map-cover");
    let container = document.createElement("div");

    if (mapCover.childNodes[0]) {
      mapCover.removeChild(mapCover.childNodes[0]);
    }

    container.setAttribute(
      "style",
      "width: 100%; height: 20rem; border-radius: 0.5rem;"
    );
    mapCover.appendChild(container);

    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      position: options.center,
    });

    marker.setMap(map);
  }, [lat, lng]);

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
