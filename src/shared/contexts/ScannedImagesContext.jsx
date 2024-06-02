import React, {createContext, useCallback, useReducer} from 'react';
import { eventsApiService } from '../../api';

const initialState = {
    images: [],
    currentImageIndex: 0,
    filter: false,
    isLoading: false,
    error: null,
};

const ScannedImagesContext = createContext(initialState);

const imageReducer = (state, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return { ...state, images: action.payload };
        case 'SET_CURRENT_INDEX':
            return { ...state, currentImageIndex: action.payload };
        case 'TOGGLE_FILTER':
            return { ...state, filter: !state.filter, currentImageIndex: 0 };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const ScannedImagesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(imageReducer, initialState);

    const fetchImages = useCallback(async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const images = await eventsApiService.getEvents();
            dispatch({ type: 'SET_IMAGES', payload: images });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }, []);

    const setCurrentIndex = (index) => {
        dispatch({ type: 'SET_CURRENT_INDEX', payload: index });
    };

    const toggleFilter = () => {
        dispatch({ type: 'TOGGLE_FILTER' });
    };

    return (
        <ScannedImagesContext.Provider
            value={{
                images: state.images ?? [],
                currentImageIndex: state.currentImageIndex,
                filter: state.filter,
                error: state.error,
                fetchImages,
                setCurrentIndex,
                toggleFilter,
            }}
        >
            {children}
        </ScannedImagesContext.Provider>
    );
};

export default ScannedImagesContext;
