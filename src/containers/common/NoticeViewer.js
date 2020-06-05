import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { readNotice, unloadNotice, setToken, setId } from '../../modules/notice';
import { setOriginal } from "../../modules/noticeList";
import Notice from '../../components/common/NoticeDetail';
import { removeNotice } from '../../lib/api/notice';

const NoticeViewer = ({ match, history })=>{
    const noticeId  = match.params.id;
    const dispatch = useDispatch();
    var notice;

    const { notices, id, error, loading, author, token, info, info_update, user } = useSelector(({ notices, notice, loading, write, auth })=>({
        notices:notices.notices,
        //id:notice.id,
        //notice:notice.notice,
        error:notice.error,
        loading:loading['notice/READ_NOTICE'],
        author:notice.author,
        token:notice.token,
        info:notice.info,
        info_update:write.info,
        user:auth.auth.type,
    }));

    for(var i=0; i<notices.length; i++){
        if(notices[i].id===noticeId){
            notice=notices[i];
            break;
        }
    }

    /*
    useEffect(()=>{
        for(var i=0; i<notices.length; i++){
            if(notices[i].id=noticeId){
                notice=notices[i];
                console.log(notices[i]);
                break;
            }
        }
    }, [dispatch, notices, noticeId]);*/
/*
    useEffect(()=>{
        dispatch(setId(noticeId));
    },[dispatch, noticeId]);
*/
    useEffect(()=>{
        if(info.token!=null){
            dispatch(readNotice(info));
            return()=>{
                dispatch(unloadNotice());
            };
        }
        
    }, [dispatch, info]);


    const onRemove = () => {
        for(var i=0; i<notices.length; i++){
            if(notices[i].id===noticeId){
                notices.splice(i,1);
                break;
            }
        }
        history.push('/notices');

    }

    const onEdit = () =>{
        dispatch(setOriginal(noticeId))
        history.push('/notices/write');
    }

    console.log(user);

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><Notice notice={notice} loading={loading} error={error} user={user} onRemove={onRemove} onEdit={onEdit}/></div>;
};

export default withRouter(NoticeViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;