import React from 'react';
import {FlatList, StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const data = [
    {
        id: '1',
        title: 'Software Engineer',
        company: 'Google',
        location: 'Mountain View, CA',
        status: 'Full Time',
        image: 'https://example.com/image.jpg',
    },
    {
        id: '2',
        title: 'Product Manager',
        company: 'Facebook',
        location: 'Menlo Park, CA',
        status: 'Full Time',
        image: 'https://example.com/image2.jpg',
    },
    {
        id: '3',
        title: 'AI Developer',
        company: 'Google',
        location: 'Mountain View, CA',
        status: 'Full Time',
        image: 'https://example.com/image.jpg',
    },
    {
        id: '4',
        title: 'Machine Learning Engineer',
        company: 'Microsoft',
        location: 'Menlo Park, CA',
        status: 'Full Time',
        image: 'https://example.com/image2.jpg',
    },
    {
        id: '5',
        title: 'Senior Software Engineer',
        company: 'Google',
        location: 'Mountain View, CA',
        status: 'Full Time',
        image: 'https://example.com/image.jpg',
    }
];

// { route }: { route: any }
// const JobCard = ({job}: { job: any }) => {

interface JobCardProps {
    job: any; // Adjust 'any' to the specific type of job object you're using
    onPress: () => void;
    // Other props related to JobCard, if any
}

const JobCard: React.FC<JobCardProps> = ({job, onPress}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        console.log(`Pressed job with id: ${job.id}`);
        navigation.navigate("JobSingleView");
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.card}>
            <Image source={require('../../assets/images/uiujbc.png')} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{job.title}</Text>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
                <Text style={styles.status}>{job.status}</Text>
            </View>
        </TouchableOpacity>
    );
};
const AppliedScreen = () => {
    const navigation = useNavigation();
    const renderItem = ({item}: { item: any }) => <JobCard job={item} onPress={() => handlePress(item.id)}/>;

    const handlePress = (id: any) => {
        // Handle press, e.g., navigate to job details screen
        console.log(`Pressed job with id: ${id}`);
    };

    function profile() {
        navigation.navigate("Listing");
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Applied Jobs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon}/>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContent: {
        paddingVertical: 0,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 0,
        padding: 12,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    company: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        color: '#777',
        marginBottom: 4,
    },
    status: {
        fontSize: 14,
        color: 'green',
    },
    container: {
        paddingTop: 50,
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#ffffff',
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
    },
});

export default AppliedScreen;
