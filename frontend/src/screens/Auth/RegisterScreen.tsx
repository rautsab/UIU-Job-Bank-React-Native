import React, {useState} from "react";
import {
    Button,
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
import axios from "axios/index";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({navigation: {navigate}}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);


    const signUpCheck = () => {
        console.log(name.toString());
        console.log(email.toString());
        console.log(password.toString());
        axios.post('http://192.168.0.181:3000/user/register', {
            name: password.toString(),
            email: email.toString(),
            password: password.toString(),
        })
            .then((response) => {
                if (response.data == true) {
                    console.log("account created successfully");
                } else {
                    console.log('POST decline!', response.data);
                }
            })
            .catch((error) => {
                console.error('Error making POST request:', error);
            });

    }

    const validateEmail = (email: React.SetStateAction<string>) => {
        const emailRegexList = [
            /^[^\s@]+@bscse\.uiu\.ac\.bd$/,  // Regex for bscse.uiu.ac.bd
            /^[^\s@]+@admin\.uiu\.ac\.bd$/,  // Regex for bscse.uiu.ac.bd
            /^[^\s@]+@uiu\.ac\.bd$/,  // Regex for bscse.uiu.ac.bd
            /^[^\s@]+@cse\.uiu\.ac\.bd$/,  // Regex for bscse.uiu.ac.bd
            /^[^\s@]+@vc\.uiu\.ac\.bd$/,  // Regex for bscse.uiu.ac.bd
        ];

        return emailRegexList.some(regex => regex.test(email as string));
    };

    const handleEmailChange = (text: React.SetStateAction<string>) => {
        setEmail(text);
        const isValid = validateEmail(text);
        setIsValidEmail(isValid);
    };

    const handleSubmit = () => {
        // Check isValidEmail state before allowing account creation
        if (isValidEmail) {
            signUpCheck();
        } else {
            console.log('Invalid email. Account not created.');
        }
    };

    return (
        <SafeAreaView>
            <View style={{padding: Spacing * 2}}>
                <View style={{alignItems: "center"}}>
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font["poppins-bold"],
                            marginVertical: Spacing * 3,
                        }}
                    >
                        Create account
                    </Text>
                    <Text
                        style={{
                            fontFamily: Font["poppins-regular"],
                            fontSize: FontSize.small,
                            maxWidth: "80%",
                            textAlign: "center",
                        }}
                    >
                        Create an account so you can explore all the existing jobs
                    </Text>
                </View>
                <View style={{marginVertical: Spacing * 3}}>
                    <AppTextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <React.Fragment>
                        <AppTextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                        />
                        {!isValidEmail && <Text style={{color: 'red'}}>Invalid email format</Text>}
                    </React.Fragment>
                    <AppTextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSubmit}
                >
                    <Text
                        style={{
                            fontFamily: Font["poppins-bold"],
                            color: Colors.onPrimary,
                            textAlign: "center",
                            fontSize: FontSize.large,
                        }}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Login")}
                    style={styles.haveAccountButton}
                >
                    <Text
                        style={{
                            fontFamily: Font["poppins-semiBold"],
                            color: Colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Already have an account
                    </Text>
                </TouchableOpacity>

                <View style={{marginVertical: Spacing * 3}}>
                    <Text
                        style={{
                            fontFamily: Font["poppins-semiBold"],
                            color: Colors.primary,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Or continue with
                    </Text>

                    <View
                        style={{
                            marginTop: Spacing,
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={styles.socialButton}
                        >
                            <Ionicons
                                name="logo-google"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.socialButton}
                        >
                            <Ionicons
                                name="logo-apple"
                                color={Colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.socialButton}
                        >
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
    signUpButton: {
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
    haveAccountButton: {
        padding: Spacing,
    },
    socialButton: {
        padding: Spacing,
        backgroundColor: Colors.gray,
        borderRadius: Spacing / 2,
        marginHorizontal: Spacing,
    },
});

export default RegisterScreen;
