import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type HomeScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>¡Bienvenido a la pantalla de inicio!</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
    },
    welcomeText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default HomeScreen;
