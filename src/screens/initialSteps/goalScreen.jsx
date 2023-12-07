import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, ToastAndroid, View } from 'react-native'
import { styles } from '../../styles'
import { Button, } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid';
import { userStore } from '../../store/useAuthStore';

export default function GoalScreen({ navigation }) {
    const { info, setInfo } = userStore()
    const [goal, setGoal] = useState('')

    const handleOnContinue = () => {
        if (goal) {
            setInfo({ ...info, ['goal']: goal, ['nextScreen']: 'activitySelect' })
            navigation.navigate('activitySelect')
        } else {
            ToastAndroid.show('Please add your goal.', ToastAndroid.SHORT)
        }
    }
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
                                backgroundColor: goal === 'Lose Weight' ? "#F4F4F7" : "white",
                                borderColor: goal === 'Lose Weight' ? "#484FA3" : "white",
                            }]}
                        >
                            <Pressable onPress={() => { setGoal('Lose Weight') }}>
                                <View style={styles.goalItemImageWrapper}>
                                    <Image source={require('../../../assets/images/goal-1.png')} />
                                    <Text style={styles.goalItemTitle}>Lose Weight</Text>
                                </View>
                                <Text style={styles.goalItemSubTitle}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                        <View
                            style={[styles.goalItem, {
                                backgroundColor: goal === "Gain Weight" ? "#F4F4F7" : "white",
                                borderColor: goal === "Gain Weight" ? "#484FA3" : "white"
                            }]}
                        >
                            <Pressable onPress={() => { setGoal('Gain Weight') }}>
                                <View style={styles.goalItemImageWrapper}>
                                    <Image source={require('../../../assets/images/goal-2.png')} />
                                    <Text style={styles.goalItemTitle}>Gain Weight</Text>
                                </View>
                                <Text style={styles.goalItemSubTitle}>This is used to set up reccomendations just for you.</Text>
                            </Pressable>
                        </View>
                        <View
                            style={[styles.goalItem, {
                                backgroundColor: goal === 'Gain Muscle' ? "#F4F4F7" : "white",
                                borderColor: goal === 'Gain Muscle' ? "#484FA3" : "white"
                            }]}
                        >
                            <Pressable onPress={() => { setGoal('Gain Muscle') }}>
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
                            onPress={handleOnContinue}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
