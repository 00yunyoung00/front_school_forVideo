import { createAction, handleActions } from 'redux-actions';

const SET_TOKEN=('scholar/SET_TOKEN');
const UNLOAD_SCHOLAR = 'scholar/UNLOAD_POST';

export const unloadScholar = createAction(UNLOAD_SCHOLAR);

const exampleScholar={
    'scholarshipName':'aa', 
    'foundation':'이화여자대학교',
    'createdDate':'2020-05-16', 
    'maturityDateTime':'2020-05-23', 
    'facevalue':'150', 
    'gradeLimit':'3.5', 
    'majorLimit':null,
}


const initialState = {
    scholar:exampleScholar,
    error:null,
    token:null,
};

const scholarDetail = handleActions(
    {
        [UNLOAD_SCHOLAR]:()=>initialState,
    },
    initialState,
);

export default scholarDetail;