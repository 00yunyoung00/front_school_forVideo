import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { setScholar } from '../../modules/scholarDetail';
import { setOriginal } from '../../modules/school/scholarship';
import { addScholar } from '../../modules/scholarList';
import ScholarDetail from '../../components/common/ScholarDetail';
import { removeScholarship } from '../../lib/api/scholar';

const ScholarViewer = ({ match, history })=>{
    const scholarId  = match.params;
    const dispatch = useDispatch();
    const { scholarList, scholar, error, loading, user, token } = useSelector(({ scholars, scholarDetail, loading, auth })=>({
        scholarList:scholars.scholars,
        scholar:scholarDetail.scholar,
        error:scholarDetail.error,
        loading:loading['scholar/READ_SCHOLAR'],
        user:auth.auth,
        token:scholarDetail.token,
    }));


    useEffect(()=>{
        const tempScholar=scholarList[scholarId.id-1];
        dispatch(setScholar(tempScholar));
    }, [dispatch, scholarId, scholarList]);


    const onRemove = () => {
        console.log("in remove")
        for(var i=0; i<scholarList.length; i++){
            if(scholarList[i].scholarId===scholarId.id){
                console.log(scholarList[i])
                scholarList.splice(i,1);
                break;
            }
        }
        dispatch(addScholar(scholarList));
        history.push('/scholarships');

    }

    const onEdit = () =>{
        dispatch(setOriginal(scholar));
        history.push('/scholarships/new');
    }

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ScholarDetail scholar={scholar} loading={loading} error={error} user={user} onRemove={onRemove} onEdit={onEdit}/></div>;
};

export default withRouter(ScholarViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;