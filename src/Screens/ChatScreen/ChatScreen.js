import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import ChatStyle from "./ChatStyle";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: "1", type: "text", text: "Hello! How can I assist you today?", sender: "bot" },
    { id: "2", type: "text", text: "I need some information about family law.", sender: "user" },
    { id: "3", type: "text", text: "Sure! Family law covers divorce, child custody, and more.", sender: "bot" },
    { id: "4", type: "text", text: "Can you help with child custody cases?", sender: "user" },
    { id: "5", type: "text", text: "Yes, we can guide you through the legal process.", sender: "bot" },
    { id: "6", type: "text", text: "Do you have any resources I can read?", sender: "user" },
    { id: "7", type: "text", text: "Here’s a guide on child custody laws.", sender: "bot" },
    { id: "8", type: "document", fileName: "Child_Custody_Guide.pdf", sender: "bot" },
    { id: "9", type: "text", text: "Thank you! Can I schedule a consultation?", sender: "user" },
    { id: "10", type: "text", text: "Of course! Please provide your contact details.", sender: "bot" },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), type: "text", text: inputText, sender: "user" }]);
      setInputText("");
    }
  };

  const sendImage = () => {
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        type: "image",
        image: "https://via.placeholder.com/150",
        sender: "user",
      },
    ]);
  };

  const sendDocument = () => {
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        type: "document",
        fileName: "Legal_Document.pdf",
        sender: "user",
      },
    ]);
  };

  return (
    <View style={ChatStyle.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              ChatStyle.messageBubble,
              item.sender === "user" ? ChatStyle.userMessage : ChatStyle.botMessage,
            ]}
          >
            {item.type === "text" ? (
              <Text style={ChatStyle.messageText}>{item.text}</Text>
            ) : item.type === "image" ? (
              <Image source={{ uri: item.image }} style={ChatStyle.image} />
            ) : item.type === "document" ? (
              <TouchableOpacity style={ChatStyle.documentBubble}>
                <Text style={ChatStyle.documentText}>📄 {item.fileName}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      />

      <View style={ChatStyle.inputContainer}>
        <TouchableOpacity style={ChatStyle.iconButton} onPress={sendImage}>
          <Text style={ChatStyle.iconText}>📷</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ChatStyle.iconButton} onPress={sendDocument}>
          <Text style={ChatStyle.iconText}>📄</Text>
        </TouchableOpacity>

        <TextInput
          style={ChatStyle.input}
          placeholder="Type a message..."
          placeholderTextColor="#ccc"
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity style={ChatStyle.sendButton} onPress={sendMessage}>
          <Text style={ChatStyle.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
