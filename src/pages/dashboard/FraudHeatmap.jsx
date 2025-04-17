// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const FraudHeatmap = ({ latitude, longitude }) => {
//   useEffect(() => {
//     if (!latitude || !longitude) return;
//   }, [latitude, longitude]);

//   return (
//     <MapContainer
//       center={[latitude, longitude]}
//       zoom={13}
//       style={{ height: '300px', width: '100%', borderRadius: '8px', marginTop: '10px' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//     </MapContainer>
//   );
// };

// export default FraudHeatmap;
