import { configureStore } from '@reduxjs/toolkit'
import DrawerReducer from './slices/drawerSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    drawer: DrawerReducer,
    theme: themeReducer
  }
})
