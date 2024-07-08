import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ title }) => {
    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.btn}>

            </TextInput>
        </View>
    );
};


const styles = StyleSheet.create({
 
 
})

export default AddItem;