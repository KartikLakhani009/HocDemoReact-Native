import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WithNew = Wcomponent => {
  //   const NewComponent = Wcomponent => {
  //     return (
  //       <View>
  //         <Wcomponent />
  //       </View>
  //     );
  //   };
  console.log('With new ', Wcomponent);
  return class extends React.Component {
    render() {
      console.log('With new ', this.props);
      if (this.props.type == 'Text') {
        return (
          <View style={{backgroundColor: 'red', borderWidth: 5}}>
            <Wcomponent />
          </View>
        );
      }
      if (this.props.type == 'Pic') {
        return (
          <View>
            <Wcomponent {...this.props} />
          </View>
        );
      }
    }
  };
};
export default WithNew;
