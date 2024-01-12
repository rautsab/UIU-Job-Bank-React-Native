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
import ViewCV from "../screens/Profile/ViewCV";
import AddCV from "../screens/Profile/AddCV";
import ViewApplications from "../screens/Profile/ViewApplications";
import Validation from "../screens/Auth/Validation";
import ValidationScreen from "../screens/Auth/Validation";

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
                <Stack.Screen name="AddCV" component={AddCV} />
                <Stack.Screen name="ViewCV" component={ViewCV} />
                <Stack.Screen name="ViewApplication" component={ViewApplications} />
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
            <Stack.Screen name="Validation" component={ValidationScreen} />
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
