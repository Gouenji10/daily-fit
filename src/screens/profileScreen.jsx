import React from 'react'
import { Pressable, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native'
import { styles } from '../styles'
import { Col, Row } from 'react-native-easy-grid'
import { Avatar, Icon, ListItem } from '@rneui/themed'
import { userStore } from '../store/useAuthStore'

export default function ProfileScreen({navigation}) {
    const { user, info, logOut } = userStore()
    const handleSignOut = () => {
        logOut()
        ToastAndroid.show('Logged out successfully.', ToastAndroid.SHORT)
        navigation.navigate('login')
    }
    return (
        <SafeAreaView style={[styles.screenContainer]}>
            <ScrollView contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 10 }}>
                <Row>
                    <Col style={{ alignItems: 'center' }}>
                        <Avatar
                            size={128}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/18.jpg" }}
                            containerStyle={{ marginVertical: 20 }}
                        />
                        <Text style={styles.profileUserTitle}> {user.name}</Text>
                        <Text style={styles.profileUserSubTitle}> {info.goal} Mode </Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListItem>
                            <Icon name="user" type="feather" color="grey" />
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
                            <Icon name="activity" type="feather" color="grey" />
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
                            <Icon name="key" type="feather" color="grey" />
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
                            <Icon name="headphones" type="feather" color="grey" />
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
                            <Icon name="shield" type="feather" color="grey" />
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
                        <Pressable onPress={handleSignOut}>
                            <ListItem>
                                <Icon name="power" type="feather" color="grey" />
                                <ListItem.Content>
                                    <ListItem.Title style={styles.profileItemTitle}>
                                        Log out
                                    </ListItem.Title>
                                    <ListItem.Subtitle style={styles.profileItemSubTitle}>
                                        Take a break
                                    </ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </Pressable>
                    </Col>
                </Row>
            </ScrollView>
        </SafeAreaView>
    )
}
