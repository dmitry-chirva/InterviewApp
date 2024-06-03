import React, {createContext, useCallback, useReducer} from 'react';
import { camerasApiService } from '../../api';

const initialState = {
    cameras: [],
    selectedCamera: null,
    isLoading: false,
    error: null,
};

const CamerasContext = createContext(initialState);

const camerasReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CAMERAS':
            return { ...state, cameras: action.payload };
        case 'SET_SELECTED_CAMERA':
            return { ...state, selectedCamera: action.payload };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const CamerasProvider = ({ children }) => {
    const [state, dispatch] = useReducer(camerasReducer, initialState);

    const fetchCameras = useCallback(async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const cameras = await camerasApiService.getCameras();
            dispatch({ type: 'SET_CAMERAS', payload: cameras });

            if (cameras.length > 0) {
                selectCamera(cameras[0]);
            }
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }, []);

    const selectCamera = (camera) => {
        dispatch({ type: 'SET_SELECTED_CAMERA', payload: camera });
    };

    return (
        <CamerasContext.Provider
            value={{
                cameras: state.cameras,
                selectedCamera: state.selectedCamera,
                isLoading: state.isLoading,
                error: state.error,
                fetchCameras,
                selectCamera,
            }}
        >
            {children}
        </CamerasContext.Provider>
    );
};

export default CamerasContext;
