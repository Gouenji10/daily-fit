import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../styles'
import { Button } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid';

export default function GenderScreen({ navigation }) {
    const [gender, setGender] = useState('')
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={styles.forgotHeading}>Select Your Gender</Text>
                        <Text style={styles.forgotSubText}>This is used to set up reccomendations just for you.</Text>
                    </Col>
                </Row>
                <Row size={40} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Col style={{ paddingRight: 5 }}>
                        <Pressable
                            style={{
                                borderWidth: 3,
                                borderColor: gender === 'male' ? "#484FA3" : "white",
                                padding: 20,
                                borderRadius: 6,
                                backgroundColor: "#Fff",
                                opacity: gender === 'male' ? 1 : 0.5,
                            }}
                            onPress={() => { setGender('male') }}
                        >
                            <Image
                                source={require('../../../assets/images/man.png')}
                                style={{
                                    width: "100%",
                                    height: 150,
                                    objectFit: "contain",
                                    opacity: 0.5
                                }}
                            />
                            <Text style={{ color: gender === 'male' ? "#484FA3" : "#C7C9D9", fontFamily: "Pop600", fontSize: 18, textAlign: "center", paddingTop: 10, }}>Male</Text>
                        </Pressable>
                    </Col>
                    <Col style={{ paddingLeft: 5 }}>
                        <Pressable
                            style={{
                                borderWidth: 3,
                                borderColor: gender === 'female' ? "#484FA3" : "white",
                                padding: 20,
                                borderRadius: 6,
                                backgroundColor: "#Fff",
                                opacity: gender === 'female' ? 1 : 0.5,
                            }}
                            onPress={() => { setGender('female') }}
                        >
                            <Image source={require('../../../assets/images/woman.png')} style={{ width: "100%", height: 150, objectFit: "contain", opacity: 0.5 }} />
                            <Text style={{ color: gender === 'female' ? "#484FA3" : "#C7C9D9", fontFamily: "Pop600", fontSize: 18, textAlign: "center", paddingTop: 10 }}>Female</Text>
                        </Pressable>
                    </Col>
                </Row>
                <Row size={15} style={{ justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", color: "#ACACAC", fontSize: 14, fontFamily: "Pop400" }}>You can change this any time later</Text>
                </Row>
                <Row size={30} style={{ alignItems: "flex-end" }}>
                    <Col>
                        <Button
                            title={'Continue'}
                            buttonStyle={styles.coloredBtn}
                            titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                            onPress={() => { navigation.navigate('goalSelect') }}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView >
    )
}
