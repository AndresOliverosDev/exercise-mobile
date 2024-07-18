import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/screens/authScreen/LoginScreen';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import MenuScreen from './src/screens/menuScreen/MenuScreen';

export type RootStackParamList = {
    Login: undefined;
    Menu: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
    </Drawer.Navigator>
);

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Menu"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
