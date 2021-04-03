import { combineReducers} from 'redux';
import usuarioReducer from './usuarioReducer';
// import curriculoReducer from './curriculoReducer';
import empresaReducer from './empresaReducer';

export default combineReducers({
    user: usuarioReducer,
    // curr: curriculoReducer,
    emp: empresaReducer
});