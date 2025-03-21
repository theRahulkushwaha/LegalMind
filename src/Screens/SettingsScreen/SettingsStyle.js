import { StyleSheet } from 'react-native';

const SettingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,

    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    email: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 20,
    },
    imageBox: {
        width: 150,
        height: 150,
        backgroundColor: '#222',
        borderRadius: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        
    },
    imageBoxText: {
        color: '#777',
        fontSize: 16,
    },
    option: {
        width: '90%',
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
    },
    logoutButton: {
        width: '90%',
        backgroundColor: '#111',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
    },
    logoutText: {
        color: 'red',
        fontSize: 16,
    },
});

export default SettingsStyle;
