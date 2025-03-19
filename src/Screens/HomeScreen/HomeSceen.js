import React from 'react';
import {View, Text, Button} from 'react-native';
import HomeStyle from './HomeStyle';


const HomeScreen = ({navigation}) => {
  return (
    <View style={HomeStyle.container}>

      <View style={HomeStyle.header}>
        <View style={HomeStyle.Profile}>
          
        </View>
        <View style={HomeStyle.Options}>

        </View>
      </View>

    </View>
  );
};

export default HomeScreen;
