import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { Col, Row } from "react-native-easy-grid";
import CategorySlider from "../components/categorySlider";
import HeaderComp from "../components/headerComp";
import { Button } from "@rneui/themed";

export default function WelcomeScreen({ navigation }) {

    
    return (
        <SafeAreaView style={[styles.screenContainer]}>
            <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
                <HeaderComp />
                <Row>
                    <Col>
                        <Text
                            style={{
                                fontFamily: "Pop600",
                                fontSize: 20,
                                color: "#303030",
                                paddingHorizontal: 20
                            }}
                        >
                            Categories
                        </Text>
                        <View style={{ flex: 1, position: "relative" }}>
                            <CategorySlider />
                        </View>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ paddingTop: 20 }}>
                        <Text
                            style={{
                                fontFamily: "Pop600",
                                fontSize: 20,
                                color: "#303030",
                                paddingHorizontal: 20
                            }}
                        >
                            Recommended
                        </Text>
                    </Col>
                </Row>
            </ScrollView>
        </SafeAreaView>
    )
}