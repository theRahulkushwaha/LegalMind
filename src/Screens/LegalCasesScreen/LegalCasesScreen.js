import React from 'react';
import {View, Text,  Button} from 'react-native';
import ChatStyle from './LegalCasesStyle';

const LegalCasesScreen = ({navigation}) =>{
    return(
        <View>
            <Text>Legal Cases Screen</Text>

            <Button
                    title="Go to Something"
                    onPress={() => navigation.navigate('Something')}
                  /> 
        </View>
    )
};

export default LegalCasesScreen ;