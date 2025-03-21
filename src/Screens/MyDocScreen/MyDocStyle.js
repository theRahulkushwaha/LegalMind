import { StyleSheet } from "react-native";

const MyDocsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#020b1c",
        alignItems: "center",
        paddingTop: 20,
    },

    Border: {
        borderColor: "white",
        borderWidth: 1,
        height: "80%",
        width: "94%",
        borderRadius: 10,
        padding: 20,
    },

    docItem: {
        backgroundColor: "#1c2a3a",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        height: 50,
    },

    docText: {
        color: "white",
        fontSize: 14,
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
        width: "90%",
    },

    button: {
        backgroundColor: "#1a73e8",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
    },

    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default MyDocsStyle;
