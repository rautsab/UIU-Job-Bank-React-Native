import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
    isLoggedIn: boolean;
    updateLoginState: (loggedIn: boolean) => Promise<void>;
}

const initialAuthContext: AuthContextType = {
    isLoggedIn: false,
    updateLoginState: async () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        loadLoginState();
    }, []);

    const loadLoginState = async () => {
        try {
            const userLoggedIn = await AsyncStorage.getItem('isLoggedIn');
            if (userLoggedIn !== null) {
                setIsLoggedIn(JSON.parse(userLoggedIn));
            }
        } catch (error) {
            console.error('Error loading login state:', error);
        }
    };

    const updateLoginState = async (loggedIn: boolean) => {
        try {
            await AsyncStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
            setIsLoggedIn(loggedIn);
        } catch (error) {
            console.error('Error updating login state:', error);
        }
    };

    const authContextValue: AuthContextType = {
        isLoggedIn,
        updateLoginState,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
