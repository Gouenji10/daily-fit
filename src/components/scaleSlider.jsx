import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import RNListSlider from 'react-native-list-slider';


export default function ScaleSlider() {

    const [value, setValue] = useState(0)

    const onValueChanged = (value) => setValue(value);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        }}>
            <View>
                <Text>Value: {value}</Text>
            </View>
            <RNListSlider
                value={value}
                onValueChange={onValueChanged}
                mainContainerStyle={{backgroundColor:"red"}}
            />
        </View>
    );
}