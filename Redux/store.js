import { legacy_createStore as createStore} from 'redux';
import rootReducer from './reducers';

export const configureStore =()=>{
    const store = createStore(
        rootReducer
    )
    return store;
}