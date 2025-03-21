import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import MyDocsStyle from "./MyDocStyle";

const MyDocScreen = ({ navigation }) => {
  const [documents, setDocuments] = useState([
    { id: "1", name: "Legal_Agreement.pdf" },
    { id: "2", name: "Court_Order.pdf" },
    { id: "3", name: "Property_Contract.docx" },
  ]);

  return (
    <View style={MyDocsStyle.container}>
      <View style={MyDocsStyle.Border}>
        <FlatList
          data={documents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={MyDocsStyle.docItem}>
              <Text style={MyDocsStyle.docText}>📄 {item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={MyDocsStyle.buttonContainer}>
        <TouchableOpacity style={MyDocsStyle.button}>
          <Text style={MyDocsStyle.buttonText}>📤 Upload Document</Text>
        </TouchableOpacity>

        <TouchableOpacity style={MyDocsStyle.button}>
          <Text style={MyDocsStyle.buttonText}>📁 View Documents</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyDocScreen;
