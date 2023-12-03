import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { styles } from '../styles'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Avatar, ListItem } from '@rneui/themed'

export default function ProfileScreen() {
    return (
        <SafeAreaView style={[styles.screenContainer, { paddingTop: 20 }]}>
            <ScrollView contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20 }}>
                <Row>
                    <Col style={{ alignItems: 'center' }}>
                        <Avatar
                            size={128}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                            containerStyle={{ marginVertical: 20 }}
                        />
                        <Text
                            style={{
                                fontFamily: "Pop600",
                                fontSize: 20,
                                color: "#303030",
                                textAlign: "center",
                            }}
                        >
                            Gouenji Shuuya
                        </Text>
                        <Text
                            style={{
                                color: "#8C8C8C",
                                fontSize: 14,
                                fontFamily: "Pop400",
                                letterSpacing: -0.14
                            }}
                        >
                            Lose Weight Mode
                        </Text>
                    </Col>
                </Row>
                <Row size={65}>
                    <Col>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "#303030",
                                        fontFamily: "Pop500",
                                        fontSize: 18,
                                        letterSpacing: -0.16
                                    }}
                                >
                                    Edit Profile
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{
                                        fontFamily: "Pop400",
                                        color: "#8C8C8C",
                                        letterSpacing: -0.14
                                    }}
                                >
                                    Edit name, age, weight, height
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "#303030",
                                        fontFamily: "Pop500",
                                        fontSize: 18,
                                        letterSpacing: -0.16
                                    }}
                                >
                                    Change Goal and Activities
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{
                                        fontFamily: "Pop400",
                                        color: "#8C8C8C",
                                        letterSpacing: -0.14
                                    }}
                                >
                                    Change sport activities and goal mode
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "#303030",
                                        fontFamily: "Pop500",
                                        fontSize: 18,
                                        letterSpacing: -0.16
                                    }}
                                >
                                    Change Password
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{
                                        fontFamily: "Pop400",
                                        color: "#8C8C8C",
                                        letterSpacing: -0.14
                                    }}
                                >
                                    Change or reset the password
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "#303030",
                                        fontFamily: "Pop500",
                                        fontSize: 18,
                                        letterSpacing: -0.16
                                    }}
                                >
                                    Help Center
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{
                                        fontFamily: "Pop400",
                                        color: "#8C8C8C",
                                        letterSpacing: -0.14
                                    }}
                                >
                                    If you had a problem, call us
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        color: "#303030",
                                        fontFamily: "Pop500",
                                        fontSize: 18,
                                        letterSpacing: -0.16
                                    }}
                                >
                                    Privacy Policy
                                </ListItem.Title>
                                <ListItem.Subtitle
                                    style={{
                                        fontFamily: "Pop400",
                                        color: "#8C8C8C",
                                        letterSpacing: -0.14
                                    }}
                                >
                                    To find out the rules here
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                    </Col>
                </Row>
            </ScrollView>
        </SafeAreaView>
    )
}
