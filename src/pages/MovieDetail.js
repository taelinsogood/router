import React from 'react'
import { useLocation, useParams } from 'react-router';
import {IMG_BASE_URL} from '../components/Movie';

const MovieDetail = () => {
    const {title} = useParams();
    const {state} = useLocation();
  return (
    <div className='page-container'>
        <div style={{display: "flex"}}>
            <img
                style={{width: "300px", height: "450px"}}
                src={IMG_BASE_URL + state.poster_path}
                alt="영화 포스터 이미지"
            ></img>
            <div>
                <div style={{fontSize: "32px"}}>{title}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail