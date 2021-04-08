import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";

export default class Map extends Component {
    render() {
        const RMap = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
        });
        return (
            <RMap
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    flex: 1,
                    borderRadius: 35,
                }}
                center={[-79.3788, 43.6577]}
                zoom={[16]}
            >
                {this.props.children}
            </RMap>
        );
    }
}
