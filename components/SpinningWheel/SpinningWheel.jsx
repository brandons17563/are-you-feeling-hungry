import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export const SpinningWheel = () => {
    return ( 
    <View style={styles.container}>
        <Text> Spinning Wheel goes here </Text>
        <Button title="Spin!"/>
    </View>)
}