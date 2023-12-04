import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { styles } from '../styles'
import { Col, Row } from 'react-native-easy-grid'
import { Avatar, ListItem } from '@rneui/themed'

export default function ProfileScreen() {
    return (
        <SafeAreaView style={[styles.screenContainer]}>
            <ScrollView contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20 }}>
                <Row>
                    <Col style={{ alignItems: 'center' }}>
                        <Avatar
                            size={128}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/18.jpg" }}
                            containerStyle={{ marginVertical: 20 }}
                        />
                        <Text style={styles.profileUserTitle}> Gouenji Shuuya</Text>
                        <Text style={styles.profileUserSubTitle}> Lose Weight Mode </Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title style={styles.profileItemTitle}>
                                    Edit Profile
                                </ListItem.Title>
                                <ListItem.Subtitle style={styles.profileItemSubTitle}>
                                    Edit name, age, weight, height
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title style={styles.profileItemTitle}>
                                    Change Goal and Activities
                                </ListItem.Title>
                                <ListItem.Subtitle style={styles.profileItemSubTitle}>
                                    Change sport activities and goal mode
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title style={styles.profileItemTitle}>
                                    Change Password
                                </ListItem.Title>
                                <ListItem.Subtitle style={styles.profileItemSubTitle}>
                                    Change or reset the password
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title style={styles.profileItemTitle}>
                                    Help Center
                                </ListItem.Title>
                                <ListItem.Subtitle style={styles.profileItemSubTitle} >
                                    If you had a problem, call us
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron color={'#303030'} size={24} />
                        </ListItem>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title style={styles.profileItemTitle}>
                                    Privacy Policy
                                </ListItem.Title>
                                <ListItem.Subtitle style={styles.profileItemSubTitle}>
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
