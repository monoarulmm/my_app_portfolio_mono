import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


const mono ='https://www.monoar.xyz'


export default function App() {
  return (
    <View style={styles.container}>
   
      <View style={{ width: '100%' , height: '100%' }}>

      <WebView
      source={{uri: mono}}
      onLoad={() => console.log('Loaded!')}
     />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
