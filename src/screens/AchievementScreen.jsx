import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import HeaderComp from '../components/headerComp'
import { styles } from '../styles'
import { Col, Row } from 'react-native-easy-grid'
import { Icon } from '@rneui/themed'
import AchievementComp from '../components/achievementComp'

export default function AchievementScreen() {
    return (
        <SafeAreaView style={[styles.screenContainer, { paddingTop: 20 }]}>
            <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
                <HeaderComp />
                <View style={{ paddingHorizontal: 20 }}>
                    <Row>
                        <Col style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: "Pop600", fontSize: 20, color: "#303030", }}>Achievements</Text>
                        </Col>
                    </Row>
                    <AchievementComp />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
