import React from "react";
import {Modal, StyleSheet, View, TouchableOpacity, Text} from "react-native";
import Header from "./Header";
import {TextInput} from "react-native-paper";

class MyModal extends React.Component {

    backgroundColors = ["#7C56a9","#c31242","#0ab1b2","#3323c3","#3aac66","#eeaa77", '#999999'];
    state = {
        name: "",
        place: "",
        command: "",
        color: this.backgroundColors[0]
    }

    handleSubmit = () => {
        const { addDeviceFn, toggleModalFn } = this.props;
        addDeviceFn(this.state).then(toggleModalFn);
    }

    renderColors(){
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.color, {backgroundColor:color}]}
                    onPress={() => this.setState({color})}>
                </TouchableOpacity>
            );
        });
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.visible}>
                <View style={styles.container}>
                    <Header title={"New device"}/>
                    <View style={styles.forms}>
                        <TextInput mode={'outlined'} style={styles.textField} placeholder={"Name"} onChangeText={(value) => this.setState({name: value})} value={this.state.name}/>
                        <TextInput mode={'outlined'} style={styles.textField} placeholder={"Place"} onChangeText={(value) => this.setState({place: value})} value={this.state.place}/>
                        <TextInput mode={'outlined'} style={styles.textField} placeholder={"Command"} onChangeText={(value) => this.setState({command: value})} value={this.state.command}/>
                    </View>
                    <View style={styles.colorRow}>
                        {this.renderColors()}
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <TouchableOpacity
                            style={{backgroundColor: this.state.color, ...styles.saveButton}}
                            onPress={this.handleSubmit}>
                            <Text style={{textAlign: "center",color:'#fff'}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{borderColor: this.state.color, ...styles.cancelButton}}
                            onPress={this.props.toggleModalFn}>
                            <Text style={{textAlign: "center",color:this.state.color}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1
    },
    colorRow: {flexDirection:"row",
        justifyContent: "center",
        marginBottom: 12,
        alignItems:"center",
        width:"100%"
    },
    saveButton: {
        width: '40%',
        margin: 12,
        padding: 24,
        borderWidth: 0,
        borderColor: "#420",
        borderRadius:5,
        textAlign: "center"
    },
    cancelButton: {
        width: '40%',
        margin: 12,
        padding: 24,
        borderWidth: 1,
        borderRadius:5,
        textAlign: "center"
    },
    forms: {
        marginVertical: 6,
        marginHorizontal: 18
    },
    textField: {
        marginTop: 18,
    },
    color: {
        width:30,
        height:30,
        borderRadius:4,
        margin:10
    }
})
export default MyModal;
