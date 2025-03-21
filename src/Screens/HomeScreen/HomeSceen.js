import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import HomeStyle from "./HomeStyle";

// Legal cases data with images
const legalCases = [
  { title: "Family Law", image: require("../../Assets/LeagalCasesIcons/family_18927844.png") },
  { title: "Criminal Law", image: require("../../Assets/LeagalCasesIcons/prisoner_7211462.png") },
  { title: "Real Estate Law", image: require("../../Assets/LeagalCasesIcons/construction_15400054.png") },
  { title: "Employment Law", image: require("../../Assets/LeagalCasesIcons/computer-worker.png") },
  { title: "Business Law", image: require("../../Assets/LeagalCasesIcons/meeting.png") },
  { title: "Injury Law", image: require("../../Assets/LeagalCasesIcons/injury.png") },
  { title: "Immigration Law", image: require("../../Assets/LeagalCasesIcons/icons8-immigration-40.png") },
  { title: "Intellectual Property Law", image: require("../../Assets/LeagalCasesIcons/intellectual-property.png") },
  { title: "Bankruptcy Law", image: require("../../Assets/LeagalCasesIcons/bank.png") },
  { title: "Healthcare Law", image: require("../../Assets/LeagalCasesIcons/healthcare.png") },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={HomeStyle.container}>
      {/* Header */}
      <View style={HomeStyle.header}>
        <TouchableOpacity style={HomeStyle.Profile}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("../../Assets/Icons/user.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.Options}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              tintColor: "white",
            }}
            source={require("../../Assets/Icons/menu.png")}
          />
        </TouchableOpacity>
      </View>

      {/* Chat Section */}
      <View style={HomeStyle.chat}>
        <Text style={HomeStyle.chatText}>How may I help you?</Text>
        <TextInput
          placeholder="Ask your question"
          style={HomeStyle.chatInput}
        />
      </View>

      {/* Our Services Section */}
      <View style={HomeStyle.OurServicesContainer}>
        <Text style={HomeStyle.OurServicesText}>Our Services</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={HomeStyle.OurServices}
        >
          {legalCases.map((item, index) => (
            <TouchableOpacity key={index} style={HomeStyle.OurServicesBox}>
              <Image source={item.image} style={HomeStyle.BoxImg} />
              <Text style={HomeStyle.BoxText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Recent Documents Section */}
      <View style={HomeStyle.RecentDocContainer}>
        <Text style={HomeStyle.RecentDocText}>Recent Documents</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={HomeStyle.RecentDocBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.RecentDocBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.RecentDocBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.RecentDocBox}></TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
