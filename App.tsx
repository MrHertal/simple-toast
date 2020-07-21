import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from "./components/Toast";
import { ToastProvider } from "./components/ToastProvider";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ToastProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <Toast />
        </ToastProvider>
      </SafeAreaProvider>
    );
  }
}
