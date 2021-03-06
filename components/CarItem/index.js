import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './style';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type="primary"
        content="custom order"
        onPress={() => {
          console.warn('Custom buttom was pressed');
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing invetory"
        onPress={() => {
          console.warn('Existing buttom was pressed');
        }}
      />
    </View>
  );
};
export default CarItem;
