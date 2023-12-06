import React, {useContext, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types/types";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import AppTextInput from "../../components/AppTextInput";
import axios from 'axios';
import {Alert} from 'react-native';
import {AuthContext} from "../../context/AuthContext";
import {response} from "express";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({navigation: {navigate}}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {updateLoginState} = useContext(AuthContext);

    const checkProfile = async () => {
        console.log('Email:', email);
        console.log('Password:', password);
        axios.post('http://192.168.0.179:3000/user/login', {
            email: email.toString(),
            password: password.toString(),
        })
            .then((response) => {
                if (response.data == true) {
                    console.log('POST request was successful!', response.data);
                    axios.get('http://192.168.0.179:3000/user/get/' + email).then(res => {
                        console.log(response.data);
                        console.log(res.data);
                        updateLoginState(true, email.toString(), res.data.toString());
                    })
                } else {
                    console.log('POST decline!', response.data);
                }
            })
            .catch((error) => {
                console.error('Error making POST request:', error);
            });

    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.centered}>
                    <Text style={styles.title}>
                        Login here
                    </Text>
                    <Text style={styles.subtitle}>
                        Welcome back, you've been missed!
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <AppTextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <AppTextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text style={styles.forgotPassword}>
                        Forgot your password?
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={checkProfile}
                >
                    <Text style={styles.signInText}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Register")}
                    style={styles.createAccountButton}
                >
                    <Text style={styles.createAccountText}>
                        Create new account
                    </Text>
                </TouchableOpacity>

                <View style={styles.orContainer}>
                    <Text style={styles.orText}>
                        Or continue with
                    </Text>

                    <View style={styles.socialButtonContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons
                                name="logo-google"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons
                                name="logo-apple"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons
                                name="logo-facebook"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: Spacing * 2,
    },
    centered: {
        alignItems: "center",
    },
    title: {
        fontSize: FontSize.xLarge,
        color: Colors.primary,
        fontFamily: Font["poppins-bold"],
        marginVertical: Spacing * 3,
    },
    subtitle: {
        fontFamily: Font["poppins-semiBold"],
        fontSize: FontSize.large,
        maxWidth: "60%",
        textAlign: "center",
    },
    inputContainer: {
        marginVertical: Spacing * 3,
    },
    forgotPassword: {
        fontFamily: Font["poppins-semiBold"],
        fontSize: FontSize.small,
        color: Colors.primary,
        alignSelf: "flex-end",
    },
    signInButton: {
        padding: Spacing * 2,
        backgroundColor: Colors.primary,
        marginVertical: Spacing * 3,
        borderRadius: Spacing,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: Spacing,
        },
        shadowOpacity: 0.3,
        shadowRadius: Spacing,
    },
    signInText: {
        fontFamily: Font["poppins-bold"],
        color: Colors.onPrimary,
        textAlign: "center",
        fontSize: FontSize.large,
    },
    createAccountButton: {
        padding: Spacing,
    },
    createAccountText: {
        fontFamily: Font["poppins-semiBold"],
        color: Colors.text,
        textAlign: "center",
        fontSize: FontSize.small,
    },
    orContainer: {
        marginVertical: Spacing * 3,
    },
    orText: {
        fontFamily: Font["poppins-semiBold"],
        color: Colors.primary,
        textAlign: "center",
        fontSize: FontSize.small,
    },
    socialButtonContainer: {
        marginTop: Spacing,
        flexDirection: "row",
        justifyContent: "center",
    },
    socialButton: {
        padding: Spacing,
        backgroundColor: Colors.gray,
        borderRadius: Spacing / 2,
        marginHorizontal: Spacing,
    },
});

export default LoginScreen;
