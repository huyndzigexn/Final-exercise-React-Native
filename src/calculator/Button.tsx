import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type CatProps = {
  value: string;
  styles: any;
  press: any;
};
export default function Button(props: CatProps) {
  return (
    <TouchableOpacity style={[props.styles]} onPress={props.press}>
      <Text style={styles.btnText}>{props.value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: '#f2f0e9',
    fontSize: 40,
    fontWeight: '300',
  },
});
