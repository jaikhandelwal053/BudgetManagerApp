// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateItem } from '../Redux/actions';

// function EditPage({ route, navigation }) {
//     const { itemId } = route.params;
//     const dispatch = useDispatch();
//     const item = useSelector(state => state.addItemsReducer.allNotes.find(item => item.id === itemId));
//     const [title, setTitle] = useState(item.title);
//     const [plannedAmount, setPlannedAmount] = useState(item.plannedAmount);
//     const [actualAmount, setActualAmount] = useState(item.actualAmount);

//     const handleUpdate = () => {
//         console.log("edit page")
//         const updatedItem = { ...item, title, plannedAmount, actualAmount };
//         dispatch(updateItem(updatedItem));
//         navigation.goBack();
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 value={title}
//                 onChangeText={setTitle}
//                 placeholder="Title"
//             />
//             <TextInput
//                 style={styles.input}
//                 value={plannedAmount.toString()}
//                 onChangeText={text => setPlannedAmount(parseFloat(text))}
//                 placeholder="Planned Amount"
//                 keyboardType="numeric"
//             />
//             <TextInput
//                 style={styles.input}
//                 value={actualAmount.toString()}
//                 onChangeText={text => setActualAmount(parseFloat(text))}
//                 placeholder="Actual Amount"
//                 keyboardType="numeric"
//             />
//             <TouchableOpacity style={styles.button} onPress={handleUpdate}>
//                 <Text style={styles.buttonText}>   Update   </Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default EditPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         top: 50,
//         alignItems: 'center',
//     },
//     input: {
//         fontSize: 20,
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 10,
//         padding: 10,
//         marginBottom: 10,
//         width: '80%',
//     },
//     button: {
//         backgroundColor: 'skyblue',
//         padding: 10,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
// });
