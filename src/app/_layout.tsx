import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from 'expo-router';
import { useColorScheme, View } from 'react-native';


import { PortalHost } from '@rn-primitives/portal';
import '../../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';

function RootLayoutNav() {

  return (
    <SafeAreaView>
      <View>
        <Slot />
      </View>
    </SafeAreaView>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootLayoutNav />
      <PortalHost />
    </ThemeProvider>
  );
}
