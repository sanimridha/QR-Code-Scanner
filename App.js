import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class App extends React.Component {
  ifScaned = (e) => {
    Linking.openURL(e.data).catch((err) =>
      Alert.alert('invalid QRCode', e.data),
    );
  };
  render() {
    return (
      <QRCodeScanner
        onRead={this.ifScaned}
        containerStyle={{backgroundColor: '#1D2924'}}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
