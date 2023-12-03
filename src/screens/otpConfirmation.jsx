import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { Button, Input } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { OtpInput } from "react-native-otp-entry";

export default function OtpConfirmation({ navigation }) {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={50}>
                    <Col>
                        <Text style={{ fontFamily: "Pop600", fontSize: 24, color: "#303030", textAlign: "center" }}>Verification</Text>
                        <Text style={{ fontFamily: "Pop400", fontSize: 16, color: "#838383", textAlign: "center", lineHeight: 24 }}>Please Enter your code sent to your email </Text>
                        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 50 }}>
                            <Image
                                source={require('../../assets/images/otpConfirmation.png')}
                                style={{ width: "100%", height: 200, objectFit: "contain" }}
                            />
                        </View>
                    </Col>
                </Row>
                <Row size={30}>
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
                            buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={() => { navigation.navigate('newPassword') }}
                        />
                    </Col>
                </Row>
                <Row size={20} style={{ justifyContent: "center" }}>
                    <Text style={{ color: "rgba(51, 51, 51, 0.40)", fontSize: 14, lineHeight: 21, fontFamily: "Pop400" }}>Didnt get code?</Text>
                    <TouchableOpacity>
                        <Text style={{ color: "#484FA3", fontSize: 14, lineHeight: 21, fontFamily: "Pop500" }}> Resend</Text>
                    </TouchableOpacity>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
