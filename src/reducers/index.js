import { combineReducers} from 'redux';
import usuarioReducer from './usuarioReducer';
import curriculoReducer from './curriculoReducer';

export default combineReducers({
    user: usuarioReducer,
    curr: curriculoReducer
});