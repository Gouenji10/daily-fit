import React from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { styles } from '../../styles'
import { Button } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid';

export default function ActivityScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={{ fontFamily: "Pop600", fontSize: 24, color: "#303030", textAlign: "center" }}>Physical Activity</Text>
                        <Text style={{ fontFamily: "Pop400", fontSize: 16, color: "#838383", textAlign: "center", lineHeight: 24 }}>Choosing four activities that you enjoy.</Text>
                    </Col>
                </Row>
                <Row size={65} style={{ alignItems: "flex-start" }}>
                    <Col>
                        <Row style={{ flexWrap: "wrap" }}>
                            <Col style={{ paddingRight: 5, width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-1.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Abs</Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-2.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Hula Hoop </Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ paddingLeft: 5, width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-3.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Running</Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ paddingRight: 5, width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-4.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Athletics</Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-5.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Stretching </Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ paddingLeft: 5, width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-6.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Push Up</Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ paddingRight: 5, width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-7.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Kettlebell</Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-8.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Pull up </Text>
                                    </View>
                                </Pressable>
                            </Col>
                            <Col style={{ paddingLeft: 5, width: "33%", marginBottom: 10 }}>
                                <Pressable>
                                    <View style={{ backgroundColor: "#F4F4F7", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 6 }}>
                                        <Image source={require('../../../assets/images/activity-1.png')} style={{ width: 24, height: 24, objectFit: "contain", marginBottom: 10 }} />
                                        <Text style={{ color: "#ACACAC", fontFamily: "Pop500", fontSize: 16 }}>Abs</Text>
                                    </View>
                                </Pressable>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row size={20} style={{ alignItems: "flex-end" }}>
                    <Col>
                        <Button
                            title={'Continue'}
                            buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={() => { navigation.navigate('bottomMenu', { screen: "recommendation" }) }}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
