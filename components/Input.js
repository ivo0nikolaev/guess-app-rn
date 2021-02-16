import React from 'react';
import {TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        height: 30,
        width: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }
})

export default Input;