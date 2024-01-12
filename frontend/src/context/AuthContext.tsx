import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
    isLoggedIn: boolean;
    userEmail: string | null;
    userName: string | null; // New field for userName
    updateLoginState: (loggedIn: boolean, email?: string | null, name?: string | null) => Promise<void>; // Update the function signature
}

const initialAuthContext: AuthContextType = {
    isLoggedIn: false,
    userEmail: null,
    userName: null, // Initialize userName as null
    updateLoginState: async () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null); // New state for userName

    useEffect(() => {
        loadLoginState();
    }, []);

    const loadLoginState = async () => {
        try {
            const userLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            const email = await AsyncStorage.getItem('userEmail');
            const name = await AsyncStorage.getItem('userName'); // Load userName from AsyncStorage

            if (userLoggedIn !== null && email !== null && name !== null) {
                setIsLoggedIn(JSON.parse(userLoggedIn));
                setUserEmail(email);
                setUserName(name); // Set the userName state
            }
        } catch (error) {
            console.error('Error loading login state:', error);
        }
    };

    const updateLoginState = async (loggedIn: boolean, email?: string | null, name?: string | null) => {
        try {
            await AsyncStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
            setIsLoggedIn(loggedIn);

            if (email) {
                await AsyncStorage.setItem('userEmail', email);
                setUserEmail(email);
            } else {
                await AsyncStorage.removeItem('userEmail');
                setUserEmail(null);
            }

            if (name) {
                await AsyncStorage.setItem('userName', name); // Store userName in AsyncStorage
                setUserName(name); // Set the userName state
            } else {
                await AsyncStorage.removeItem('userName');
                setUserName(null);
            }
        } catch (error) {
            console.error('Error updating login state:', error);
        }
    };

    const authContextValue: AuthContextType = {
        isLoggedIn,
        userEmail,
        userName, // Include userName in the context value
        updateLoginState,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
