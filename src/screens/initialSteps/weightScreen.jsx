import React, { useState } from 'react'
import { SafeAreaView, Text, ToastAndroid, View } from 'react-native'
import { styles } from '../../styles'
import { Button } from '@rneui/themed'
import { RulerPicker } from 'react-native-ruler-picker';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { userStore } from '../../store/useAuthStore';


export default function WeightScreen({ navigation }) {

    const { info, setInfo } = userStore()
    const [weight, setWeight] = useState('');
    const handeleOnContinue = () => {
        if (weight) {
            setInfo({ ...info, ['weight']: weight, ['nextScreen']: 'heightSelect' })
            navigation.navigate('heightSelect')
        } else {
            ToastAndroid.show('Please add your body weight.', ToastAndroid.SHORT)
        }

    }


    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={styles.forgotHeading}>What's your weight?</Text>
                        <Text style={styles.forgotSubText}>This is used to set up reccomendations just for you.</Text></Col>
                </Row>
                <Row size={40} style={{ justifyContent: "center", alignItems: "center" }}>
                    <RulerPicker
                        min={1}
                        max={999}
                        step={1}
                        initialValue={50}
                        onValueChange={(number) => { }}
                        onValueChangeEnd={(number) => { setWeight(number) }}
                        unit="Kg"
                        valueTextStyle={{ height: 100, fontFamily: "Pop400", color: "#303030", fontSize: 40 }}
                        unitTextStyle={{ fontFamily: "Pop400", color: "#8C8C8C", fontSize: 14, letterSpacing: -2 }}
                        shortStepHeight={40}
                        longStepHeight={40}
                        shortStepColor={'silver'}
                        longStepColor={'silver'}
                        indicatorColor={'silver'}
                        indicatorHeight={80}
                        fractionDigits={0}
                        gapBetweenSteps={15}
                        stepWidth={1.5}
                    />
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
                            onPress={handeleOnContinue}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
