/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, WebView } from "react-native";

export default class TextEditor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={styles.webviewContainer}>
          <WebView
            source={{ uri: "https://www.google.com" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  webviewContainer: {
    flex: 10,
    marginTop: 20,
    width: '100%'
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("TextEditor", () => TextEditor);
