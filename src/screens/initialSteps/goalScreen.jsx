import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { styles } from '../../styles'
import { Button, Icon } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid';

export default function GoalScreen({ navigation }) {
    const [goal, setGoal] = useState('')

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={styles.forgotHeading}>Select Your Goal</Text>
                    </Col>
                </Row>
                <Row size={65} style={{ alignItems: "flex-start" }}>
                    <Col>
                        <View
                            style={[styles.goalItem, {
                                backgroundColor: goal === 'loseWeight' ? "#F4F4F7" : "white",
                                borderColor: goal === 'loseWeight' ? "#484FA3" : "white",
                            }]}
                        >
                            <Pressable onPress={() => { setGoal('loseWeight') }}>
                                <View style={styles.goalItemImageWrapper}>
                                    <Image source={require('../../../assets/images/goal-1.png')} />
                                    <Text style={styles.goalItemTitle}>Lose Weight</Text>
                                </View>
                                <Text style={styles.goalItemSubTitle}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                        <View
                            style={[styles.goalItem, {
                                backgroundColor: goal === "gainWeight" ? "#F4F4F7" : "white",
                                borderColor: goal === "gainWeight" ? "#484FA3" : "white"
                            }]}
                        >
                            <Pressable onPress={() => { setGoal('gainWeight') }}>
                                <View style={styles.goalItemImageWrapper}>
                                    <Image source={require('../../../assets/images/goal-2.png')} />
                                    <Text style={styles.goalItemTitle}>Gain Weight</Text>
                                </View>
                                <Text style={styles.goalItemSubTitle}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                        <View
                            style={[styles.goalItem, {
                                backgroundColor: goal === 'gainMuscle' ? "#F4F4F7" : "white",
                                borderColor: goal === 'gainMuscle' ? "#484FA3" : "white"
                            }]}
                        >
                            <Pressable onPress={() => { setGoal('gainMuscle') }}>
                                <View style={styles.goalItemImageWrapper}>
                                    <Image source={require('../../../assets/images/goal-3.png')} />
                                    <Text style={styles.goalItemTitle}>Gain Muscle</Text>
                                </View>
                                <Text style={styles.goalItemSubTitle}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                    </Col>
                </Row>
                <Row size={20} style={{ alignItems: "flex-end" }}>
                    <Col>
                        <Button
                            title={'Continue'}
                            buttonStyle={styles.coloredBtn}
                            titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                            onPress={() => { navigation.navigate('activitySelect') }}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
