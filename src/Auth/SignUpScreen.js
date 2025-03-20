import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { signUp } from '../Auth/firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      Alert.alert("Success", "Account Created! You can log in now.");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Sign Up Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text onPress={() => navigation.navigate("Login")} style={styles.link}>Already have an account? Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 10, marginVertical: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
  link: { marginTop: 10, color: 'blue' },
});

export default SignUpScreen;
