import React from 'react'
import 'css/spinner.css';
import spinner from 'spinner/spinner.gif';

const Spinner = () => {
  return (
    <>
    <div className='background'>
    <h4 className='text'>잠시만 ㅎ</h4>
    <img src={spinner} alt="로딩중" width="10%"/>
    </div>
    </>
  )
}

export default Spinner;