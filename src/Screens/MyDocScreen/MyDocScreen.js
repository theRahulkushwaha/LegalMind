import React from 'react';
import {View, Text , Button} from 'react-native';
import MyDocsStyle from './MyDocStyle';

const MyDocScreen = ({navigation}) =>{
    return(
        <View style={MyDocsStyle.container}>
            <Text> MyDocScreen</Text>

            <Button
                    title="Go to Something"
                    onPress={() => navigation.navigate('Something')}
                  /> 
        </View>
    )
};

export default MyDocScreen;