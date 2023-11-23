import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import CustomTextInput from '../../components/AppTextInput';
import AppTextInput from "../../components/AppTextInput";
import Font from "../../constants/Font";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import {useNavigation} from "@react-navigation/native";
import {exp} from "@gorhom/bottom-sheet/lib/typescript/utilities/easingExp"; // Import your CustomTextInput component

const SettingsScreen = () => {
    const navigation = useNavigation();

    const profile = () => {
        navigation.navigate("Posting");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.signInButton}
            >
                <Text style={styles.signInText}>
                    Save Settings
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    }, text: {
        fontFamily: Font["poppins-regular"],
        color: "black",
        textAlign: "left",
        fontSize: FontSize.medium,
    }, headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 0,
    }, headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderRadius: 0,
    }, circularIcon: {
        width: 40, // Adjust the width and height according to your icon size
        height: 40,
        borderRadius: 30,
    }, pageTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 10
    },  signInButton: {
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
});

export default SettingsScreen;
