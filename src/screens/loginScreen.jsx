import { Image, KeyboardAvoidingView, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
import { Button, Input } from "@rneui/themed";
import { Col, Row } from "react-native-easy-grid";
import { useState } from "react";
import { Icon } from "@rneui/base";
import { userStore } from "../store/useAuthStore";

export default function LoginScreen({ navigation }) {
    const { user, login } = userStore()
    const [inputs, setInputs] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleOnchange = (text, input) => {
        setInputs({ ...inputs, [input]: text })
    }

    const handleOnSubmit = async () => {
        const errors = {};
        if (!inputs.email) {
            errors.email = true;
        } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
            errors.email = true;
            ToastAndroid.show('Please enter valid email address.', ToastAndroid.SHORT)
        }
        if (!inputs.password) {
            errors.password = true;
        } else if (inputs.password.length < 6) {
            errors.password = true;
            ToastAndroid.show('Password must be of 6 letters or longer.', ToastAndroid.SHORT)
        }
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                if (user.email === inputs.email && user.password === inputs.password) {
                    login()
                    navigation.navigate('bottomMenu', { screen: "recommendation" })
                }else{
                    ToastAndroid.show('Entered Credentials doesn\'t match.', ToastAndroid.SHORT)
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            ToastAndroid.show('Please check the highlighted input fields.', ToastAndroid.SHORT)
        }
    }
    return (
        <KeyboardAvoidingView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <View>
                    <Row>
                        <Col>
                            <Image source={require('../../assets/images/logo.png')} style={styles.logoStyle} />
                            <View style={{ width: "100%", marginVertical: 50 }}>
                                <Input
                                    placeholder='Email Address...'
                                    containerStyle={[styles.inputContainer, { borderColor: errors.email ? "#DC143C" : "silver" }]}
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    inputStyle={styles.inputStyle}
                                    value={inputs.email}
                                    onChangeText={(text) => { handleOnchange(text, 'email') }}
                                    autoCapitalize="none"
                                    autoComplete="email"
                                />
                                <Input
                                    placeholder='Password...'
                                    containerStyle={[styles.inputContainer, { borderColor: errors.password ? "#DC143C" : "silver" }]}
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    inputStyle={styles.inputStyle}
                                    rightIcon={<Icon name={showPassword ? 'eye-off' : 'eye'} type="feather" color={'silver'} onPress={() => { toggleShowPassword() }} />}
                                    secureTextEntry={!showPassword}
                                    value={inputs.password}
                                    onChangeText={(text) => { handleOnchange(text, 'password') }}
                                    autoCapitalize="none"
                                />
                                <Button
                                    title={'Sign In'}
                                    buttonStyle={styles.coloredBtn}
                                    titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                                    onPress={handleOnSubmit}
                                />
                                <TouchableOpacity onPress={() => { navigation.navigate('forgotPassword') }}>
                                    <Text style={{ textAlign: "center", color: "#484FA3", fontSize: 16, fontFamily: "Pop500" }}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 20, }}>
                        <Col>
                            <View style={{ position: 'relative', borderTopWidth: 1, borderTopColor: "silver", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text
                                    style={{
                                        color: "rgba(51, 51, 51, 0.40)",
                                        fontFamily: "Pop400",
                                        fontSize: 14,
                                        marginVertical: 20,
                                        backgroundColor: "white",
                                        position: "absolute",
                                        padding: 10,
                                    }}>
                                    Or
                                </Text>
                            </View>
                            <View style={{ marginTop: 50 }}>
                                <Button
                                    title={'Log In with Facebook'}
                                    buttonStyle={styles.coloredBtn}
                                    titleStyle={{ fontFamily: "Pop600" }}
                                />
                                <Button
                                    title={'Log In with Google'}
                                    type="outline"
                                    buttonStyle={styles.outlineBtn}
                                    titleStyle={{ fontFamily: "Pop600", color: "#484FA3" }}
                                />
                            </View>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 14, fontFamily: "Pop400", color: "#D6D6D6" }}>New User ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('register')}>
                            <Text style={{ fontSize: 14, fontFamily: "Pop500", color: "#484FA3" }}>Create Account</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}