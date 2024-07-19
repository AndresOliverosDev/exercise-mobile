import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type NotificationsScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notificaciones</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
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
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default NotificationsScreen;
