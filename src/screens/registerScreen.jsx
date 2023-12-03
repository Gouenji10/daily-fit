import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../styles'
import { Button, Input } from "@rneui/themed";
import { Col, Grid, Row } from "react-native-easy-grid";

export default function RegisterScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Grid style={{ justifyContent: "space-between", paddingHorizontal: 20 }}>
                <Row size={50}>
                    <Col>
                        <Image source={require('../../assets/images/logo.png')} style={{ width: "100%", height: 40, objectFit: "contain" }} />
                        <View style={{ width: "100%", marginVertical: 50 }}>
                            <Input
                                placeholder='FullName...'
                                containerStyle={{ borderWidth: 1, borderColor: "silver", height: 55, borderRadius: 4, marginBottom: 18 }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                inputStyle={{ fontFamily: "Pop400", fontSize: 16, lineHeight: 24, paddingTop: 15 }}
                            />
                            <Input
                                placeholder='Email Address...'
                                containerStyle={{ borderWidth: 1, borderColor: "silver", height: 55, borderRadius: 4, marginBottom: 18 }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                inputStyle={{ fontFamily: "Pop400", fontSize: 16, lineHeight: 24, paddingTop: 15 }}
                            />
                            <Input
                                placeholder='Password...'
                                containerStyle={{ borderWidth: 1, borderColor: "silver", height: 55, borderRadius: 4, marginBottom: 18 }}
                                inputContainerStyle={{ borderBottomWidth: 0 }}
                                inputStyle={{ fontFamily: "Pop400", fontSize: 16, lineHeight: 24, paddingTop: 15 }}
                            />
                            <Button
                                title={'Sign Up'}
                                buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3", marginBottom: 30 }}
                                titleStyle={{ fontFamily: "Pop600", fontSize: 16 }}
                                onPress={() => { navigation.navigate('weightSelect') }}
                            />
                        </View>
                    </Col>
                </Row>
                <Row size={35}>
                    <Col>
                        <View style={{ position: 'relative', borderTopWidth: 1, borderTopColor: "silver", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text
                                style={{
                                    color: "rgba(51, 51, 51, 0.40)",
                                    fontFamily: "Pop400",
                                    fontSize: 14,
                                    marginVertical: 20,
                                    backgroundColor: "white",
                                    position: "absolute",
                                    padding: 10,
                                }}>
                                Or
                            </Text>
                        </View>
                        <View style={{ marginTop: 50 }}>
                            <Button
                                title={'Sign Up with Facebook'}
                                buttonStyle={{ marginBottom: 20, paddingVertical: 15, borderRadius: 6, backgroundColor: "#484FA3" }}
                                titleStyle={{ fontFamily: "Pop600" }}
                            />
                            <Button
                                title={'Sign Up with Google'}
                                type="outline"
                                buttonStyle={{ paddingVertical: 15, borderRadius: 6, borderColor: "#484FA3" }}
                                titleStyle={{ fontFamily: "Pop600", color: "#484FA3" }}
                            />
                        </View>
                    </Col>
                </Row>
                <Row size={10} style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 14, fontFamily: "Pop400", color: "#D6D6D6" }}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={{ fontSize: 14, fontFamily: "Pop500", color: "#484FA3" }}>Log In</Text>
                    </TouchableOpacity>
                </Row>
            </Grid>
        </SafeAreaView>
    )
}
