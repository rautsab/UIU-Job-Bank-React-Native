import React from 'react';
import { FlatList, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

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
    // Add more job data as needed
];

const JobCard = ({ job, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
        <Image source={require('../assets/images/uiujbc.png')} style={styles.image} />
        {/*<Image source={job.image ? { uri: job.image } : require('../assets/images/uiujbc.png')} style={styles.image} />*/}
        <View style={styles.textContainer}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
            <Text style={styles.status}>{job.status}</Text>
        </View>
    </TouchableOpacity>
);

const JobViews = () => {
    const renderItem = ({ item }) => <JobCard job={item} onPress={() => handlePress(item.id)} />;

    const handlePress = (id) => {
        // Handle press, e.g., navigate to job details screen
        console.log(`Pressed job with id: ${id}`);
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
        />
    );
};

const styles = StyleSheet.create({
    flatListContent: {
        paddingVertical: 50,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
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
});

export default JobViews;
