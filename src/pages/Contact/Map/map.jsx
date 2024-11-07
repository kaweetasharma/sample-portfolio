import React, { useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.scss'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { renderToString } from 'react-dom/server'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import L from 'leaflet'

const Map = ({ position }) => {
  // Create a custom marker icon
  const markerHtmlStyles = renderToString(
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      style={{ fontSize: '4em', color: '#007bff' }}
    />
  )

  const markerRef = useRef(null)
  const mapRef = useRef(null)

  const customMarkerIcon = L.divIcon({
    html: markerHtmlStyles,
    iconAnchor: [40, 80],
    popupAnchor: [3, -76],
    className: 'my-custom-pin',
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup()
      }
    }, 4000) // 4000 milliseconds = 4 seconds

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

  return (
    <MapContainer
      center={position}
      zoom={13}
      ref={mapRef}
      style={{ height: '100vh', width: '100%', zIndex: 10000 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customMarkerIcon} ref={markerRef}>
        <Popup className="my-custom-popup">
          I live here. Come over for a cup of tea.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
