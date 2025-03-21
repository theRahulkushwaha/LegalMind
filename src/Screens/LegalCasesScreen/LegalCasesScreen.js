import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import LegalCasesStyle from "./LegalCasesStyle";


const legalCases = [
  { title: "Family Law", image: require("../../Assets/LeagalCasesIcons/family_18927844.png") },
  { title: "Criminal Law", image: require("../../Assets/LeagalCasesIcons/prisoner_7211462.png") },
  { title: "Real Estate Law", image: require("../../Assets/LeagalCasesIcons/construction_15400054.png") },
  { title: "Employment Law", image: require("../../Assets/LeagalCasesIcons/computer-worker.png") },
  { title: "Business Law", image: require("../../Assets/LeagalCasesIcons/meeting.png") },
  { title: "Injury Law", image: require("../../Assets/LeagalCasesIcons/injury.png") },
  { title: "Immigration Law", image: require("../../Assets/LeagalCasesIcons/icons8-immigration-40.png") },
  { title: "Intellectual Property", image: require("../../Assets/LeagalCasesIcons/intellectual-property.png") },
  { title: "Bankruptcy Law", image: require("../../Assets/LeagalCasesIcons/bank.png") },
  { title: "Healthcare Law", image: require("../../Assets/LeagalCasesIcons/healthcare.png") },
];

const LegalCasesScreen = ({ navigation }) => {
  return (
    <View style={LegalCasesStyle.container}>
      <ScrollView contentContainerStyle={LegalCasesStyle.boxWrap}>
        {legalCases.map((item, index) => (
          <TouchableOpacity key={index} style={LegalCasesStyle.LegalBox}>
            <Image source={item.image} style={LegalCasesStyle.BoxImg} />
            <Text style={LegalCasesStyle.BoxText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LegalCasesScreen;
