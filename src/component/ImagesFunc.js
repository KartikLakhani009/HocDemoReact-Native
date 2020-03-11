import React from 'react';
import {View, Image} from 'react-native';
import WithNew from '../Hoc/WithNewComponent';

const ImageFunc = props => {
  const {path, size} = props;
  return (
    <Image source={{uri: path}} style={{height: size * 10, width: size * 10}} />
  );
};
export default WithNew(ImageFunc);
