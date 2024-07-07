import { configureStore } from '@reduxjs/toolkit'
import keepSlice from './slices/keepSlice'
export const store = configureStore({
    reducer: {
        keep: keepSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: ['keep/setKeep'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['payload.payload.component'],
            // Ignore these paths in the state
            ignoredPaths: ['keep.component'],
          },
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch