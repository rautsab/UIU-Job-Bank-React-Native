import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from "@react-navigation/native";
import axios from "axios";

const JobDetailsScreen = ({ route }: { route: any }) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [jobDetails, setJobDetails] = useState<any>(null);
    const { jobId } = route.params;

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://192.168.0.179:3000/jobs/${jobId}`);
                setJobDetails(response.data);
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    const profile = () => {
        navigation.navigate("Listing");
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Job Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/uiujbc.png')} style={styles.image}/>
                </View>
                <View style={styles.jobInfo}>
                    <Text style={styles.jobTitle}>{jobDetails.jobTitle}</Text>
                    <View style={styles.companyLocation}>
                        <Text style={styles.company}>{jobDetails.companyTitle}</Text>
                        <Text style={styles.location}>{jobDetails.location}</Text>
                        <Text style={styles.status}>{jobDetails.status}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.applySaveContainer}>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save Job</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Apply Now</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeader}>Job Summary</Text>
                <View style={styles.summaryList}>
                    <Text><Text style={styles.boldText}>Published on:</Text> {jobDetails.published_date}</Text>
                    <Text><Text style={styles.boldText}>Vacancy:</Text> {jobDetails.vacancy}</Text>
                    <Text><Text style={styles.boldText}>Employment Status:</Text> {jobDetails.status}</Text>
                    <Text><Text style={styles.boldText}>Experience:</Text> {jobDetails.experience}</Text>
                    <Text><Text style={styles.boldText}>Location:</Text> {jobDetails.location}</Text>
                    <Text><Text style={styles.boldText}>Salary:</Text> {jobDetails.salary}</Text>
                    <Text><Text style={styles.boldText}>Gender:</Text> {jobDetails.gender}</Text>
                    <Text><Text style={styles.boldText}>Skills:</Text> {jobDetails.skills}</Text>
                    <Text><Text style={styles.boldText}>Deadline:</Text> {jobDetails.deadline}</Text>
                    {/* Include other job summary details similarly */}
                </View>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeader}>Educational Qualification</Text>
                <Text>
                    {jobDetails.academic}
                </Text>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeader}>Job Description</Text>
                <Text>
                    {jobDetails.description}
                </Text>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeader}>Job Responsibilities</Text>
                <Text>
                    {jobDetails.responsibilities}
                </Text>
            </View>

            <View style={styles.shareContainer}>
                <Text style={styles.shareHeader}>Share</Text>
                <View style={styles.shareIcons}>
                    <TouchableOpacity style={styles.shareIcon}>
                        <Image source={require('../../assets/icons/facebook.png')} style={styles.icon}/>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.shareIcon}>
                        <Image source={require('../../assets/icons/twitter.png')} style={styles.icon}/>

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    jobInfo: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    companyLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    company: {
        marginRight: 10,
    },
    location: {
        marginRight: 10,
    },
    status: {
        color: 'blue',
    },
    applySaveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    applyButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    saveButtonText: {
        color: '#333',
    },
    applyButtonText: {
        color: '#fff',
    },
    summaryContainer: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    summaryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryList: {
        marginBottom: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    shareContainer: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    shareHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    shareIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    shareIcon: {
        // backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
    }, icon: {
        width: 30, // Adjust the width and height according to your icon size
        height: 30,
    }, circularButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderRadius: 25,
    }, modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
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
        borderRadius: 25,
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
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default JobDetailsScreen;
