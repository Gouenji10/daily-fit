import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
import { Col, Row } from "react-native-easy-grid";
import HeaderComp from "../components/headerComp";
import { Icon } from "@rneui/base";
import { BarChart, PieChart } from "react-native-gifted-charts";
import AchievementComp from "../components/achievementComp";
export default function MonitoringScreen({ navigation }) {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
    const pieData = [
        { value: 70, color: '#484FA3', },
        { value: 30, color: '#EAEDF2' }
    ];
    const barData = [
        { value: 20, label: 'M', frontColor: "#F44040" },
        { value: 25, label: 'T', frontColor: '#FDD64D' },
        { value: 30, label: 'W', frontColor: '#484FA3' },
        { value: 40, label: 'T', frontColor: "#FDD64D" },
        { value: 30, label: 'F', frontColor: '#484FA3' },
        { value: 25, label: 'S', frontColor: "#484FA3" },
        { value: 20, label: 'S', frontColor: "#F44040" },
    ];
    return (
        <SafeAreaView style={[styles.screenContainer, { paddingTop: 20 }]}>
            <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
                <HeaderComp />
                <View style={{ paddingHorizontal: 20 }}>
                    <Row>
                        <Col>
                            <Text style={{ fontFamily: "Pop600", fontSize: 20, color: "#303030", }}>Daily Goal</Text>
                        </Col>
                        <Col style={{ justifyContent: "flex-end", alignItems: "center", flexDirection: "row" }}>
                            <Text style={{ paddingRight: 10, fontFamily: "Pop400", fontSize: 14, color: "rgba(153, 153, 181, 0.70)" }}>{getDate()}</Text>
                            <Icon name="calendar" type="feather" size={24} color="rgba(153, 153, 181, 0.70)" />
                        </Col>
                    </Row>
                    <Row style={{ paddingVertical: 30, alignItems: "center" }}>
                        <Col style={{ width: 160 }}>
                            <PieChart
                                donut
                                innerRadius={50}
                                data={pieData}
                                centerLabelComponent={() => { return <Text style={{ color: "#49496B", fontFamily: "Pop600", fontSize: 22 }}>70%</Text>; }}
                                showGradient
                                radius={70}
                            />
                        </Col>
                        <Col>
                            <Text style={{ color: "#49496B", fontFamily: "Pop600", fontSize: 22 }}>7/10 points</Text>
                            <Text style={{ color: "rgba(153, 153, 181, 0.70)", fontFamily: "Pop400", fontSize: 16 }}>points you marked as completed exercises</Text>
                        </Col>
                    </Row>
                </View>
                <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
                    <Row>
                        <Col style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: "Pop600", fontSize: 20, color: "#303030", }}>Weekly Activity</Text>
                        </Col>
                        <Col style={{ justifyContent: "flex-end", alignItems: "center", flexDirection: "row" }}>
                            <Text style={{
                                paddingRight: 10,
                                fontFamily: "Pop400",
                                fontSize: 14,
                                color: "rgba(153, 153, 181, 0.70)"
                            }}>
                                Last 7 days
                            </Text>
                            <Icon name="chevron-down" type="feather" size={24} color={'rgba(153, 153, 181, 0.7)'} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BarChart
                                barWidth={30}
                                noOfSections={3}
                                barBorderRadius={8}
                                data={barData}
                                yAxisThickness={0}
                                xAxisThickness={0}
                                hideYAxisText
                                spacing={20}
                                xAxisLabelTextStyle={{ fontFamily: "Pop400", color: "rgba(153, 153, 181, 0.70)" }}
                                isAnimated
                            />
                        </Col>
                    </Row>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Row>
                        <Col style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: "Pop600", fontSize: 20, color: "#303030", }}>Achievements</Text>
                        </Col>
                        <Col style={{ justifyContent: "flex-end", alignItems: "center", flexDirection: "row" }}>
                            <Text style={{
                                paddingRight: 10,
                                fontFamily: "Pop400",
                                fontSize: 14,
                                color: "rgba(153, 153, 181, 0.70)"
                            }}>
                                Last 7 days
                            </Text>
                            <Icon name="chevron-down" type="feather" size={24} color={'rgba(153, 153, 181, 0.7)'} />
                        </Col>
                    </Row>
                    <AchievementComp />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}