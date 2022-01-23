import React from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import Navigation from './navigation/StackNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}
export default App;
