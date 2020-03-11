import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WithNew from '../Hoc/WithNewComponent';

const WelcomeFunc = props => {
  console.log('Welcome Function Props : ', props);
  return (
    <View>
      <Text>Welcome TO Function component {props.name}</Text>
    </View>
  );
};
export default WithNew(WelcomeFunc);
