import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type MenuScreenProps = {
    navigation: NavigationProp<any>;
};

const mainMenu = [
    {
        header: 'Inicio',
        icon: 'home',
        link: 'Inicio',
    },
    {
        header: 'Productos',
        icon: 'shopping-bag',
        link: 'Productos',
    },
    {
        header: 'Pedidos',
        icon: 'box',
        link: 'Pedidos',
    },
    {
        header: 'Clientes',
        icon: 'users',
        link: 'Clientes',
    },
    {
        header: 'Ventas',
        icon: 'shopping-cart',
        link: 'Ventas',
    },
];

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
    const { colors } = useTheme();

    const logout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={styles.sectionTitle}>MENU PRINCIPAL</Text>
            {mainMenu.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => navigation.navigate(item.link)}
                >
                    <Icon name={item.icon} size={20} color={colors.text} style={styles.icon} />
                    <Text style={[styles.menuText, { color: colors.text }]}>{item.header}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Ajustes')}>
                <Icon name="cog" size={20} color={colors.text} style={styles.icon} />
                <Text style={[styles.menuText, { color: colors.text }]}>Ajustes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, { marginTop: 20 }]} onPress={logout}>
                <Icon name="sign-out" size={20} color="red" style={styles.icon} />
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 14,
        color: 'gray',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    icon: {
        marginRight: 20,
    },
    menuText: {
        fontSize: 16,
    },
    logoutText: {
        fontSize: 16,
        color: 'red',
    },
});

export default MenuScreen;
