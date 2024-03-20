import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/home';
import Create from './src/Create';
import { Provider } from 'react-redux';
import { configureStore } from './Redux/store';

const Stack = createStackNavigator();

export default function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
           options={{ 
            title: 'Budget entry listing',
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerStyle: {
              backgroundColor: 'lightgreen', 
            },
  
            }} />
          <Stack.Screen name="Create" component={Create} options={{ 
            title: 'Budget entry',
            headerStyle: {
              backgroundColor: 'lightgreen', 
            },}} />
          {/* <Stack.Screen name="Edit" component={Edit} options={{ 
              title: 'Edit',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: 'lightgreen', 
              },
            }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
