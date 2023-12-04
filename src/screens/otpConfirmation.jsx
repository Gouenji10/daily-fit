import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { Button } from '@rneui/themed'
import { Col, Row } from 'react-native-easy-grid'
import { OtpInput } from "react-native-otp-entry";

export default function OtpConfirmation({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <View>
                    <Row>
                        <Col>
                            <Text style={styles.forgotHeading}>Verification</Text>
                            <Text style={styles.forgotSubText}>Please Enter your code sent to your email </Text>
                            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 50 }}>
                                <Image
                                    source={require('../../assets/images/otpConfirmation.png')}
                                    style={{ width: "100%", height: 200, objectFit: "contain" }}
                                />
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <View style={{ marginBottom: 20 }}>
                                <OtpInput
                                    numberOfDigits={6}
                                    focusColor="#484FA3"
                                    focusStickBlinkingDuration={1000}
                                    theme={{
                                        pinCodeContainerStyle: {
                                            borderRadius: 4,
                                            fontFamily: "Pop500",
                                            borderColor: "silver",
                                            width: 52,
                                        },
                                        pinCodeTextStyle: { fontFamily: "Pop500", fontSize: 18, color: "black" }
                                    }}
                                />
                            </View>
                            <Button
                                title={'Verify'}
                                buttonStyle={styles.coloredBtn}
                                titleStyle={{ fontFamily: "Pop600",fontSize: 16  }}
                                onPress={() => { navigation.navigate('newPassword') }}
                            />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Text style={{ color: "rgba(51, 51, 51, 0.40)", fontSize: 14, lineHeight: 21, fontFamily: "Pop400" }}>Didnt get code?</Text>
                        <TouchableOpacity>
                            <Text style={{ color: "#484FA3", fontSize: 14, lineHeight: 21, fontFamily: "Pop500" }}> Resend</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
