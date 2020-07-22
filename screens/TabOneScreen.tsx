import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useToast } from '../hooks/useToast';
import { ToastType } from '../components/ToastProvider';

export default function TabOneScreen() {
  const { showToast } = useToast();

  return (
    <View style={styles.container}>
      <EditScreenInfo />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => showToast(ToastType.Info, 'Info toast')}
        style={styles.link}>
        <Text style={[styles.linkText, styles.info]}>Show info toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => showToast(ToastType.Error, 'Error toast')}
        style={styles.link}>
        <Text style={[styles.linkText, styles.info]}>Show error toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => showToast(ToastType.Success, 'Success toast')}
        style={styles.link}>
        <Text style={[styles.linkText, styles.info]}>Show success toast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link: {
    marginVertical: 20,
  },
  linkText: {
    fontSize: 16,
  },
  info: {
    color: '#2f95dc',
  }
});
