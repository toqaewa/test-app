import MainScreen from "./screens/MainScreen";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // загрузка шрифта
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Jura-Bold': require('./assets/fonts/Jura/Jura-Bold.ttf'),
          'Jura-Light': require('./assets/fonts/Jura/Jura-Light.ttf'),
          'Jura-Medium': require('./assets/fonts/Jura/Jura-Medium.ttf'),
          'Jura-Regular': require('./assets/fonts/Jura/Jura-Regular.ttf'),
          'Jura-SemiBold': require('./assets/fonts/Jura/Jura-SemiBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <MainScreen onLayout={onLayoutRootView} />;
}