import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { styles } from '../styles'
import { Button, Icon, Input } from "@rneui/themed";
import { Col, Row } from "react-native-easy-grid";
import { useState } from "react";
import { userStore } from "../store/useAuthStore";

export default function RegisterScreen({ navigation }) {

    const { setUser } = userStore()

    const [inputs, setInputs] = useState({ name: "", email: "", password: "" })
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
        if (!inputs.name) {
            errors.name = true;
        }

        if (!inputs.email) {
            errors.email = true;
        }
        else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
            errors.email = true;
            ToastAndroid.show('Please enter valid email address.', ToastAndroid.SHORT)
        }
        if (!inputs.password) {
            errors.password = true;
        }
        else if (inputs.password.length < 6) {
            errors.password = true;
            ToastAndroid.show('Password must be of 6 letters or longer.', ToastAndroid.SHORT)
        }
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                setUser({ ...inputs })
                navigation.navigate('weightSelect')
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
                            <Image source={require('../../assets/images/logo.png')} style={{ width: "100%", height: 40, objectFit: "contain" }} />
                            <View style={{ width: "100%", marginVertical: 50 }}>
                                <Input
                                    placeholder='FullName...'
                                    containerStyle={[styles.inputContainer, { borderColor: errors.name ? "#DC143C" : "silver" }]}
                                    inputContainerStyle={{ borderBottomWidth: 0 }}
                                    inputStyle={styles.inputStyle}
                                    value={inputs.name}
                                    onChangeText={(text) => { handleOnchange(text, 'name') }}
                                    autoComplete="name"
                                />
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
                                    autoCapitalize="none"
                                    onChangeText={(text) => { handleOnchange(text, 'password') }}
                                />
                                <Button
                                    title={'Sign Up'}
                                    buttonStyle={styles.coloredBtn}
                                    titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                                    onPress={handleOnSubmit}
                                />
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
                                    title={'Sign Up with Facebook'}
                                    buttonStyle={styles.coloredBtn}
                                    titleStyle={{ fontFamily: "Pop600" }}
                                />
                                <Button
                                    title={'Sign Up with Google'}
                                    type="outline"
                                    buttonStyle={styles.outlineBtn}
                                    titleStyle={{ fontFamily: "Pop600", color: "#484FA3", fontSize: 16 }}
                                />
                            </View>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", }}>
                        <Text style={{ fontSize: 14, fontFamily: "Pop400", color: "#D6D6D6" }}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={{ fontSize: 14, fontFamily: "Pop500", color: "#484FA3" }}>Log In</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
