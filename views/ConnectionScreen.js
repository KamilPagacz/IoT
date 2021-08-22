import * as React from 'react';
import {Text, View} from "react-native";
import Header from "../components/Header";

export default function ConnectionScreen() {
    return (
        <>
            <Header title={"Connection"} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No connection</Text>
            </View>
        </>
    );
}
