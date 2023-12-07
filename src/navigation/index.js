import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/welcomeScreen";
import LoginScreen from "../screens/loginScreen";
import IntroScreen from "../screens/introScreen";
import RegisterScreen from "../screens/registerScreen";
import ForgotPasswordScreen from "../screens/forgotPasswordScreen";
import OtpConfirmation from "../screens/otpConfirmation";
import NewPasswordScreen from "../screens/newPasswordScreen";
import WeightScreen from "../screens/initialSteps/weightScreen";
import HeightScreen from "../screens/initialSteps/heightScreen";
import AgeScreen from "../screens/initialSteps/ageScreen";
import GenderScreen from "../screens/initialSteps/genderScreen";
import GoalScreen from "../screens/initialSteps/goalScreen";
import ActivityScreen from "../screens/initialSteps/activityScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import ProfileScreen from "../screens/profileScreen";
import MonitoringScreen from "../screens/monitoringScreen";
import AchievementScreen from "../screens/AchievementScreen";
import { userStore } from "../store/useAuthStore";

export default function Navigation() {
    const { loggedIn } = userStore()
    const initialRoute = loggedIn ? "bottomMenu" : "intro"
    const BottomMenu = createBottomTabNavigator()
    function BottomTabNavigator() {
        return (
            <BottomMenu.Navigator
                initialRouteName="recommendation"
                screenOptions={{
                    tabBarStyle: { height: 70 },
                    tabBarLabelStyle: { top: -12, fontFamily: "Pop500" },
                    tabBarHideOnKeyboard: true,
                    tabBarLabelPosition: "below-icon",
                    tabBarActiveTintColor: "#fff",
                    tabBarActiveBackgroundColor: "#484FA3",
                }}
            >
                <BottomMenu.Screen
                    name="recommendation"
                    component={WelcomeScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Recommendation",
                        tabBarIcon: ({ color }) => <Icon name="command" type="feather" color={color} size={24} />

                    }}
                />
                <BottomMenu.Screen
                    name="monitoring"
                    component={MonitoringScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Monitoring",
                        tabBarIcon: ({ color }) => <Icon name="bar-chart-2" type="feather" color={color} size={24} />

                    }}
                />
                <BottomMenu.Screen
                    name="achievements"
                    component={AchievementScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Achievements",
                        tabBarIcon: ({ color }) => <Icon name="star" type="feather" color={color} size={24} />

                    }}
                />
                <BottomMenu.Screen
                    name="personalization"
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Personalization",
                        tabBarIcon: ({ color }) => <Icon name="user" type="feather" color={color} size={24} />

                    }}
                />
            </BottomMenu.Navigator>
        );
    }
    const Stack = createNativeStackNavigator();
    function RootNavigator() {
        return (
            <Stack.Navigator
                initialRouteName={initialRoute}
                screenOptions={{
                    animation: "slide_from_right",
                    headerTitleStyle: {
                        fontSize: 26,
                        fontFamily: "Pop400",
                    }
                }}
            >
                <Stack.Screen
                    name="intro"
                    component={IntroScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={RegisterScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="forgotPassword"
                    component={ForgotPasswordScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="otpConfirmation"
                    component={OtpConfirmation}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="newPassword"
                    component={NewPasswordScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="weightSelect"
                    component={WeightScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="heightSelect"
                    component={HeightScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="ageSelect"
                    component={AgeScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="genderSelect"
                    component={GenderScreen}
                    options={{
                        headerShadowVisible: false,
                        headerTitle: ''
                    }}
                />
                <Stack.Screen
                    name="goalSelect"
                    component={GoalScreen}
                    options={{ headerShadowVisible: false, headerTitle: '' }}
                />
                <Stack.Screen
                    name="activitySelect"
                    component={ActivityScreen}
                    options={{ headerShadowVisible: false, headerTitle: '' }}
                />
                <Stack.Screen
                    name="bottomMenu"
                    component={BottomTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}