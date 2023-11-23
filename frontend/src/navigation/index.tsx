// import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import * as React from "react";
// import Colors from "../constants/Colors";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import Welcome from "../screens/WelcomeScreen";
//
// import {RootStackParamList} from "../types/types_of_stack";
// import JobDetailsScreen from "../screens/JobSingleDetails";
// import JobViewsScreen from "../screens/JobInformationScreen";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import JobSingleDetails from "../screens/JobSingleDetails";
// import JobViews from "../screens/JobInformationScreen";
//
// const theme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         background: Colors.background,
//     },
// };
//
// export default function Navigation() {
//     return (
//         <NavigationContainer theme={theme}>
//             <RootNavigator/>
//         </NavigationContainer>
//     );
// }
//
// /**
//  * A root stack navigator is often used for displaying modals on top of all other content.
//  * https://reactnavigation.org/docs/modal
//  */
// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Tab = createBottomTabNavigator<RootStackParamList>();
// const Stack_In = createNativeStackNavigator<RootStackParamList>();
//
// function Job_Nav() {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false,
//             }}
//         >
//             <Stack.Screen name="JobViews" component={JobViews}/>
//             <Stack.Screen name="JobSingleView" component={JobSingleDetails}/>
//         </Stack.Navigator>
//     );
// }
//
// function JobTabs() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: Colors.primary,
//                 tabBarInactiveTintColor: Colors.background,
//             }}
//         >
//             <Tab.Screen
//                 name="FindTab"
//                 component={Job_Nav}
//                 options={{
//                     tabBarLabel: 'Find Job', // Change this label as per your requirement
//                 }}
//             />
//             <Tab.Screen
//                 name="PostTab"
//                 component={JobDetailsScreen}
//                 options={{
//                     tabBarLabel: 'Post Tab', // Change this label as per your requirement
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }
//
// function RootNavigator() {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false,
//             }}
//         >
//             <Stack.Screen name="Welcome" component={Welcome}/>
//             <Stack.Screen name="Login" component={LoginScreen}/>
//             <Stack.Screen name="Register" component={RegisterScreen}/>
//             <Stack.Screen name="JobTabs" component={JobTabs}/>
//         </Stack.Navigator>
//     );
// }

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import Welcome from "../screens/Welcome/WelcomeScreen";
import JobDetailsScreen from "../screens/Find/JobDetailsScreen";
import JobViewsScreen from "../screens/Find/JobListingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RootStackParamList } from "../types/types";
import JobPostingForm from "../screens/Post/PostJobScreen";
import ProfilePage from "../screens/Profile/Profile";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";
import AppliedScreen from "../screens/Profile/Applied";
import PostedScreen from "../screens/Profile/Posted";
import EditScreen from "../screens/Profile/Edit";
import SettingsScreen from "../screens/Profile/Settings";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
    },
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

function Job_Find_Nav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="JobViews" component={JobViewsScreen} />
            <Stack.Screen name="JobSingleView" component={JobDetailsScreen} />
            <Stack.Screen name="Listing" component={Profile} />
        </Stack.Navigator>
    );
}

function Profile() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Profile" component={ProfilePage} />
                <Stack.Screen name="Applied" component={AppliedScreen} />
                <Stack.Screen name="Posted" component={PostedScreen} />
                <Stack.Screen name="EditProfile" component={EditScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        );
}
function Job_Post_Nav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="JobPostForm" component={JobPostingForm} />
            <Stack.Screen name="Posting" component={Profile} />
        </Stack.Navigator>
    );
}

function JobTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: "grey",
                tabBarStyle: {
                    backgroundColor: 'white', // Change the background color of the tab bar
                    borderTopColor: 'transparent', // Optional: For styling the top border of the tab bar
                },
                tabBarLabelStyle: {
                    fontSize: 16, // Change the font size of the tab labels
                    fontWeight: 'bold', // Change the font weight of the tab labels
                },
                tabBarIconStyle: {
                    // Style for the tab icon
                    // For example: You can set icon size, color, etc.
                    // Check the available properties in the documentation
                },
            }}
        >
            <Tab.Screen
                name="JobFindTabs"
                component={Job_Find_Nav}
                options={{
                    tabBarLabel: 'Find Job',
                }}
            />
            <Tab.Screen
                name="JobPostTabs"
                component={Job_Post_Nav}
                options={{
                    tabBarLabel: 'Post Tab',
                }}
            />
        </Tab.Navigator>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
                name="JobTabs"
                component={JobTabs}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <NavigationContainer theme={theme}>
            {isLoggedIn ? (
                <JobTabs />
            ) : (
                <RootNavigator />
            )}
        </NavigationContainer>
    );
}
