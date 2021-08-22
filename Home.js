import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DevicesScreen from "./views/DevicesScreen";
import Icon from 'react-native-vector-icons/Feather';
import ConnectionScreen from "./views/ConnectionScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch(route.name){
                            case 'Devices':
                                iconName = 'home'
                                break;
                            case 'Connection':
                                iconName = 'wifi'
                                break;
                            default:
                                iconName = 'delete';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Devices" component={DevicesScreen} />
                <Tab.Screen name="Connection" component={ConnectionScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
