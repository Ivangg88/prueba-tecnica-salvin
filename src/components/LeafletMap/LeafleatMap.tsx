import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Mark } from "../../types/interfaces";

interface LeafletMapProps {
  marks: Mark[];
}

const LeafletMap = ({ marks }: LeafletMapProps) => {
  return (
    <MapContainer
      center={[36.83814, -2.45974]}
      zoom={30}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {marks.map((mark) => (
        <Marker
          key={mark.description}
          position={[mark.coordenates[0], mark.coordenates[1]]}
        >
          <Popup> {mark.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
