import React from 'react';
import {View, Text, Button} from 'react-native';
import ChatStyle from './ChatStyle';

const ChatScreen = ({navigation}) =>{
    return(
        <View style={ChatStyle.container}>
            <Text>Chat Screen</Text>

            <Button
                    title="Go to Something"
                    onPress={() => navigation.navigate('Something')}
                  /> 
        </View>
    )
};

export default ChatScreen;