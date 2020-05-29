import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth, { authSaga } from './auth';
import loading from './loading'
import register from './register'
import search from './search';
import scholars from './scholarList'
import scholarDetail from './scholarDetail'
import Scholarship, { ScholarSaga } from './addScholar';
import students from './selection';


const rootReducer = combineReducers({
    auth,
    loading,
    register,
    scholars,
    scholarDetail,
    Scholarship,
    search,
    students,
});

export function* rootSaga(){
    yield all([authSaga(), ScholarSaga()]);
}

export default rootReducer;