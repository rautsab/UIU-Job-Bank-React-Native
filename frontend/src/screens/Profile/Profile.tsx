import React, {useContext, useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Config from "../../config/config";

const ProfilePage = () => {
    const navigation = useNavigation();
    const {updateLoginState} = useContext(AuthContext);

    const handleAddCV = () => {
        axios.get(`${Config.backendURL}/cv/` + userEmail).then(res => {
            if (res.data == true) alert("You have already created a CV");
            else navigation.navigate("AddCV");
        })
    };

    const handleViewCV = () => {
        axios.get(`${Config.backendURL}/cv/` + userEmail).then(res => {
            if (res.data != true) alert("You haven't created a CV yet");
            else navigation.navigate("ViewCV");
        })
    };

    const handleLogout = async () => {
        await updateLoginState(false, "", "").then(r => {
        });
        alert("You have successfully logged out");
    };

    function viewApplied() {
        navigation.navigate("Applied");

    }

    function viewPosted() {
        navigation.navigate("Posted");

    }

    const [data, setJobData] = useState([]);
    const [applied, setAppliedData] = useState([]);

    useEffect(() => {
        axios.get(`${Config.backendURL}/jobs/getFiltered/` + userEmail)
            .then(response => {
                setJobData(response.data);
            })
            .catch(error => {
                console.error('Error fetching job data:', error);
            });
    }, []);

    useEffect(() => {
        axios.get(`${Config.backendURL}/applied/getFiltered/` + userEmail)
            .then(response => {
                setAppliedData(response.data);
            })
            .catch(error => {
                console.error('Error fetching job data:', error);
            });
    }, []);

    const {userEmail} = useContext(AuthContext);
    const {userName} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileImageContainer}>
                    <Image source={require('../../assets/images/profile.png')} style={styles.profileImage}/>
                </View>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>{userName}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerSubText}>
                    <Text style={styles.pageSubTitle}>{userEmail}</Text>
                </TouchableOpacity>
                <View style={styles.infoCard}>
                    <Text style={styles.infoText}>Applied Jobs: {applied.length}</Text>
                    <Text style={styles.separator}></Text>
                    <Text style={styles.infoText}>Posted Jobs: {data.length}</Text>
                </View>
                <View style={styles.infoCard}>
                    <TouchableOpacity onPress={viewApplied} style={styles.viewJobButton}>
                        <Text style={styles.buttonText}>View Applied Jobs</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}></Text>
                    <TouchableOpacity onPress={viewPosted} style={styles.appliedJobButton}>
                        <Text style={styles.buttonText}>View Posted Jobs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard}>
                    <TouchableOpacity onPress={handleAddCV} style={styles.editProfileButton}>
                        <Text style={styles.buttonText}>Add CV</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}></Text>
                    <TouchableOpacity onPress={handleViewCV} style={styles.settingsButton}>
                        <Text style={styles.buttonText}>View CV</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard}>
                    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
        marginTop: 75,
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
        marginTop: 5,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        marginBottom: 5,
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
    }, headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderRadius: 0,
    }, headerSubText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 0,
    }, pageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0
    }, pageSubTitle: {
        fontSize: 15,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 5
    }
});

export default ProfilePage;

