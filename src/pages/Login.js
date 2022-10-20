import React, { useEffect, useState } from 'react'
import 'css/login.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import Spinner from 'spinner/Spinner';


const User = {
    email: 'smhrd@naver.com',
    pw: 'smhrd12@@'
}

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');  //input이라 생각하셈
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);  //초기값 = false, 변하는 값 = true. "개발자 소양"
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [loading, setLoading] = useState(null);
 //==========================================================
    useEffect(() => {  //이해하기
        if (emailValid && pwValid) {  //둘 다 참일 시 false로 disabled를 해제하겠다.
            setNotAllow(false);   
            return;
        }
        setNotAllow(true);   //아닐 시 비활성화
    }, [emailValid, pwValid]); //[] 안에 변화가 일어날 때마다 실행이 된다.
//==========================================================
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        console.log('regex.test(email)',regex.test(email))
            if (regex.test(email)) {   //정규표현식으로 테스트에 email을 넣었을 때 true로 변경
            setEmailValid(true); 
        } else {         
            setEmailValid(false);
        }
    };
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };
    const onClickConfirmButton = () => {
        if (email === User.email && pw === User.pw) {
            //setLoading(true);
            navigate('/');
        } else {
            alert("등록되지 않은 회원입니다.");
        }
    }

    // const sta = setTimeout(function(){
    //     setLoading(false);
    //     //navigate('/');
    // }, 2000)

    return (
        <>
        {loading && <Spinner/>}
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div
                    className="inputWrap"
                >
                    <input
                        className="input"
                        type="text"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>  //valid 하거나 아무런 입력을 하지 않았을 때 안 보이게 하고 싶다!
                                                                //  email이 valid하지 않았을 때 (!emailValid) and email길이가 > 0 일 때.
                     )}                                          
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">
                    비밀번호
                </div>
                <div className="inputWrap">
                    <input
                        className="input"
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={pw}
                        onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (   //조건이 true 라면 && 다음에 오는 요소가 노출됨
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div>
                <button style={{position: 'relative',
                                right:"10px"}} 
                        onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                    확인
                </button>
                <Link to="/"><button className="bottomButton" style={{position: 'relative',
                                left:"10px"}}>
                    홈으로
                </button></Link>
            </div>
        </div>
        </>
    );
}

export default Login;