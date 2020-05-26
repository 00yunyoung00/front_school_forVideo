import { createAction, handleActions } from 'redux-actions';

const SET_ID=('selection/SET_ID');
const SET_TOKEN=('selection/SET_TOKEN');
const STUDENT_STATE_CHANGE=('selection/STUDENT_STATE_CHANGE');
const NEXT_PAGE=('selection/NEXT_PAGE');
const PREV_PAGE=('selection/PREV_PAGE');
const SET_PAGE='selection/SET_PAGE';
const SAVE_SELECTION = 'selection/SAVE_SELECTION'

export const setToken = createAction(SET_TOKEN);
export const setScholarId = createAction(SET_ID, ScholarId=>ScholarId);
export const setPage = createAction(SET_PAGE);
export const studentStateChange = createAction(STUDENT_STATE_CHANGE, ({students, token})=>({students, token}));

export const nextPage = createAction(NEXT_PAGE);
export const prevPage = createAction(PREV_PAGE);

export const saveSelection = createAction(SAVE_SELECTION);

const exampleStudents=[];
for(var i=0; i<35; i++){
    exampleStudents.push({'studentId':i, 'name':'김땡떙', 'state':'미선발'},);
}


const initialState={
    ScholarId:'',
    students:exampleStudents,
    error:null,
    lastPage:1,
    tempPage:1,
    total:1,
    student:null,
    scholarstate:null,
    token:null,
}

const students = handleActions(
    {
        [SET_ID]:(state, { payload:ScholarId })=>({
            ...state,
            ScholarId,
        }),
        [SET_PAGE]:(state)=>({
            ...state,
            lastPage: parseInt((state.students.length)/10)+1,
            total:parseInt(state.students.length)+1,
        }),
        [SET_TOKEN]:(state,{ payload:token })=>({
            ...state,
            token,
        }),
        [NEXT_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage+1,
        }),
        [PREV_PAGE]:(state)=>({
            ...state,
            tempPage:state.tempPage-1,
        }),
        [STUDENT_STATE_CHANGE]:(state, { payload:students })=>({
            ...state,
            students,
        }),
        [SAVE_SELECTION]:(state, { payload: students })=>({
            ...state,
            students
        }),

    },
    initialState,
);

export default students;