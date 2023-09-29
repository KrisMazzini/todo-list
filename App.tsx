/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'

import { Loading } from './src/components/Loading'
import { Home } from './src/screens/Home'

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  return (
    <>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <Loading />}
    </>
  )
}
