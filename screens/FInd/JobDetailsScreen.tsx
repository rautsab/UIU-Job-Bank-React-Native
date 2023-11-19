import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const JobDetailsScreen = ({ route }: { route: any }) => {
    const navigation = useNavigation();

    const profile = () => {
        navigation.navigate("Profile");
    };
    const jobDetails = {
        image_url: 'https://example.com/image.jpg',
        job_title: 'Software Engineer',
        company_title: 'Google',
        job_location: 'Mountain View, CA',
        employment_status: 'Full Time',
        description: '“We Power the Magic!” That’s our motto at Disney Parks, Experiences and Products Technology & Digital. Our team creates world-class immersive digital experiences for the Company’s premier vacation brands including Disney’s Parks & Resorts worldwide, Disney Cruise Line, Aulani, A Disney Resort & Spa, and Disney Vacation Club.\n' +
            '\n' +
            'We are responsible for the end-to-end digital and physical Guest experience for all technology & digital-led initiatives across the Attractions & Entertainment, Food & Beverage, Resorts & Transportation and Merchandise lines of business as well as other initiatives including MyDisneyExperience and Hey, Disney!\n' +
            '\n' +
            'The Software Engineer applies practical knowledge of development and engineering to conceive, design, develop, test, and implement software fixes, improvements, components, and/or new software systems and applications of moderate complexity. The Software Engineer focuses on coding at the component level and works under minimal direction. The Software Engineer designs and develops highly scalable software systems and applications in a designated functional focus area(s).',
        responsibilities: 'Complete assigned component level software development and fixes using new or existing technologies\n' +
            'Participates in developing specifications for assigned components, projects or fixes\n' +
            'Writes code, completes programming, writes tests, performs testing and debugs code\n' +
            'Follows established protocols for installation and maintenance and completes documentation\n' +
            'Develops, runs, builds and maintains the technical components related to server-side and web service-based solutions\n' +
            'Develops an understanding of the front-end technology stack and is able to assist with end-to-end solving\n' +
            'Interacts and coordinates work with other technical groups in the organization\n' +
            'Reviews or solves problems and performs testing\n' +
            'Participates in conceiving and setting the architectural direction for web development projects',
        academic: 'Bachelor’s degree in computer science or similar field or related work experience\n' +
            '3+ years of progressively related experience in coding and development of highly scalable, high-volume software components, and/or client-facing web applications\n' +
            'Knowledge of object-oriented design principles, design patterns, coding standard methodologies, database applications, and web application development',
        published_date: 'October 20, 2023',
        vacancy: 5,
        experience: '3+ years',
        job_salary: '$100,000 - $120,000',
        skills: 'C++, Java, Python',
        gender: 'Any',
        deadline: 'November 30, 2023',
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Job Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/uiujbc.png')} style={styles.image} />
                </View>
                <View style={styles.jobInfo}>
                    <Text style={styles.jobTitle}>{jobDetails.job_title}</Text>
                    <View style={styles.companyLocation}>
                        <Text style={styles.company}>{jobDetails.company_title}</Text>
                        <Text style={styles.location}>{jobDetails.job_location}</Text>
                        <Text style={styles.status}>{jobDetails.employment_status}</Text>
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
                    <Text><Text style={styles.boldText}>Employment Status:</Text> {jobDetails.employment_status}</Text>
                    <Text><Text style={styles.boldText}>Experience:</Text> {jobDetails.experience}</Text>
                    <Text><Text style={styles.boldText}>Location:</Text> {jobDetails.job_location}</Text>
                    <Text><Text style={styles.boldText}>Salary:</Text> {jobDetails.job_salary}</Text>
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
                        <Image source={require('../../assets/icons/facebook.png')} style={styles.icon} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.shareIcon}>
                        <Image source={require('../../assets/icons/twitter.png')} style={styles.icon} />

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
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
});

export default JobDetailsScreen;
