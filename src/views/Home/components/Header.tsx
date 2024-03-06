import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// @ts-ignore
import logo from '../../../assets/logo.png';
import {requestHeader} from '../../services/requestDataService.ts';

class Header extends React.Component {
  state = {
    header: {
      welcome: '',
      subtitle: '',
    },
  };
  updateHeader() {
    const headerData = requestHeader();
    this.setState({header: headerData});
  }
  componentDidMount() {
    this.updateHeader();
  }

  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.logoImage} source={logo} />
        <Text style={styles.welcomeText}>{this.state.header.welcome}</Text>
        <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logoImage: {
    width: 70,
    height: 28,
  },
  welcomeText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3',
  },
});

export default Header;
