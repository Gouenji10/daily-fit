import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { styles } from '../../styles'
import { Button } from '@rneui/themed'
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { Col, Grid, Row } from 'react-native-easy-grid';

export default function AgeScreen({ navigation }) {
    const ageScroller = Array.from({ length: 66 - 15 }, (_, index) => index + 16);
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={styles.forgotHeading}>How old are you??</Text>
                        <Text style={styles.forgotSubText}>This is used to set up reccomendations just for you.</Text>
                    </Col>
                </Row>
                <Row size={40} style={{ justifyContent: "center", alignItems: "center" }}>
                    <WheelPickerExpo
                        height={300}
                        initialSelectedIndex={30}
                        items={ageScroller.map(name => ({ label: name, value: '' }))}
                        onChange={({ item }) => { }}
                        renderItem={(props) => (
                            <Text
                                style={[
                                    {
                                        fontSize: 36,
                                        fontFamily: "Pop500",
                                        color: "#303030"
                                    },
                                    { fontSize: props.fontSize, color: props.fontColor },
                                ]}>
                                {props.label}
                            </Text>
                        )}
                        selectedStyle={{
                            borderColor: "#484FA3",
                            borderWidth: 1,
                        }}
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
                            onPress={() => { navigation.navigate('genderSelect') }}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
