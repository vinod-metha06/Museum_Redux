import { configureStore } from "@reduxjs/toolkit";
import { MuseumInfoReducer } from "../reducer/MuseuInfoReducer";
import { MuseumReducer } from "../reducer/MuseumReducers";


export const store=configureStore({
    reducer:{
        MuseumReducer:MuseumReducer,
        MuseumInfoReducer:MuseumInfoReducer
    }
})