import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth from './auth';
import loading from './loading'
import register from './register'
import notice, { noticeSaga } from './notice';
import notices, { noticesSaga } from './noticeList';
import applies from './applyList';
import applyDetail, { applyDetailSaga } from './applyDetail';
import write, { writeSaga } from './write';
import scholars from './scholarList';
import scholarDetail from './scholarDetail';
import Scholarship from './school/scholarship';
import students from './school/selection';
import search from './search';

const rootReducer = combineReducers({
    auth,
    loading,
    register,
    notice,
    notices,
    applies,
    applyDetail,
    write,
    scholars,
    scholarDetail,
    Scholarship,
    students,
    search,
});

export function* rootSaga(){
    yield all([ writeSaga(), noticeSaga(), noticesSaga(), applyDetailSaga(), ]);
}

export default rootReducer;