import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, ToastAndroid, View } from 'react-native'
import { styles } from '../../styles'
import { Button } from '@rneui/themed'
import { Col, Grid, Row } from 'react-native-easy-grid';
import { userStore } from '../../store/useAuthStore';

export default function ActivityScreen({ navigation }) {

    const { info, setInfo } = userStore()
    const [userActivities, setUserActivities] = useState({
        abs: false,
        hulla_hoop: false,
        running: false,
        athletics: false,
        stretching: false,
        push_up: false,
        kettlebell: false,
        pull_up: false,
    })

    function checkActivityCount(obj) {
        let count = 0
        for (var o in obj)
            if (obj[o]) count++;

        return count;
    }
    const onHandleChange = (text, value) => {
        setUserActivities({ ...userActivities, [text]: !value })
    }

    const handleOnContinue = () => {
        const count = checkActivityCount(userActivities)
        if (count <= 4) {
            setInfo({ ...info, ['activity']: userActivities, ['nextScreen']: 'recommendation' })
            navigation.navigate('bottomMenu', { screen: "recommendation" })
        } else {
            ToastAndroid.show('Please add four or more Physical Activity.', ToastAndroid.SHORT)
        }
    }

    const activities = [
        {
            title: "Abs",
            image: require('../../../assets/images/activity-1.png'),
            slug: "abs"
        },
        {
            title: "Hula Hoop",
            image: require('../../../assets/images/activity-2.png'),
            slug: "hulla_hoop"
        },
        {
            title: "Running",
            image: require('../../../assets/images/activity-3.png'),
            slug: "running"
        },
        {
            title: "Athletics",
            image: require('../../../assets/images/activity-4.png'),
            slug: "athletics"
        },
        {
            title: "Stretching",
            image: require('../../../assets/images/activity-5.png'),
            slug: "stretching"
        },
        {
            title: "Push Up",
            image: require('../../../assets/images/activity-6.png'),
            slug: "push_up"
        },
        {
            title: "Kettlebell",
            image: require('../../../assets/images/activity-7.png'),
            slug: "kettlebell"
        },
        {
            title: "Pull up",
            image: require('../../../assets/images/activity-8.png'),
            slug: "pull_up"
        },
    ]
    const ActivityItems = () => {
        return activities.map((item, index) => (
            <Col style={styles.activityCol} key={index}>
                <Pressable onPress={() => { onHandleChange(item.slug, userActivities[`${item.slug}`]) }}>
                    <View style={[styles.activityItem, { borderColor: userActivities[`${item.slug}`] ? "#484FA3" : '#F4F4F7' }]}>
                        <Image source={item.image} style={styles.activityItemImage} />
                        <Text style={styles.activityItemText}>{item.title}</Text>
                    </View>
                </Pressable>
            </Col>
        ))
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ paddingHorizontal: 20 }}>
                <Row size={15}>
                    <Col>
                        <Text style={styles.forgotHeading}>Physical Activity</Text>
                        <Text style={styles.forgotSubText}>Choosing four activities that you enjoy.</Text>
                    </Col>
                </Row>
                <Row size={65} style={{ alignItems: "flex-start" }}>
                    <Col>
                        <Row style={{ flexWrap: "wrap", gap: 5 }}>
                            <ActivityItems />
                        </Row>
                    </Col>
                </Row>
                <Row size={20} style={{ alignItems: "flex-end" }}>
                    <Col>
                        <Button
                            title={'Continue'}
                            buttonStyle={styles.coloredBtn}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={handleOnContinue}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
