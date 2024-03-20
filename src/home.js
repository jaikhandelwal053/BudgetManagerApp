import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { storeItem, deleteItem } from '../Redux/actions' 
import { useFocusEffect } from "@react-navigation/native"

function Home({ navigation }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.addItemsReducer.allNotes)

    useFocusEffect(
        React.useCallback(() => {
            storageData() 
        }, [])
    );

    const storageData = async () => {
        try {
            const response = await AsyncStorage.getItem("notesData")
            let newData = JSON.parse(response);
            if (newData !== null) {
                dispatch(storeItem(newData))
            }
        } catch (error) {
            console.log("show error from async storage", error)
        }
    }

    const handleOnPress = () => {
        navigation.navigate('Create')
    }

// delete btn code

    // const handleDelete = (itemId) => {
    //     Alert.alert(
    //         "Delete Item",
    //         "Are you sure you want to delete this item?",
    //         [
    //             {
    //                 text: "Cancel",
    //                 style: "cancel",
    //             },
    //             {
    //                 text: "Delete",
    //                 onPress: () => {
    //                     // Dispatch the action to delete the item
    //                     dispatch(deleteItem(itemId));
    //                     console.log("item id for delete in home screen :", itemId)
    //                 },
    //             },
    //         ],
    //         { cancelable: true }
    //     );
    // }

    const renderItem = ({ item }) => (
        // <TouchableOpacity onPress={() => navigation.navigate('Edit', { itemId: item.id })}>
            <View style={styles.item_container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Planned amount : {item.plannedAmount}</Text>
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>Actual amount : {item.actualAmount}</Text>
                {/* <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDelete(item.id)}
                >
                    <Text style={{ color: 'red' }}>Delete</Text>
                </TouchableOpacity> */}
            </View>
        // </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {data && data.length === 0 ? (
                <Text style={styles.emptyMessage}>No items to display</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
                <Icon name='plus' size={40} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 2,
    },
    emptyMessage: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 50,
    },
    button: {
        position: 'absolute',
        top: "85%",
        left: "75%",
        backgroundColor: 'green',
        borderRadius: 20,
        padding: 10
    },
    item_container: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: "lightgray",
        marginHorizontal: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    deleteButton: {
        marginTop: 5,
        alignSelf: 'flex-end',
    }
})

export default Home