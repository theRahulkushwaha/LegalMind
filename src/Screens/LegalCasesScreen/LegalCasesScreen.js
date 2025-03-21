import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import LegalCasesStyle from './LegalCasesStyle';


// const homeIcon = require('../Assets/Icons/home.png');

const LegalCasesScreen = ({navigation}) => {
  return (
    <View style={LegalCasesStyle.container}>
      <View style={LegalCasesStyle.boxWrap}>
        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
          <Image
            source={require('../../Assets/LeagalCasesIcons/family_18927844.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Family Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/prisoner_7211462.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Criminal Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/construction_15400054.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Real Estate Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/computer-worker.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Employment Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/meeting.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>BUsiness Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/injury.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Injury Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/icons8-immigration-40.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Immigration Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/intellectual-property.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Intellectual Property Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/bank.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Bankruptcy Law</Text>
        </TouchableOpacity>


        <TouchableOpacity style={LegalCasesStyle.LegalBox}>
        <Image
            source={require('../../Assets/LeagalCasesIcons/healthcare.png')}
            style= {LegalCasesStyle.BoxImg}
          />
            <Text style={LegalCasesStyle.BoxText}>Healthcare Law</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};

export default LegalCasesScreen;
