import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// fix default marker icon issue in many bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type Props = {
  doctors: {
    id: number;
    fullName?: string;
    latitude?: number;
    longitude?: number;
    imageUrl?: string;
  }[];
  onMarkerClick?: (id: number) => void;
  center?: LatLngExpression;
};

export default function DoctorMap({ doctors, onMarkerClick, center = [30.0444, 31.2357] }: Props) {
  return (
    <MapContainer center={center as LatLngExpression} zoom={13} style={{ width: "100%", height: "600px", borderRadius: 12 }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {doctors.map((d) => {
        if (!d.latitude || !d.longitude) return null;
        return (
          <Marker key={d.id} position={[d.latitude, d.longitude]}>
            <Popup>
              <div style={{ width: 180 }}>
                <strong>{d.fullName}</strong>
                <div style={{ fontSize: 12 }}>{d.id}</div>
                <button onClick={() => onMarkerClick?.(d.id)} style={{ marginTop: 8 }}>
                  View profile
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
