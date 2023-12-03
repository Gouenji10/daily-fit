import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { styles } from '../../styles'
import { Button, Icon } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid';

export default function GoalScreen({ navigation }) {
    const [goals, setGoals] = useState({
        loseWeight: false,
        gainWeight: false,
        gainMuscle: false
    })
    const handlePress = (text, input) => {
        setGoals({ ...goals, [text]: input })
    }
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={{ fontFamily: "Pop600", fontSize: 24, color: "#303030", textAlign: "center" }}>Select Your Goal</Text>
                    </Col>
                </Row>
                <Row size={65} style={{ alignItems: "flex-start" }}>
                    <Col>
                        <View style={{ padding: 20, marginBottom: 10, borderRadius: 6, backgroundColor: goals.loseWeight ? "#F4F4F7" : "white", borderColor: goals.loseWeight ? "#484FA3" : "white", borderWidth: 2 }}>
                            <Pressable onPress={() => { handlePress('loseWeight', !goals.loseWeight) }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={require('../../../assets/images/goal-1.png')} />
                                    <Text style={{ color: "#303030", fontSize: 20, fontFamily: "Pop500", paddingLeft: 10 }}>Lose Weight</Text>
                                </View>
                                <Text style={{ paddingTop: 8, color: "#8C8C8C", fontSize: 16, fontFamily: "Pop400" }}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                        <View style={{ padding: 20, marginBottom: 10, borderRadius: 6, backgroundColor: goals.gainWeight ? "#F4F4F7" : "white", borderColor: goals.gainWeight ? "#484FA3" : "white", borderWidth: 2 }}>
                            <Pressable onPress={() => { handlePress('gainWeight', !goals.gainWeight) }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={require('../../../assets/images/goal-2.png')} />
                                    <Text style={{ color: "#303030", fontSize: 20, fontFamily: "Pop500", paddingLeft: 10 }}>Gain Weight</Text>
                                </View>
                                <Text style={{ paddingTop: 8, color: "#8C8C8C", fontSize: 16, fontFamily: "Pop400" }}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                        <View style={{ padding: 20, marginBottom: 10, borderRadius: 6, backgroundColor: goals.gainMuscle ? "#F4F4F7" : "white", borderColor: goals.gainMuscle ? "#484FA3" : "white", borderWidth: 2 }}>
                            <Pressable onPress={() => { handlePress('gainMuscle', !goals.gainMuscle) }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={require('../../../assets/images/goal-3.png')} />
                                    <Text style={{ color: "#303030", fontSize: 20, fontFamily: "Pop500", paddingLeft: 10 }}>Gain Muscle</Text>
                                </View>
                                <Text style={{ paddingTop: 8, color: "#8C8C8C", fontSize: 16, fontFamily: "Pop400" }}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                    </Col>
                </Row>
                <Row size={20} style={{ alignItems: "flex-end" }}>
                    <Col>
                        <Button
                            title={'Continue'}
                            buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={() => { navigation.navigate('activitySelect') }}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
