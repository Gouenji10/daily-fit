import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { styles } from '../styles'
import { Button, Input } from '@rneui/themed'
import { Col, Row } from 'react-native-easy-grid'
export default function NewPasswordScreen({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.screenContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <View>
                    <Row>
                        <Col>
                            <Text style={styles.forgotHeading}>Enter New Password</Text>
                            <Text style={styles.forgotSubText}>Enter your registered email below to receive password reset instruction</Text>
                            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 50 }}>
                                <Image
                                    source={require('../../assets/images/newPassword.png')}
                                    style={{ width: "100%", height: 200, objectFit: "contain" }}
                                />
                            </View>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                placeholder='New Password...'
                                containerStyle={styles.inputContainer}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                inputStyle={styles.inputStyle}
                            />
                            <Button
                                title={'Set Password'}
                                buttonStyle={styles.coloredBtn}
                                titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                                onPress={() => { navigation.navigate('login') }}
                            />
                        </Col>
                    </Row>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
