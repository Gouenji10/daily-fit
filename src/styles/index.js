import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "white",
        flex: 1
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-start"
    },
    logoStyle: {
        width: "100%",
        height: 40,
        objectFit: "contain"
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "silver",
        height: 55,
        borderRadius: 4,
        marginBottom: 18
    },
    inputStyle: {
        fontFamily: "Pop400",
        fontSize: 16,
        lineHeight: 24,
        paddingTop: 15
    },
    coloredBtn: {
        marginBottom: 20,
        paddingVertical: 15,
        borderRadius: 6,
        backgroundColor: "#484FA3",
    },
    outlineBtn: {
        paddingVertical: 15,
        borderRadius: 6,
        borderColor: "#484FA3"
    },
    forgotHeading: {
        fontFamily: "Pop600",
        fontSize: 24,
        color: "#303030",
        textAlign: "center"
    },
    forgotSubText: {
        fontFamily: "Pop400",
        fontSize: 16,
        color: "#838383",
        textAlign: "center",
        lineHeight: 24
    },
    activityCol: {
        width: "32%",
        marginBottom: 10
    },
    activityItem: {
        backgroundColor: "#F4F4F7",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 6,
        borderWidth: 2,
    },
    activityItemImage: {
        width: 24,
        height: 24,
        objectFit: "contain",
        marginBottom: 10
    },
    activityItemText: {
        color: "#ACACAC",
        fontFamily: "Pop500",
        fontSize: 14
    },
    goalItem: {
        padding: 20,
        marginBottom: 10,
        borderRadius: 6,
        borderWidth: 2
    },
    goalItemImageWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    goalItemTitle: {
        color: "#303030",
        fontSize: 20,
        fontFamily: "Pop500",
        paddingLeft: 10
    },
    goalItemSubTitle: {
        paddingTop: 8,
        color: "#8C8C8C",
        fontSize: 16,
        fontFamily: "Pop400"
    },
    profileUserTitle: {
        fontFamily: "Pop600",
        fontSize: 20,
        color: "#303030",
        textAlign: "center",
    },
    profileUserSubTitle: {
        color: "#8C8C8C",
        fontSize: 14,
        fontFamily: "Pop400",
        letterSpacing: -0.14
    },
    profileItemTitle: {
        color: "#303030",
        fontFamily: "Pop500",
        fontSize: 18,
        letterSpacing: -0.16
    },
    profileItemSubTitle: {
        fontFamily: "Pop400",
        color: "#8C8C8C",
        letterSpacing: -0.14
    },


}) 