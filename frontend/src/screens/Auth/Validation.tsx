import React, {useContext, useEffect, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
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
import {AuthContext} from "../../context/AuthContext";
import Config from "../../config/config";
import {useNavigation} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const ValidationScreen = ({route}: { route: any }) => {
        const navigation = useNavigation();

        const [code, setCode] = useState('');
        const [sendCode, setSendCode] = useState('');
        const {updateLoginState} = useContext(AuthContext);
        const {email} = route.params;
        const {name} = route.params;
        const {password} = route.params;


        useEffect(() => {
            // Function to send code when the component mounts
            send();
        }, []);
        const send = async () => {
            axios.post(`${Config.backendURL}/user/send_code`, {email: email})
                .then((response) => {
                    console.log(response.data);
                    if (response.data) {
                        setSendCode(response.data);
                        console.log('Code sent successfully!');
                        // Handle success response as needed
                    } else {
                        console.log('Failed to send code:', response.data.error);
                        // Handle failure response as needed
                    }
                })
                .catch((error) => {
                    console.error('Error sending code:', error);
                    // Handle error cases
                });
        }

        const checkCode = async () => {
            if (sendCode == code) {
                axios.post(`${Config.backendURL}/user/register`, {
                    name: password.toString(),
                    email: email.toString(),
                    password: password.toString(),
                })
                    .then((response) => {
                        if (response.data == true) {
                            alert("Account created successfully");
                            navigation.navigate("Login");
                        } else {
                            console.log('POST decline!', response.data);
                        }
                    })
                    .catch((error) => {
                        console.error('Error making POST request:', error);
                    });
            } else {
                alert("The given code is invalid");
            }
        }

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.centered}>
                        <Text style={styles.title}>
                            Enter Verification Code Here
                        </Text>
                        <Text style={styles.subtitle}>
                            {email}
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Code"
                            keyboardType={"number-pad"}
                            value={code}
                            onChangeText={(text) => setCode(text)}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={checkCode}
                    >
                        <Text style={styles.signInText}>
                            Submit
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
    }
;

const styles = StyleSheet.create({
    container: {
        padding: Spacing * 2,
    },
    centered: {
        alignItems: "center",
    },
    title: {
        fontSize: FontSize.large,
        color: Colors.primary,
        fontFamily: Font["poppins-bold"],
        marginVertical: Spacing * 3,
    },
    subtitle: {
        fontFamily: Font["poppins-semiBold"],
        fontSize: FontSize.medium,
        maxWidth: "100%",
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

export default ValidationScreen;
