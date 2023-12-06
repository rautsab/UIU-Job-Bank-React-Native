// import React, { useState } from 'react';
// import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
// import AppTextInput from "../../components/AppTextInput";
// import {useNavigation} from "@react-navigation/native";
//
// const AddCV = () => {
//     const navigation = useNavigation();
//
//     const profile = () => {
//         navigation.navigate("Posting");
//     };
//
//     const [firstname, setFirstName] = useState('');
//     const [lastname, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [summary, setSummary] = useState('');
//     const [education, setEducation] = useState('');
//     const [experience, setExperience] = useState('');
//     const [skills, setSkills] = useState('');
//     const [languages, setLanguages] = useState('');
//
//     function updateCV() {
//         // Logic to update CV
//     }
//
//     return (
//         <ScrollView style={styles.container}>
//             {/* Header */}
//             <View style={styles.headerContainer}>
//                 <TouchableOpacity style={styles.headerText}>
//                     <Text style={styles.pageTitle}>Add CV Information</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.headerText} onPress={profile}>
//                     {/* Placeholder image */}
//                     <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon}/>
//                 </TouchableOpacity>
//             </View>
//
//             {/* Personal Information */}
//             <Text style={styles.sectionTitle}>Personal Information</Text>
//             <AppTextInput
//                 placeholder="First Name"
//                 value={firstname}
//                 onChangeText={(text) => setFirstName(text)}
//             />
//             <AppTextInput
//                 placeholder="Last Name"
//                 value={lastname}
//                 onChangeText={(text) => setLastName(text)}
//             />
//             <AppTextInput
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//             />
//             <AppTextInput
//                 placeholder="Phone"
//                 value={phone}
//                 onChangeText={(text) => setPhone(text)}
//             />
//             <AppTextInput
//                 placeholder="Address"
//                 value={address}
//                 onChangeText={(text) => setAddress(text)}
//             />
//
//             {/* Summary */}
//             <Text style={styles.sectionTitle}>Summary</Text>
//             <AppTextInput
//                 placeholder="Summary"
//                 value={summary}
//                 onChangeText={(text) => setSummary(text)}
//             />
//
//             {/* Education */}
//             <Text style={styles.sectionTitle}>Education</Text>
//             <AppTextInput
//                 placeholder="Education"
//                 value={education}
//                 onChangeText={(text) => setEducation(text)}
//             />
//
//             {/* Experience */}
//             <Text style={styles.sectionTitle}>Experience</Text>
//             <AppTextInput
//                 placeholder="Experience"
//                 value={experience}
//                 onChangeText={(text) => setExperience(text)}
//             />
//
//             {/* Skills */}
//             <Text style={styles.sectionTitle}>Skills</Text>
//             <AppTextInput
//                 placeholder="Skills"
//                 value={skills}
//                 onChangeText={(text) => setSkills(text)}
//             />
//
//             {/* Languages */}
//             <Text style={styles.sectionTitle}>Languages</Text>
//             <AppTextInput
//                 placeholder="Languages"
//                 value={languages}
//                 onChangeText={(text) => setLanguages(text)}
//             />
//
//             {/* Save button */}
//             <TouchableOpacity
//                 style={styles.saveButton}
//                 onPress={updateCV}
//             >
//                 <Text style={styles.saveButtonText}>Save</Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 20,
//         paddingTop: 50,
//         backgroundColor: '#fff',
//     },
//     headerContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     headerText: {
//         // Style for header text
//     },
//     pageTitle: {
//         fontSize: 25,
//         fontWeight: 'bold',
//     },
//     circularIcon: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//     },
//     sectionTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginTop: 20,
//         marginBottom: 10,
//     },
//     inputGroup: {
//         marginBottom: 20,
//     },
//     saveButton: {
//         backgroundColor: 'blue',
//         padding: 15,
//         borderRadius: 8,
//         alignItems: 'center',
//     },
//     saveButtonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });
//
// export default AddCV;


import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import AppTextInput from "../../components/AppTextInput";
import axios from "axios/index";

const AddCV = () => {
    const navigation = useNavigation();

    const profile = () => {
        navigation.navigate("Posting");
    };

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [summary, setSummary] = useState('');
    const [education, setEducation] = useState(['']);
    const [experience, setExperience] = useState(['']);
    const [skills, setSkills] = useState(['']);
    const [languages, setLanguages] = useState(['']);

    function updateCV() {
        const cvData = {
            firstname,
            lastname,
            email,
            phone,
            address,
            summary,
            education,
            experience,
            skills,
            languages,
        };
        console.log(cvData);
        axios.post('https://your-backend-url.com/updateCV', cvData)
            .then(response => {
                console.log('CV data sent successfully:', response.data);
                // Handle the response as needed
            })
            .catch(error => {
                console.error('Error sending CV data:', error);
                // Handle errors if any
            });
    }

    const addField = (type: string) => {
        switch (type) {
            case 'education':
                setEducation([...education, '']);
                break;
            case 'experience':
                setExperience([...experience, '']);
                break;
            case 'skills':
                setSkills([...skills, '']);
                break;
            case 'languages':
                setLanguages([...languages, '']);
                break;
            default:
                break;
        }
    };

    const removeField = (index: number, type: string) => {
        switch (type) {
            case 'education':
                setEducation(education.filter((_, i) => i !== index));
                break;
            case 'experience':
                setExperience(experience.filter((_, i) => i !== index));
                break;
            case 'skills':
                setSkills(skills.filter((_, i) => i !== index));
                break;
            case 'languages':
                setLanguages(languages.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.headerText}>
                    <Text style={styles.pageTitle}>Add CV Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerText} onPress={profile}>
                    {/* Placeholder image */}
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.circularIcon}/>
                </TouchableOpacity>
            </View>

            {/* Personal Information */}
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <AppTextInput
                placeholder="First Name"
                value={firstname}
                onChangeText={(text) => setFirstName(text)}
            />
            <AppTextInput
                placeholder="Last Name"
                value={lastname}
                onChangeText={(text) => setLastName(text)}
            />
            <AppTextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <AppTextInput
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
            />
            <AppTextInput
                placeholder="Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />

            <Text style={styles.sectionTitle}>Summary</Text>
            <AppTextInput
                placeholder="Summary"
                value={summary}
                onChangeText={(text) => setSummary(text)}
            />

            {/* Education */}
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
                <View key={index} style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Education"
                        value={edu}
                        onChangeText={(text) => {
                            const updatedEducation = [...education];
                            updatedEducation[index] = text;
                            setEducation(updatedEducation);
                        }}
                    />
                    <TouchableOpacity onPress={() => removeField(index, 'education')}>
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={() => addField('education')}>
                <Text style={styles.addButtonText}>Add Education</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp, index) => (
                <View key={index} style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Experience"
                        value={exp}
                        onChangeText={(text) => {
                            const updatedExperience = [...experience];
                            updatedExperience[index] = text;
                            setExperience(updatedExperience);
                        }}
                    />
                    <TouchableOpacity onPress={() => removeField(index, 'experience')}>
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={() => addField('experience')}>
                <Text style={styles.addButtonText}>Add Experience</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Skills</Text>
            {skills.map((skill, index) => (
                <View key={index} style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Skills"
                        value={skill}
                        onChangeText={(text) => {
                            const updatedSkills = [...skills];
                            updatedSkills[index] = text;
                            setSkills(updatedSkills);
                        }}
                    />
                    <TouchableOpacity onPress={() => removeField(index, 'skills')}>
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={() => addField('skills')}>
                <Text style={styles.addButtonText}>Add Skills</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Languages</Text>
            {languages.map((lang, index) => (
                <View key={index} style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Languages"
                        value={lang}
                        onChangeText={(text) => {
                            const updatedLanguages = [...languages];
                            updatedLanguages[index] = text;
                            setLanguages(updatedLanguages);
                        }}
                    />
                    <TouchableOpacity onPress={() => removeField(index, 'languages')}>
                        <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={() => addField('languages')}>
                <Text style={styles.addButtonText}>Add Languages</Text>
            </TouchableOpacity>


            {/* Save button */}
            <TouchableOpacity
                style={styles.saveButton}
                onPress={updateCV}
            >
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
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        // Style for header text
    },
    pageTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    circularIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    inputGroup: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    removeText: {
        color: 'red',
    },
    addButton: {
        backgroundColor: '#75AAEA', // Green color (you can change it as per your preference)
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    addButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },

    saveButton: {
        backgroundColor: '#2196F3', // Blue color (you can change it as per your preference)
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 55, // Increased margin bottom for space
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default AddCV;
