import React from 'react';
import {View, Text , Button} from 'react-native';
import ChatStyle from './SettingsStyle';

const SettingsScreen = ({navigation}) =>{
    return(
        <View>
            <Text>SettingsScreen</Text>

            <Button
                    title="Go to Something"
                    onPress={() => navigation.navigate('Something')}
                  /> 
        </View>
    )
};

export default SettingsScreen;