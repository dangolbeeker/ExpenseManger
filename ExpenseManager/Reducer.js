import { Navigator } from './navigation/Navigator'
import { NavigationActions } from 'react-navigation'

const initialAction = { type: NavigationActions.Init }
const initialState = { 
    expenses:[],
    isLoading: true
};


export default (state = initialState, action) => {
    return { ...state }
    
}