import { Avatar, Icon } from '@rneui/themed'
import React from 'react'
import { Text } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'

export default function HeaderComp() {
    return (
        <Row style={{ alignItems: "center", paddingHorizontal: 20 }}>
            <Col style={{ width: 70 }}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/18.jpg" }}
                    containerStyle={{ marginVertical: 20 }}
                />
            </Col>
            <Col style={{ paddingLeft: 10 }}>
                <Text style={{ fontFamily: "Pop700", fontSize: 16, color: "#303030" }}>Hello, Gouenji</Text>
                <Text style={{ fontFamily: "Pop400", color: "#FDD64D" }}>0/10 points of Activity for Today</Text>
            </Col>
            <Col style={{ width: 70 }}>
                <Icon name='bell' type='feather' />
            </Col>
        </Row>
    )
}
