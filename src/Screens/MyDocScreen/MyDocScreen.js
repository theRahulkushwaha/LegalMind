import React from 'react';
import {View, Text , Button} from 'react-native';
import ChatStyle from './MyDocStyle';

const MyDocScreen = ({navigation}) =>{
    return(
        <View>
            <Text> MyDocScreen</Text>

            <Button
                    title="Go to Something"
                    onPress={() => navigation.navigate('Something')}
                  /> 
        </View>
    )
};

export default MyDocScreen;