import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import useAuth from '../../hooks/authentication/useAuth';

interface FormData {
    username: string;
    password: string;
}

const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [authError, setAuthError] = useState<string | null>(null);

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const success = await login(data.username, data.password);
        if (success) {
            navigation.navigate('Home');
        } else {
            setAuthError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>AF</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Iniciar sesión</Text>
                    {authError && <Text style={styles.errorText}>{authError}</Text>}
                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            rules={{
                                required: 'Debes ingresar tu nombre de usuario',
                                maxLength: {
                                    value: 30,
                                    message: 'Longitud máxima excedida',
                                },
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <Icon name="user" size={20} color="gray" />
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Nombre de usuario"
                                        placeholderTextColor="gray"
                                    />
                                </View>
                            )}
                            name="username"
                            defaultValue=""
                        />
                        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
                        <Controller
                            control={control}
                            rules={{ required: 'Debes ingresar tu contraseña' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <Icon name="lock" size={20} color="gray" />
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Contraseña"
                                        placeholderTextColor="gray"
                                        secureTextEntry
                                    />
                                </View>
                            )}
                            name="password"
                            defaultValue=""
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                        <TouchableOpacity onPress={() => Alert.alert('Recuperación de contraseña', 'Link de recuperación de contraseña')}>
                            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    card: {
        width: '90%',
        maxWidth: 400,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#2a2a2a',
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 50,
        textAlign: 'center',
    },
    formContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#444',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#333',
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 50,
    },
    input: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
    },
    forgotPassword: {
        color: 'gray',
        textAlign: 'right',
        width: '100%',
    },
    button: {
        backgroundColor: '#1e90ff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LoginScreen;
