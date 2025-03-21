import { StyleSheet } from "react-native";

const ChatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020b1c",
    padding: 10,
  },

  messageBubble: {
    padding: 12,
    marginVertical: 5,
    borderRadius: 20,
    maxWidth: "75%",
  },

  userMessage: {
    backgroundColor: "#0078fe",
    alignSelf: "flex-end",
    borderBottomRightRadius: 5,
  },

  botMessage: {
    backgroundColor: "#444",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 5,
  },

  messageText: {
    color: "white",
    fontSize: 14,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  documentBubble: {
    backgroundColor: "#555",
    padding: 10,
    borderRadius: 10,
  },

  documentText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#333",
  },

  iconButton: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 20,
    marginRight: 5,
  },

  iconText: {
    fontSize: 20,
    color: "white",
  },

  input: {
    flex: 1,
    backgroundColor: "#333",
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },

  sendButton: {
    backgroundColor: "#0078fe",
    padding: 12,
    borderRadius: 25,
    marginLeft: 10,
  },

  sendButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default ChatStyle;
