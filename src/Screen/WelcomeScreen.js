import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WelcomeFunc from '../component/WelcomeFunc';
import ImagesFunc from '../component/ImagesFunc';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeFunc name={'Sunil'} type={'Text'} />
        <ImagesFunc
          type={'Pic'}
          size={20}
          path={'https://www.w3schools.com/images/picture.jpg'}
        />
      </View>
    );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
