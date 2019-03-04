/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/es/integration/react";
//import store from './store'
import AppNavigation from "./src/Navigation";
import configureStore from "./store";

const {store} = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       
          <AppNavigation />
        
      </Provider>
    );
  }
}
