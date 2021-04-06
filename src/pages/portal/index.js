import React, { Component } from 'react';
import DashboarWrapper from '../../components/ThemeWrapper';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class PortalBase extends Component {
    render() {
        const dummyData = [
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Stret St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
            {
                type: 'Pothole',
                address: '123 Street St.',
                date: '3/21/2021 11:24AM',
            },
        ];
        const Map = ReactMapboxGl({
            accessToken:
                'pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg',
        });
        return (
            <DashboarWrapper currentPage={1} clearbg={true}>
                <div className="portal-con">
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            flex: 1,
                            borderRadius: 35,
                        }}
                        center={[-79.3788, 43.6577]}
                        zoom={[16]}
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-79.3788, 43.6577]} />
                        </Layer>
                    </Map>
                    ;<div className="portal-button">Report</div>
                    <div className="portal-search">
                        <div className="portal-search__header">
                            <div>Recent Activity </div>
                            <div>
                                <i class="far fa-clock"></i>
                            </div>
                        </div>
                        <div className="portal-search__body">
                            {dummyData.map(({ type, address, date }) => (
                                <div className="portal-search__issue">
                                    <div>
                                        <span>{type}</span>
                                        <span>at</span>
                                        <span>{address}</span>
                                    </div>
                                    <div>Reported on {date}</div>
                                </div>
                            ))}
                        </div>
                        <div className="portal-search__footer">Filter by:</div>
                    </div>
                </div>
            </DashboarWrapper>
        );
    }
}
