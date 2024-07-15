import React from "react"
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import redux from './redux/index'
import FlashMessage from "react-native-flash-message"
import AuthStack from './routes/authStack'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { moderateScale } from "./assets/css/size"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#048ad1',
    accent: '#fff',
  },
};

const App = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <PaperProvider theme={theme}>
          <AuthStack/>
          <FlashMessage position="top" style={{paddingTop: moderateScale(45)}} />
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App