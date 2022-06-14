/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SummaryScreen from './src/containers/Summary';
import CreateWeekList from './src/containers/CreateWeekList';
import RendicionesScreen from './src/containers/Rendiciones';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { persistor } from './src/store';
import store from './src/store';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@native-base/icons'
import type { Node } from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={'Summary'} screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          color: '#ffff',
        },
        tabBarItemStyle: {
          backgroundColor: '#155e75',
        }
      }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return (<Icon as={MaterialCommunityIcons} color={color ? color : 'amber.100'} name="clipboard-list" size={size} />)
            }, unmountOnBlur: true
          }}
          name="Sumario" component={SummaryScreen} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return (<Icon as={MaterialIcons} name="bar-chart" color={color} size={size} />)
            },unmountOnBlur: true
          }}
          name="Rendiciones" component={RendicionesScreen} />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => {
              return (<Icon as={AntDesign} name="edit" color={color} size={size} />)
            },unmountOnBlur: true
          }}
          name="Compras" component={CreateWeekList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <NativeBaseProvider>
          <MyTabs />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
