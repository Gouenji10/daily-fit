import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Pop400': require('./assets/fonts/Poppins-Regular.ttf'),
		'Pop500': require('./assets/fonts/Poppins-Medium.ttf'),
		'Pop600': require('./assets/fonts/Poppins-SemiBold.ttf'),
		'Pop700': require('./assets/fonts/Poppins-Bold.ttf'),
		'Pop800': require('./assets/fonts/Poppins-ExtraBold.ttf'),
		'Pop900': require('./assets/fonts/Poppins-Black.ttf'),
	})

	useEffect(() => {
		async function prepare() {
			// await AsyncStorage.clear()
			
			await SplashScreen.preventAutoHideAsync();
		}
		prepare()
	}, [])


	if (!fontsLoaded) {
		return undefined
	} else {
		SplashScreen.hideAsync()
	}

	return (
		<>
			<StatusBar style="dark" />
			<Navigation />
		</>
	);
}