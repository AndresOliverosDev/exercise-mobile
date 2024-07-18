import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>¡Bienvenido a la pantalla de inicio!</Text>
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
    },
});

export default HomeScreen;