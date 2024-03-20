import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../Redux/actions'

const Create = ({navigation}) => {

    const [title, setTitle] = useState('')
    const [plannedAmount, setPlannedAmount] = useState('')
    const [actualAmount, setActualAmount] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(!title || !plannedAmount || !actualAmount){
            Alert.alert("Error", 'Please fill in all details');
            return;
        }
        const timestamp = Date.now();
        const notes = {
            id:timestamp,
            title:title,
            plannedAmount: plannedAmount,
            actualAmount: actualAmount
        }
        dispatch(addItem(notes))

        // console.log("showing notes",notes)
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder='Enter Title'
                    onChangeText={setTitle}
                    value={title}
                    style={styles.TextInput}
                />
                <TextInput
                    placeholder='Planned amount'
                    onChangeText={setPlannedAmount}
                    value={plannedAmount}
                    keyboardType='numeric'
                    style={{ ...styles.TextInput, marginTop: 15, height: 'auto', paddingVertical: 20 }}
                />
                <TextInput
                    placeholder='actual amount'
                    onChangeText={setActualAmount}
                    value={actualAmount}
                    keyboardType='numeric'
                    style={{ ...styles.TextInput, marginTop: 15, height: 'auto', paddingVertical: 20 }}
                />

            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.addBtn} onPress={() => handleSubmit()}>
                    <Text style={{ color: 'white', fontSize: 20, }}>    save    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        // backgroundColor:'skyblue'
    }, 
    TextInput: {
        paddingHorizontal: 20,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        borderRadius: 15,
        fontSize: 18,
        // color: 'gray',
        top: 40,
        position: 'relative',
        // backgroundColor:'white'
        
    },
    addBtn: {
        height: 50,
        width: 'auto',
        padding: 10,
        backgroundColor: 'green',
        // backgroundColor: '#2d8be3',
        borderRadius: 10,
        top:100

    },
    btnContainer:{
        flex:1,
        alignItems:'center',
    }
})