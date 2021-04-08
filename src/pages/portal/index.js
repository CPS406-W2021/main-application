import React, { Component, Fragment } from "react";
import DashboarWrapper from "../../components/ThemeWrapper";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import { connect } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css";
import blueMarker from "../../images/icons/blue.png";
import MapLayout from "./mapLayout";
import axios from "axios";
import { setupReport } from "../../store/actions/reportActions";
import { Redirect } from "react-router-dom";
class PortalBase extends Component {
    constructor(props) {
        super(props);
        this.state = { stage: 0, mapLoc: [-79.3788, 43.6577] };
    }
    renderMap = () => {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg",
        });
        console.log(this.props.setup);
        if (this.props.setup["lat"]) {
            return <Redirect to="/rap"></Redirect>;
        }
        return (
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    flex: 1,
                    borderRadius: 35,
                }}
                center={[-79.3788, 43.6577]}
                zoom={[16]}
                onClick={(map, e) => {
                    const lat = map.getCenter().lat.toFixed(4);
                    const long = map.getCenter().lng.toFixed(4);

                    axios
                        .get(
                            `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoiZmFyaGFuaG0iLCJhIjoiY2tuMTUxYjNnMHIyODJvbzJueDJzdWJmcCJ9.EIl7ZcqlshPyJxnxyGNGhg`
                        )
                        .then(({ data }) => {
                            const { place_name } = data["features"][0];
                            if (
                                window.confirm(
                                    `Comfirm your point\nLAT:${long}\nLONG:${lat}\n${place_name}\n`
                                )
                            ) {
                                this.props.setupReport({
                                    lat,
                                    long,
                                    name: place_name,
                                });
                            }
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }}
            >
                <Marker coordinates={[-79.3788, 43.6577]} anchor="center">
                    <img src={blueMarker} width="30px" height="30px" />
                </Marker>
            </Map>
        );
    };
    render() {
        return (
            <DashboarWrapper currentPage={1} clearbg={true}>
                <div className="portal-con">
                    {this.renderMap()}
                    <MapLayout></MapLayout>
                </div>
            </DashboarWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    setup: state.report.setupreport,
});

const mapDispatchToProps = (dispatch) => ({
    setupReport: (report) => dispatch(setupReport(report)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortalBase);
