import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020b1c",
    alignItems: "center",
  },

  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
    paddingHorizontal: 15,
  },

  Profile: {
    height: 50,
    width: 50,
    padding: 5,
    borderRadius: 25,
  },

  Options: {
    height: 40,
    width: 40,
    padding: 10,
  },

  chat: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 15,
  },

  chatText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },

  chatInput: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  OurServicesContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 15,
  },

  OurServicesText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 5,
  },

  OurServicesBox: {
    height: 130,
    width: 110,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  BoxImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 5,
  },

  BoxText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },

  RecentDocContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 15,
  },

  RecentDocText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },

  RecentDocBox: {
    height: 120,
    width: 100,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default HomeStyle;
