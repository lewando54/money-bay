import { View, ImageBackground } from "react-native";
import { useFonts } from 'expo-font'

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => { 
    const [loaded] = useFonts({
      MulishMedium: require('../assets/fonts/Mulish/static/Mulish-Medium.ttf'),
      MulishBold: require('../assets/fonts/Mulish/static/Mulish-Bold.ttf'),
      MulishRegular: require('../assets/fonts/Mulish/static/Mulish-Regular.ttf'),
      MulishSemiBold: require('../assets/fonts/Mulish/static/Mulish-SemiBold.ttf')
    });
  
    if (!loaded) {
      return null;
    }  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ImageBackground style={[{
    flex: 1,
    padding: 10
  }]} source={require('../assets/img/bg-story.png')} resizeMode="cover">
        <Story />
      </ImageBackground>
    </View>
  )},
];
