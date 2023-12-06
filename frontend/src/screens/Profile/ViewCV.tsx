import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';
import {useNavigation} from '@react-navigation/native';
import axios from "axios/index";
import {AuthContext} from "../../context/AuthContext";

const ViewCV = () => {
    const navigation = useNavigation();

    const profile = () => {
        navigation.navigate('Posting');
    };

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [summary, setSummary] = useState('');
    const [education, setEducation] = useState(['']);
    const [experience, setExperience] = useState([''])
    const [skills, setSkills] = useState(['']);
    const [languages, setLanguages] = useState(['']);

    const {userEmail} = useContext(AuthContext);


    useEffect(() => {
        axios.get(`http://192.168.0.179:3000/cv/email/${userEmail}`)
            .then(response => {
                const {data} = response;
                setFirstName(data.firstname);
                setLastName(data.lastname);
                setEmail(data.email);
                setPhone(data.phone);
                setAddress(data.address);
                setSummary(data.summary);
                setEducation(data.education);
                setExperience(data.experience);
                setSkills(data.skills);
                setLanguages(data.languages);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching CV data:', error);
            });
    }, []);

    function update_job() {
        // Logic to update profile
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Curriculum Vitae</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    <View style={styles.circularIcon}/>
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
                {education.map((edu, index) => (
                    <Text key={index} style={styles.cvItem}>
                        {edu}
                    </Text>
                ))}
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Experience</Text>
                {experience.map((exp, index) => (
                    <Text key={index} style={styles.cvItem}>
                        {exp}
                    </Text>
                ))}
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Skills</Text>
                {skills.map((skill, index) => (
                    <Text key={index} style={styles.cvItem}>
                        {skill}
                    </Text>
                ))}
            </View>
            <View style={styles.cvSection}>
                <Text style={styles.cvSectionTitle}>Languages</Text>
                {languages.map((lang, index) => (
                    <Text key={index} style={styles.cvItem}>
                        {lang}
                    </Text>
                ))}
            </View>


            <TouchableOpacity style={styles.deleteButton} onPress={update_job}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
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
        color: '#333333', // Header color
        marginBottom: 10,
    },
    cvSection: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC', // Border color
        padding: 15,
        borderRadius: 10,
    },
    cvSectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#007bff', // Section title color
    },
    cvItem: {
        fontSize: 16,
        marginBottom: 5,
        color: '#444444', // Content color
    },
    deleteButton: {
        padding: 20,
        backgroundColor: 'red',
        marginVertical: 20,
        borderRadius: 8,
        shadowColor: '#000000', // Shadow color
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom:70
    },
    deleteButtonText: {
        fontFamily: 'Arial',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize:20
    },
});

export default ViewCV;
