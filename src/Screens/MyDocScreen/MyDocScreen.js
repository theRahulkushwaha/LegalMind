import React from 'react';
import {View, Text , Button} from 'react-native';
import MyDocsStyle from './MyDocStyle';
import { ScrollView } from 'react-native-gesture-handler';

const MyDocScreen = ({navigation}) =>{
    return(
        <View style={MyDocsStyle.container}>
            
            <View style={MyDocsStyle.Border}>
                
            </View>

            {/* <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={MyDocsStyle.scroll}>
            </ScrollView>
             */}

        </View>
    )
};

export default MyDocScreen;