import { StatusBar, StyleSheet } from "react-native";


const LightMode = StyleSheet.create({
    containter: {
        marginTop: StatusBar.currentHeight + 5,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "flex-start",
        marginLeft: 20
    },
    switch: {
        alignSelf: "flex-start",
    },
    header: {
        fontWeight: 'bold',
        fontSize: 46,
        textAlign: 'center',
        color: '#18e780'
    },
    text: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 28,
        marginBottom: 10,
        color: '#e25412'
    },
    input: {
        height: 40,
        borderWidth: 3,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
        borderColor: '#18e780'
    },
    result: {
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: '#18e780'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#e25412',
        borderColor: '#ffffff'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 28,
        color:'#ffffff'
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 15,
        color:'#18e780'
    },
    numeric: {
        marginLeft: 15
    }
});


const DarkMode = StyleSheet.create({
    containter: {
      marginTop: StatusBar.currentHeight + 5,
      flex: 1,
      backgroundColor: '#3b3b3b',
      alignItems: 'stretch',
      justifyContent: 'space-around'
    },
    switchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: "flex-start",
      marginLeft: 20
    },
    switch: {
      alignSelf: "flex-start",
    },
    header: {
      fontWeight: 'bold',
      fontSize: 46,
      textAlign: 'center',
      color: '#18e780'
    },
    text: {
      fontWeight: 'bold',
      padding: 10,
      fontSize: 28,
      marginBottom: 10,
      color: '#e25412'
    },
    input: {
      height: 40,
      borderWidth: 3,
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 10,
      fontSize: 20,
      paddingLeft: 10,
      fontWeight: 'bold',
      borderColor: '#18e780'
    },
    result: {
      fontSize: 38,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20,
      color: '#18e780'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: '#e25412',
      borderColor: '#ffffff'
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 28,
      color: '#ffffff'
    },
    radio: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      marginTop: 15,
      color: '#18e780'
    },
    numeric: {
      marginLeft: 15
    }

});


export {LightMode, DarkMode};