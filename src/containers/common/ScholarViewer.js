import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { setScholar } from '../../modules/scholarDetail';
import { setOriginal } from '../../modules/school/scholarship';
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
    console.log(scholarList)


    useEffect(()=>{
        console.log(scholarList)
        console.log(scholarId)
        const tempScholar=scholarList[scholarId.id-1];
        console.log(tempScholar);
        dispatch(setScholar(tempScholar));
    }, [dispatch, scholarId, scholarList]);

    console.log(scholar);

    const onRemove = async() => {
        try{
            await removeScholarship(scholarId);
            history.push('/scholarships');
        }catch(e){
            console.log(e)
        }
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