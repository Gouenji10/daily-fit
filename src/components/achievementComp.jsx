import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'

export default function AchievementComp() {
    return (
        <View>
            <Row style={{ marginVertical: 25 }}>
                <Col style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Image source={require('../../assets/images/achievement-2.png')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#49496B", fontSize: 18, fontFamily: "Pop600" }}>Night Owl</Text>
                            <Text style={{ color: "rgba(153, 153, 181, 0.70)", fontFamily: "Pop400", fontSize: 16 }}>physical activity after 22:00</Text>
                        </View>
                    </View>
                    <View style={{ width: 20 }}>
                        <Image source={require('../../assets/images/Subtract.png')} />
                    </View>
                </Col>
            </Row>
            <Row style={{ marginVertical: 25 }}>
                <Col style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Image source={require('../../assets/images/achievement-1.png')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#49496B", fontSize: 18, fontFamily: "Pop600" }}>Early Bird</Text>
                            <Text style={{ color: "rgba(153, 153, 181, 0.70)", fontFamily: "Pop400", fontSize: 16 }}>physical activity after 22:00</Text>
                        </View>
                    </View>
                    <View style={{ width: 20 }}>
                        <Image source={require('../../assets/images/Subtract.png')} />
                    </View>
                </Col>
            </Row>
            <Row style={{ marginVertical: 25 }}>
                <Col style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Image source={require('../../assets/images/achievement-3.png')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#49496B", fontSize: 18, fontFamily: "Pop600" }}>Quick Fox</Text>
                            <Text style={{ color: "rgba(153, 153, 181, 0.70)", fontFamily: "Pop400", fontSize: 16 }}>physical activity after 22:00</Text>
                        </View>
                    </View>
                    <View style={{ width: 20 }}>
                        <Image source={require('../../assets/images/Subtract.png')} />
                    </View>
                </Col>
            </Row>
            <Row style={{ marginVertical: 25 }}>
                <Col style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Image source={require('../../assets/images/globe.png')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#49496B", fontSize: 18, fontFamily: "Pop600" }}>All over the “Sport”</Text>
                            <Text style={{ color: "rgba(153, 153, 181, 0.70)", fontFamily: "Pop400", fontSize: 16 }}>physical activity after 22:00</Text>
                        </View>
                    </View>
                    <View style={{ width: 20 }}>
                        <Image source={require('../../assets/images/Subtract.png')} />
                    </View>
                </Col>
            </Row>
            <Row style={{ marginVertical: 25 }}>
                <Col style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Image source={require('../../assets/images/achievement-4.png')} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#49496B", fontSize: 18, fontFamily: "Pop600" }}>Please Repeat</Text>
                            <Text style={{ color: "rgba(153, 153, 181, 0.70)", fontFamily: "Pop400", fontSize: 16 }}>Working the same muscle groups.</Text>
                        </View>
                    </View>
                    <View style={{ width: 20 }}>
                        <Image source={require('../../assets/images/Subtract.png')} />
                    </View>
                </Col>
            </Row>
            
        </View>
    )
}
