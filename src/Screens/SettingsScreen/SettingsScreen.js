import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import SettingsStyle from './SettingsStyle';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = auth().currentUser;
        setUser(currentUser);
    }, []);

    const handleLogout = async () => {
        try {
            await auth().signOut();
            Alert.alert('Logged Out', 'You have been logged out successfully.');
            navigation.replace('Login'); // Ensure 'Login' is in your navigation stack
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={SettingsStyle.container}>
            {/* Profile Section */}
            <Text style={SettingsStyle.title}>Profile</Text>
            {/* <Image 
                source={user?.photoURL ? { uri: user.photoURL } : require('../../assets/profile.png')} 
                style={SettingsStyle.profileImage} 
            /> */}
            <Text style={SettingsStyle.username}>{user?.displayName || 'AI Legal Advisor'}</Text>
            <Text style={SettingsStyle.email}>{user?.email || '--'}</Text>

            {/* Image Box - You can add images here later */}
            <View style={SettingsStyle.imageBox}>
                <Text style={SettingsStyle.imageBoxText}>Add Images Here</Text>
            </View>

            {/* Settings Options */}
            <TouchableOpacity style={SettingsStyle.option} onPress={() => navigation.navigate('Language')}>
                <Text style={SettingsStyle.optionText}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity style={SettingsStyle.option} onPress={() => navigation.navigate('ReportProblem')}>
                <Text style={SettingsStyle.optionText}>Report Problem</Text>
            </TouchableOpacity>

            {/* Logout Button */}
            <TouchableOpacity style={SettingsStyle.logoutButton} onPress={handleLogout}>
                <Text style={SettingsStyle.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
