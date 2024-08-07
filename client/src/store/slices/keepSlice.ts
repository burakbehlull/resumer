import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface KeepSliceTypes {
    contents: any[],
}

const initialState = {
    contents: [],
} as KeepSliceTypes

export const keepSlice = createSlice({
    name: 'keep',
    initialState: initialState,
    reducers: {
        setKeep: (state, action:PayloadAction<any>)=> {
            console.log(1)
            console.log("ACTION. ", action)
            switch(action?.payload?.type){
                case 'ADD_CONTENT':
                    console.log(2)
                    state.contents.push(action.payload)
                    console.log(state.contents)
                    break;
                default:
                    return
            }
        }
    }
})

export const { setKeep } = keepSlice.actions
export default keepSlice.reducer

