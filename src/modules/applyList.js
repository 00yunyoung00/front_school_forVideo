import { createAction, handleActions } from 'redux-actions';

const SET_PAGE='applyList/SET_PAGE';
const SET_TOKEN=('applyList/SET_TOKEN');
const NEXT_PAGE=('applyList/NEXT_PAGE');
const PREV_PAGE=('applyList/PREV_PAGE');

export const setToken = createAction(SET_TOKEN);
export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);
export const setPage=createAction(SET_PAGE);

const exampleApplies=[];
for(var i=0; i<13; i++){
    exampleApplies.push({'applyId':i, 'scholarshipName':'aa', 'completed':'true'});
}

const initialState={
    applies:exampleApplies,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
}

const applies = handleActions(
    {
        [SET_TOKEN]:(state,{ payload:token })=>({
            ...state,
            token,
        }),
        [SET_PAGE]:(state)=>({
            ...state,
            lastPage: parseInt((state.applies.length)/10)+1,
            total:parseInt(state.applies.length)+1,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
    },
    initialState,
);

export default applies;