import React from 'react'

const GoogleStreetView = () => {
    const location = {
        lat: 40.748817,
        lng: -73.985428,
    };

    const size = {
        width: 600,
        height: 300,
    };

    const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?location=${location.lat},${location.lng}&size=${size.width}x${size.height}&fov=80&heading=70&pitch=0&key=YOUR_API_KEY`;

    return (
        <div>
            <img
                src={streetViewUrl}
                alt="Street View"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default GoogleStreetView;