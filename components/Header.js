import {StatusBar, StyleSheet, Text, View} from "react-native";
import * as React from "react";

class Header extends React.Component {
    render() {
        let {title} = this.props;
        return (
            <>
                <View style={styles.header}>
                    <StatusBar style="auto"/>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 8,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
        borderBottomColor: '#4f4f4f',
        borderBottomWidth: 1
    },

    headerButton: {
        flex: 1
    },

    headerText: {
        flex: 1,
        textAlign: "center",
        fontFamily: "Handlee_400Regular",
        fontSize: 32
    }
});

export default Header;
