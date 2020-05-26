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

const exampleStudents=[
    {"#":1,"name":"김금별","studentId":1401110,"schoolName":"이화여자대학교","completeSemester":7,"priorGrade":3.4,"tution":400,"college":"인문과학대학","studentMajor":"철학과"},
    {"#":2,"name":"손민수","studentId":1734212,"schoolName":"이화여자대학교","completeSemester":4,"priorGrade":3.9,"tution":400,"college":"경영대학","studentMajor":"경영학과"},
    {"#":3,"name":"위하나","studentId":1993281,"schoolName":"이화여자대학교","completeSemester":4,"priorGrade":4,"tution":300,"college":"사범대학","studentMajor":"교육공학과"},
    {"#":4,"name":"공지현","studentId":1502235,"schoolName":"이화여자대학교","completeSemester":4,"priorGrade":3.4,"tution":450,"college":"간호대학","studentMajor":"간호학과"},
    {"#":5,"name":"윤우주","studentId":1672202,"schoolName":"이화여자대학교","completeSemester":7,"priorGrade":3.1,"tution":450,"college":"인문과학대학","studentMajor":"불어불문과"},
    {"#":6,"name":"박민주","studentId":1802013,"schoolName":"이화여자대학교","completeSemester":3,"priorGrade":3.6,"tution":450,"college":"조형예술대학","studentMajor":"패션디자인과"},
    {"#":7,"name":"최한빛","studentId":1708051,"schoolName":"이화여자대학교","completeSemester":1,"priorGrade":3.5,"tution":450,"college":"경영대학","studentMajor":"경영학과"},
    {"#":8,"name":"이여라","studentId":1513111,"schoolName":"이화여자대학교","completeSemester":5,"priorGrade":3.1,"tution":800,"college":"의과대학","studentMajor":"의예과"},
    {"#":9,"name":"신요나","studentId":1932078,"schoolName":"이화여자대학교","completeSemester":8,"priorGrade":4.1,"tution":450,"college":"경영대학","studentMajor":"경영학과"},
    {"#":10,"name":"김민지","studentId":1514358,"schoolName":"이화여자대학교","completeSemester":5,"priorGrade":4.2,"tution":450,"college":"경영대학","studentMajor":"경영학과"},
    {"#":11,"name":"백석희","studentId":1632432,"schoolName":"이화여자대학교","completeSemester":5,"priorGrade":2.6,"tution":500,"college":"엘텍공과대학","studentMajor":"환경공학과"},
    {"#":12,"name":"유영","studentId":1645923,"schoolName":"이화여자대학교","completeSemester":1,"priorGrade":2.8,"tution":550,"college":"엘텍공과대학","studentMajor":"건축학과"},
    {"#":13,"name":"문정빈","studentId":1645293,"schoolName":"이화여자대학교","completeSemester":4,"priorGrade":4.3,"tution":500,"college":"엘텍공과대학","studentMajor":"컴퓨터공학과"},
    {"#":14,"name":"윤상희","studentId":1482392,"schoolName":"이화여자대학교","completeSemester":1,"priorGrade":3.4,"tution":500,"college":"엘텍공과대학","studentMajor":"사이버보안"},
    {"#":15,"name":"고사리","studentId":1415302,"schoolName":"이화여자대학교","completeSemester":2,"priorGrade":2.2,"tution":500,"college":"엘텍공과대학","studentMajor":"전자전기공학과"},
    {"#":16,"name":"윤희영","studentId":1724050,"schoolName":"이화여자대학교","completeSemester":3,"priorGrade":3.6,"tution":300,"college":"신산업융합대학","studentMajor":"국제사무학과"},
    {"#":17,"name":"홍미희","studentId":1514103,"schoolName":"이화여자대학교","completeSemester":4,"priorGrade":4.2,"tution":300,"college":"신산업융합대학","studentMajor":"식품영양학과"},
    {"#":18,"name":"한정란","studentId":1605184,"schoolName":"이화여자대학교","completeSemester":4,"priorGrade":3.5,"tution":300,"college":"신산업융합대학","studentMajor":"국제사무학과"},
    {"#":19,"name":"박와사","studentId":1501033,"schoolName":"이화여자대학교","completeSemester":6,"priorGrade":2.1,"tution":600,"college":"약학대학","studentMajor":"약학과"},
    {"#":20,"name":"김쿠키","studentId":1715132,"schoolName":"이화여자대학교","completeSemester":8,"priorGrade":3,"tution":300,"college":"자연과학대학","studentMajor":"수학과"},
];

for(var i=0; i<exampleStudents.length;i++){
    exampleStudents[i].state='미선발';
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