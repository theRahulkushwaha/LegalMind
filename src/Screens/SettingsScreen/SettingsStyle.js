import { StyleSheet } from "react-native";

const SettingsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020b1c",
    alignItems: "center",
    paddingTop: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#1a73e8",
    marginBottom: 10,
  },

  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },

  email: {
    fontSize: 14,
    color: "#a0a0a0",
    marginBottom: 20,
  },

  option: {
    width: "90%",
    backgroundColor: "#1c2a3a",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  optionText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },

  logoutButton: {
    width: "90%",
    backgroundColor: "#b22222",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#ff0000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  logoutText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsStyle;
