import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {black} from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const ProfilePage = () => {
    const handleEditProfile = () => {
        // Logic for handling edit profile
    };

    const handleSettings = () => {
        // Logic for handling settings
    };

    const handleLogout = () => {
        // Logic for handling logout
    };

    function view_applied() {

    }

    function view_posted() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileImageContainer}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImage}/>

                </View>
                <View style={styles.infoCard}>
                    <Text style={styles.infoText}>Applied Jobs: 10</Text>
                    <Text style={styles.separator}></Text>
                    <Text style={styles.infoText}>Posted Jobs: 5</Text>
                </View>
                <View style={styles.infoCard}>
                <TouchableOpacity onPress={handleEditProfile} style={styles.viewJobButton}>
                    <Text style={styles.buttonText}>View Applied Jobs</Text>
                </TouchableOpacity>
                    <Text style={styles.separator}></Text>
                    <TouchableOpacity onPress={handleSettings} style={styles.appliedJobButton}>
                    <Text style={styles.buttonText}>View Posted Jobs</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.infoCard}>
                    <TouchableOpacity onPress={handleEditProfile} style={styles.editProfileButton}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}></Text>
                    <TouchableOpacity onPress={handleSettings} style={styles.settingsButton}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard}>
                    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Card for applied and posted jobs */}


            {/* Logout button */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileHeader: {
        marginTop:75,
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImageContainer: {
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 100,
        elevation: 5,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    viewJobButton: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '100%'

    },
    appliedJobButton: {
        backgroundColor: '#2ecc71',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '100%'

    },
    editProfileButton: {
        backgroundColor: '#cbd64f',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '100%'

    },
    settingsButton: {
        backgroundColor: '#c2733a',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '100%'

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoCard: {
        marginTop:10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        marginBottom: 10,
        width: 350,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
    },
    logoutButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        width: '100%'
    }, separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
        marginVertical: 10,
    }
});

export default ProfilePage;

