import React from 'react';
import {View, Text , Button} from 'react-native';
import SettingsStyle from './SettingsStyle';

const SettingsScreen = ({navigation}) =>{
    return(
        <View style={SettingsStyle.container}>
            <Text>SettingsScreen</Text>

            <Button
                    title="Go to Something"
                    onPress={() => navigation.navigate('Something')}
                  /> 
        </View>
    )
};

export default SettingsScreen;