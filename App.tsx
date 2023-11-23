import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import fonts from "./src/config/fonts";

import Navigation from "./src/navigation";
import {AuthProvider} from "./src/context/AuthContext";

export default function App() {
    const [fontsLoaded] = useFonts(fonts);

    return !fontsLoaded ? null : (
        <AuthProvider>
            <SafeAreaProvider>
                <Navigation/>
                <StatusBar/>
            </SafeAreaProvider>
        </AuthProvider>
    );
}
