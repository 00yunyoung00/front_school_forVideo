import { createAction, handleActions } from 'redux-actions';

const NEXT_PAGE=('scholarList/NEXT_PAGE');
const PREV_PAGE=('scholarList/PREV_PAGE');
const ADD_EXAMPLE_SCHOLAR='scholarList/ADD_EXAMPLE_SCHOLAR';
const SET_PAGE='scholarList/SET_PAGE';

export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);
export const setExampleScholar = createAction(ADD_EXAMPLE_SCHOLAR, scholars=>scholars);
export const setPage=createAction(SET_PAGE);


const exampleScholar=[];

for(var i=0; i<45; i++){
    exampleScholar.push({'scholarshipId':i, 'scholarshipName':'example Scholarship', 'state':'possible'},)
}

const initialState={
    scholars:exampleScholar,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    token:null,
}

const scholars = handleActions(
    {
        [SET_PAGE]: (state)=>({
            ...state,
            lastPage: parseInt((state.scholars.length)/10)+1,
            total:parseInt(state.scholars.length)+1,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
        [ADD_EXAMPLE_SCHOLAR]:(state, { payload: scholars })=>({
            ...state,
            scholars
        })
    },
    initialState,
);

export default scholars;