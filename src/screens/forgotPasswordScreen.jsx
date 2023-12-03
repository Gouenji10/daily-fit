import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { Button, Input } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid'

export default function ForgotPasswordScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={50}>
                    <Col>
                        <Text style={{ fontFamily: "Pop600", fontSize: 24, color: "#303030", textAlign: "center" }}>Forgot Your Password?</Text>
                        <Text style={{ fontFamily: "Pop400", fontSize: 16, color: "#838383", textAlign: "center", lineHeight: 24 }}>Enter your registered email below to receive password reset instruction</Text>
                        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 30 }}>
                            <Image
                                source={require('../../assets/images/forgotPassword.png')}
                                style={{ width: "100%", height: 250, objectFit: "contain" }}
                            />
                        </View>
                    </Col>
                </Row>
                <Row size={30}>
                    <Col>
                        <Input
                            placeholder='Email Address...'
                            containerStyle={{ borderWidth: 1, borderColor: "silver", height: 55, borderRadius: 4, marginBottom: 18 }}
                            inputContainerStyle={{ borderBottomWidth: 0 }}
                            inputStyle={{ fontFamily: "Pop400", fontSize: 16, lineHeight: 24, paddingTop: 15 }}
                        />
                        <Button
                            title={'Send'}
                            buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={() => { navigation.navigate('otpConfirmation') }}
                        />
                    </Col>
                </Row>
                <Row size={20} style={{ justifyContent: "center" }}>
                    <Text style={{ color: "rgba(51, 51, 51, 0.40)", fontSize: 14, lineHeight: 21, fontFamily: "Pop400" }}>Remember password ?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                        <Text style={{ color: "#484FA3", fontSize: 14, lineHeight: 21, fontFamily: "Pop500" }}> Login</Text>
                    </TouchableOpacity>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
