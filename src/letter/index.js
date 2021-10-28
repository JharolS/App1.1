import React from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";

const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Glad to see you</Text>
            <Text style={styles.body}>Lorem ipsum dolor sit armet, consectetur adipiscing elit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    body: {
        color: 'white',
        fontSize: 24,
        paddingRight: 15,
        paddingLeft: 25,
        marginTop: 15
    }
})

export default Info;