import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from "react-native";

const Loggin = () => {
    return(
        <View style={styles.container}>
            <View style={styles.hello}>
            <Text style={styles.friend}>Hello, friend!</Text>
            </View>
            <View style={styles.information1}>
            <Text style={styles.nam}>Name</Text>
            </View>
            <View style={styles.information2}>
            <Text style={styles.ema}>Email</Text>
            </View>
            <View style={styles.information3}>
            <Text style={styles.pass}>Password</Text>
            </View>
            <View style={styles.text}>
            <Text style={styles.term}>I've read and aggre to Terms and Conditions </Text>
            </View>
            <View style={styles.create}>
            <Text style={styles.cre}>CREATE ACCOUNT</Text>
            </View>
            <View style ={styles.sign}>
            <Text style={styles.sig}>Already have an account? Sign up</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        paddingLeft: 10,
        paddingRight: 10
    },
    hello: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nam: {
        marginTop: 15,
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
    },
    ema: {
        marginTop: 15,
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
    },
    pass: {
        marginTop: 15,
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
    },
    term:{
        marginTop: 1,
        color: 'blue',
        fontSize: 10
    },
    cre:{
        marginTop: 15,
        color: 'blue'
    },
    sig:{
        marginTop: 15,
        color: 'blue'
    },
    friend:{
        fontSize: 28,
        fontWeight: 'bold'
    },
    information1: {
        borderRadius: 12,
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: 45,
        marginRight: 45,
        paddingLeft: 15,
        paddingBottom: 8,
        marginTop: 15,
    },
    information2: {
        borderRadius: 12,
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: 45,
        marginRight: 45,
        paddingLeft: 15,
        paddingBottom: 8,
        marginTop: 15,
    },
    information3: {
        borderRadius: 12,
        backgroundColor: 'gray',
        justifyContent: 'center',
        marginLeft: 45,
        marginRight: 45,
        paddingLeft: 15,
        paddingBottom: 8,
        marginTop: 15,
    },
    text:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    create: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        marginLeft: 75,
        marginRight: 75,
        paddingBottom: 8,
        marginTop: 10,
    },
    sign: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Loggin;