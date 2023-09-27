import { StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"
import Button from './src/components/atoms/Button/Button'
import { useFonts } from 'expo-font'

function App() {
  const [loaded] = useFonts({
    MulishMedium: require('./assets/fonts/Mulish/static/Mulish-Medium.ttf'),
    MulishBold: require('./assets/fonts/Mulish/static/Mulish-Bold.ttf'),
    MulishRegular: require('./assets/fonts/Mulish/static/Mulish-Regular.ttf'),
    MulishSemiBold: require('./assets/fonts/Mulish/static/Mulish-SemiBold.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
