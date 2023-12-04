import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { Button, Input } from '@rneui/themed'
import { Col, Row } from 'react-native-easy-grid'

export default function ForgotPasswordScreen({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <View>
                    <Row>
                        <Col>
                            <Text style={styles.forgotHeading}>Forgot Your Password?</Text>
                            <Text style={styles.forgotSubText}>Enter your registered email below to receive password reset instruction</Text>
                            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 30 }}>
                                <Image
                                    source={require('../../assets/images/forgotPassword.png')}
                                    style={{ width: "100%", height: 250, objectFit: "contain" }}
                                />
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                placeholder='Email Address...'
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                inputStyle={styles.inputStyle}
                            />
                            <Button
                                title={'Send'}
                                buttonStyle={styles.coloredBtn}
                                titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                                onPress={() => { navigation.navigate('otpConfirmation') }}
                            />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", }}>
                        <Text style={{ color: "rgba(51, 51, 51, 0.40)", fontSize: 14, lineHeight: 21, fontFamily: "Pop400" }}>Remember password ?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                            <Text style={{ color: "#484FA3", fontSize: 14, lineHeight: 21, fontFamily: "Pop500" }}> Login</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
