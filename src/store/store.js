import React, {createContext, useReducer} from 'react';

const initialState = {
    value: [
        {
            "type": "hero",
            "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc"
        },
        {
            "type": "image-text",
            "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
            "text": "Sunset from the sky......",
            "title": "Airplane"
        },
        {
            "type": "image-text",
            "imageURI": "https://images.unsplash.com/photo-1579963333765-b4129b3250fc",
            "text": "Sunset from the sky......",
            "title": "Airplane2 reversed",
            "leftToRight": false
        },
        {
            "type": "data",
            "url": "https://api.publicapis.org/entries",
        }
    ],
    error: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'UPDATE':
                return { ...state, value: action.payload, error: false};
            case 'SET_ERROR':
                return {...state, error: true};
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
