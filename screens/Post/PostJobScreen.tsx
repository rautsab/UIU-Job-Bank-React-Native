import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import CustomTextInput from '../../components/AppTextInput';
import AppTextInput from "../../components/AppTextInput";
import Font from "../../constants/Font";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import {useNavigation} from "@react-navigation/native"; // Import your CustomTextInput component

const JobPostingForm = () => {
    const navigation = useNavigation();

    const profile = () => {
        navigation.navigate("Profile");
    };
    const [jobTitle, setJobTitle] = useState('');
    const [companyTitle, setCompanyTitle] = useState('');

    function update_job() {
        console.log(jobTitle);
        console.log(companyTitle);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Job Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>
                Job Title
            </Text>
            <AppTextInput
                placeholder="Job Title"
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
            />
            <Text style={styles.text}>
                Company Title
            </Text>
            <AppTextInput
                placeholder="Company Title"
                value={jobTitle}
                onChangeText={(text) => setCompanyTitle(text)}
            />
            <Text style={styles.text}>
                Company Location
            </Text>
            <AppTextInput
                placeholder="Company Location"
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
            />
            <Text style={styles.text}>
                Employment Status
            </Text>
            <AppTextInput
                placeholder="Employment Status"
                value={jobTitle}
                onChangeText={(text) => setCompanyTitle(text)}
            />
            <Text style={styles.text}>
                Salary
            </Text>
            <AppTextInput
                placeholder="Salary"
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
            />
            <Text style={styles.text}>
                Vacancy
            </Text>
            <AppTextInput
                placeholder="Vacancy"
                value={jobTitle}
                onChangeText={(text) => setCompanyTitle(text)}
            />
            <Text style={styles.text}>
                Experience
            </Text>
            <AppTextInput
                placeholder="Experience"
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
            />
            <Text style={styles.text}>
                Gender
            </Text>
            <AppTextInput
                placeholder="Gender"
                value={jobTitle}
                onChangeText={(text) => setCompanyTitle(text)}
            />
            <Text style={styles.text}>
                Skills
            </Text>
            <AppTextInput
                placeholder="Skills"
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
            />
            <Text style={styles.text}>
                Deadline
            </Text>
            <AppTextInput
                placeholder="Deadline"
                value={jobTitle}
                onChangeText={(text) => setJobTitle(text)}
            />
            <TouchableOpacity
                style={styles.signInButton}
                onPress={update_job}
            >
                <Text style={styles.signInText}>
                    Post Job
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

export default JobPostingForm;
