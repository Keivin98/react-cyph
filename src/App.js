import "./styles.css";
import ImageMarker from "react-image-marker";
import mouthImage from "./mouth.jpg";
import { useState } from "react";

export default function App() {
  let [markers, setMarkers] = useState([]);
  const CustomMarker = () => {
    return (
      <div
        className="image-marker__marker image-marker__marker--default"
        data-testid="marker"
      ></div>
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
      </button>
      <button
        disabled={!markers.length > 0}
        onClick={() => setMarkers((prev) => prev.slice(0, -1))}
      >
        Remove Marker
      </button>
      <ImageMarker
        src={mouthImage}
        markers={markers}
        onAddMarker={(marker) => {
          console.log(marker['top']);
          setMarkers((prev) => [...prev, marker])
        }
        }
        markerComponent={CustomMarker}
      />
    </div>
  );
}
