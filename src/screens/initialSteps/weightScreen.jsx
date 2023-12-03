import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { styles } from '../../styles'
import { Button } from '@rneui/themed'
import { RulerPicker } from 'react-native-ruler-picker';
import { Col, Grid, Row } from 'react-native-easy-grid';
export default function WeightScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={{ fontFamily: "Pop600", fontSize: 24, color: "#303030", textAlign: "center" }}>What's your weight?</Text>
                        <Text style={{ fontFamily: "Pop400", fontSize: 16, color: "#838383", textAlign: "center", lineHeight: 24 }}>This is used to set up reccomendations just for you.</Text></Col>
                </Row>
                <Row size={40} style={{ justifyContent: "center", alignItems: "center" }}>
                    <RulerPicker
                        min={1}
                        max={999}
                        step={1}
                        initialValue={50}
                        onValueChange={(number) => { }}
                        onValueChangeEnd={(number) => { }}
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
                <Row size={30} style={{alignItems:"flex-end"}}>
                    <Col>
                        <Button
                            title={'Continue'}
                            buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={() => { navigation.navigate('heightSelect') }}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
