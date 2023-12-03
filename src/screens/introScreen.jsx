import { SafeAreaView, View } from "react-native";
import { styles } from "../styles";
import IntroComp from "../components/introComp";
import { Button } from "@rneui/themed";
import { Col, Grid, Row } from "react-native-easy-grid";

export default function IntroScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ justifyContent: "space-between" }}>
                <Row size={75}>
                    <View style={{ position: "relative", flex: 1 }}>
                        <IntroComp />
                    </View>
                </Row>
                <Row size={20}>
                    <Col style={{ paddingHorizontal: 20 }}>
                        <Button
                            title={'Get Started'}
                            buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600" }}
                            onPress={() => navigation.navigate('register')}
                        />
                        <Button
                            title={'Sign In'}
                            type="outline"
                            buttonStyle={{ paddingVertical: 15, borderRadius: 6, borderColor: "#484FA3" }}
                            titleStyle={{ fontFamily: "Pop600", color: "#484FA3" }}
                            onPress={() => navigation.navigate('login')}
                        />
                    </Col>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}

