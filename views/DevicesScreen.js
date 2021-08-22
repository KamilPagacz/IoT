import * as React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import Header from "../components/Header";
import MyModal from "../components/MyModal";
import {getData, storeData, clearStorage} from "../utils/AsyncStorage";

export default class DevicesScreen extends React.Component {

    state = {
        modalEnabled: false,
        devices: []
    }

    componentDidMount() {
        getData("devices")
            .then(data => JSON.parse(data))
            .then(devices => this.setState({
                ...this.state,
                devices,
            }))
    }

    addDevice = async (device) => {
        return this.setState({
            ...this.state,
            devices: [
                ...this.state.devices,
                device
            ]
        });
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modalEnabled: !this.state.modalEnabled
        })
    }

    pushData = () => {
        this.toggleModal();
        storeData("devices", JSON.stringify(this.state.devices));
    }

    render() {
        return (
            <>
                <Header title={"Devices"}/>
                {!this.state.modalEnabled &&
                    <View style={styles.container}>
                        {this.state.devices.map((device, i) => (
                            <TouchableOpacity key={i} style={{...styles.tabStyle, backgroundColor: device.color}}>
                                <Text style={styles.device}>{device.name}</Text>
                                <Text style={styles.location}>{device.place}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={styles.addDevice} onPress={this.toggleModal}>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>
                }
                {this.state.modalEnabled && (
                    <MyModal toggleModalFn={this.pushData} addDeviceFn={this.addDevice}/>
                )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tabStyle:{
        width: '44%',
        borderWidth: 1,
        padding:15,
        margin:'3%',
        borderColor: "#000000"
    },
    addDevice:{
        width: '44%',
        padding:27,
        borderWidth: 1,
        margin:'3%',
        borderColor:"#000000"
    },
    plus:{
        fontFamily: "Handlee_400Regular",
        fontSize: 24,
        textAlign: "center"
    },
    device:{
        fontFamily: "Handlee_400Regular",
        fontSize: 24,
        textAlign: "center"
    },
    location:{
        fontFamily: "Roboto_400Regular_Italic", 
        fontSize: 16, 
        textAlign: "center"
    }
});
