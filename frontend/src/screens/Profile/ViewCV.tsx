import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';
import { useNavigation } from '@react-navigation/native';

const ViewCV = () => {
    const navigation = useNavigation();

    const profile = () => {
        navigation.navigate('Posting');
    };

    const [firstname, setFirstName] = useState('Redwan Ahmed');
    const [lastname, setLastName] = useState('Utsab');
    const [email, setEmail] = useState('rutsab222063@bscse.uiu.ac.bd');
    const [phone, setPhone] = useState('+123456789');
    const [address, setAddress] = useState('123, ABC Street, XYZ City');
    const [summary, setSummary] = useState(
        'Experienced professional with a strong background in web development.'
    );
    const [education, setEducation] = useState(
        'Bachelor of Science in Computer Science and Engineering, UIU'
    );
    const [experience, setExperience] = useState(
        'Software Developer at Company XYZ (2019 - Present)'
    );
    const [skills, setSkills] = useState('React Native, JavaScript, HTML, CSS');
    const [languages, setLanguages] = useState('English (Fluent), Spanish (Intermediate)');

    function update_job() {
        // Logic to update profile
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    {/* Replace with your profile image */}
                    <View style={styles.circularIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Personal Information</Text>
                <Text style={styles.cvItem}>Name: {firstname} {lastname}</Text>
                <Text style={styles.cvItem}>Email: {email}</Text>
                <Text style={styles.cvItem}>Phone: {phone}</Text>
                <Text style={styles.cvItem}>Address: {address}</Text>
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Summary</Text>
                <Text style={styles.cvItem}>{summary}</Text>
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Education</Text>
                <Text style={styles.cvItem}>{education}</Text>
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Experience</Text>
                <Text style={styles.cvItem}>{experience}</Text>
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Skills</Text>
                <Text style={styles.cvItem}>{skills}</Text>
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Languages</Text>
                <Text style={styles.cvItem}>{languages}</Text>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={update_job}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 0,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderRadius: 0,
    },
    circularIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ddd', // Placeholder color
    },
    pageTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 10,
    },
    cvSection: {
        marginBottom: 20,
    },
    cvSectionTitle: {
        fontSize: FontSize.large,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cvItem: {
        fontSize: FontSize.medium,
        marginBottom: 5,
    },
    saveButton: {
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
    saveButtonText: {
        fontFamily: Font['poppins-bold'],
        color: Colors.onPrimary,
        textAlign: 'center',
        fontSize: FontSize.large,
    },
});

export default ViewCV;
