import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import HomeStyle from './HomeStyle';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.header}>
        <TouchableOpacity style={HomeStyle.Profile}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={require('../../Assets/Icons/user.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={HomeStyle.Options}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              tintColor: 'white',
            }}
            source={require('../../Assets/Icons/menu.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={HomeStyle.chat}>
        <Text style={HomeStyle.chatText}>How may i help you?</Text>
        <TextInput
          placeholder="Ask you question"
          style={HomeStyle.chatInput}></TextInput>
      </View>

      <View style={HomeStyle.OurServicesContainer}>
        <Text style={HomeStyle.OurServicesText}>Our Services</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={HomeStyle.OurServices}>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
          <TouchableOpacity style={HomeStyle.OurServicesBox}></TouchableOpacity>
        </ScrollView>
      </View>

      <View style={HomeStyle.RecentDocContainer}>
      <Text style={HomeStyle.RecentDocText}>Recent Documents</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={HomeStyle.RecentDoc}>
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
