import React from "react";

import { View, Text, StyleSheet } from "react-native";

import color from '../constants/colors'

const Number = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 8,
        padding: 8,
        borderColor: color.secondary,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    number: {
        fontSize: 22,
        color: color.primary
    }
});

export default Number;
