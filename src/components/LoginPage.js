
// ########## SERVER 연결 코드 ########## //

// import { FaUserAlt, FaLock } from "react-icons/fa";
// import "../scss/Login.scss";
// import SideBar from "./common/SideBar";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { member_list, login_success } from "../module/authentication";
// import { useNavigate } from "react-router-dom";
// import Footer from "./common/Footer";

// export default function LoginPage(){

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [login_id, setLogin_id] = useState();
//     const [login_password, setLogin_password] = useState();

//     useEffect(() => {
//         dispatch(member_list());
//     }, [dispatch])

//     const memberList = useSelector(state => state.authentication.memberList);

//     const loginClick = () => {
//         const loginElement = document.querySelector('.loginPage');
//         loginElement.classList.add('loading');
//         setTimeout(() => {
//             loginElement.classList.add('active');
//             setTimeout(()=>{
//                 const isMember = memberList.find(member => member.userId === login_id);
//                 if(!isMember){
//                     alert('존재하지 않는 아이디입니다.');
//                     loginElement.classList.remove('active');
//                     loginElement.classList.remove('loading');
//                     setLogin_id("");
//                     setLogin_password("");
//                     return;
//                 }else{
//                     if(isMember.userPassword !== login_password){
//                         alert('비밀번호가 일치하지 않습니다.');
//                         loginElement.classList.remove('active');
//                         loginElement.classList.remove('loading');
//                         setLogin_password("");
//                         return;
//                     }else{
//                         alert('로그인 되었습니다.');
//                         dispatch(login_success(isMember));
//                         setLogin_id("");
//                         setLogin_password("");
//                         navigate(-1);
//                         return;
//                     }
//                 }
//             }, 1000)
//         }, 2200);
//     }

//     const loginEnter = (e) => {
//         if(e.key === "Enter"){
//             loginClick();
//         }
//     }

//     useEffect(()=>{
//         setLogin_id("");
//         setLogin_password("");
//     }, [])

//     return(
//         <>
//             <SideBar mainColor="loginYellow"/>
//             <div className="loginPage">
//                 <div className="form">
//                     <h2>👋<span> DH's Study Note</span> </h2>
//                     <div className="form-field">
//                         <label htmlFor="login-id"><FaUserAlt /></label>
//                         <input
//                             id="login-id"
//                             type="text"
//                             name="id"
//                             placeholder="아이디"
//                             value={login_id}
//                             onChange={(e)=>setLogin_id(e.target.value)}
//                             onKeyDown={(e)=>loginEnter(e)}
//                             required
//                         />
//                         <svg>
//                             <use href="#svg-check"/>
//                         </svg>
//                     </div>
//                     <div className="form-field">
//                         <label htmlFor="login-password"><FaLock /></label>
//                         <input
//                             id="login-password"
//                             type="password"
//                             name="password"
//                             placeholder="비밀번호"
//                             value={login_password}
//                             onChange={(e)=>setLogin_password(e.target.value)}
//                             onKeyDown={(e)=>loginEnter(e)}
//                             required
//                         />
//                         <svg>
//                             <use href="#svg-check"/>
//                         </svg>
//                     </div>
//                     <button
//                         type="submit"
//                         className="button"
//                         onClick={loginClick}
//                     >
//                         <div className="arrow-wrapper">
//                             <span className="arrow"></span>
//                         </div>
//                         <p className="button-text">로그인</p>
//                     </button>
//                 </div>
//                 <div className="finished">
//                     <svg>
//                         <use href="#svg-check"/>
//                     </svg>
//                 </div>
//             </div>
//             {/* ## SVG SYMBOLS ############# */}
//             <svg style={{display:"none"}}>
//                 <symbol id="svg-check" viewBox="0 0 130.2 130.2">
//                     <polyline points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
//                 </symbol>
//             </svg>
//             <Footer />
//         </>
//     )
// }

// ########## SERVER 연결 코드 ########## //


// ########## SAMPLE ########## //

import { FaUserAlt, FaLock } from "react-icons/fa";
import "../scss/Login.scss";
import SideBar from "./common/SideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sample_login } from "../module/sample";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";

export default function LoginPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login_id, setLogin_id] = useState();
    const [login_password, setLogin_password] = useState();

    const memberList = useSelector(state => state.sample.memberList);

    const loginClick = () => {
        const loginElement = document.querySelector('.loginPage');
        loginElement.classList.add('loading');
        setTimeout(() => {
            loginElement.classList.add('active');
            setTimeout(()=>{
                const isMember = memberList.find(member => member.userId === login_id);
                if(!isMember){
                    alert('존재하지 않는 아이디입니다.');
                    loginElement.classList.remove('active');
                    loginElement.classList.remove('loading');
                    setLogin_id("");
                    setLogin_password("");
                    return;
                }else{
                    if(isMember.userPassword !== login_password){
                        alert('비밀번호가 일치하지 않습니다.');
                        loginElement.classList.remove('active');
                        loginElement.classList.remove('loading');
                        setLogin_password("");
                        return;
                    }else{
                        alert('로그인 되었습니다.');
                        dispatch(sample_login(isMember));
                        setLogin_id("");
                        setLogin_password("");
                        navigate(-1);
                        return;
                    }
                }
            }, 1000)
        }, 2200);
    }

    const loginEnter = (e) => {
        if(e.key === "Enter"){
            loginClick();
        }
    }

    useEffect(()=>{
        setLogin_id("");
        setLogin_password("");
    }, [])

    return(
        <>
            <SideBar mainColor="loginYellow"/>
            <div className="loginPage">
                <div className="form">
                    <h2>👋<span> DH's Study Note</span> </h2>
                    <div className="form-field">
                        <label htmlFor="login-id"><FaUserAlt /></label>
                        <input
                            id="login-id"
                            type="text"
                            name="id"
                            placeholder="아이디"
                            value={login_id}
                            onChange={(e)=>setLogin_id(e.target.value)}
                            onKeyDown={(e)=>loginEnter(e)}
                            required
                        />
                        <svg>
                            <use href="#svg-check"/>
                        </svg>
                    </div>
                    <div className="form-field">
                        <label htmlFor="login-password"><FaLock /></label>
                        <input
                            id="login-password"
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            value={login_password}
                            onChange={(e)=>setLogin_password(e.target.value)}
                            onKeyDown={(e)=>loginEnter(e)}
                            required
                        />
                        <svg>
                            <use href="#svg-check"/>
                        </svg>
                    </div>
                    <button
                        type="submit"
                        className="button"
                        onClick={loginClick}
                    >
                        <div className="arrow-wrapper">
                            <span className="arrow"></span>
                        </div>
                        <p className="button-text">로그인</p>
                    </button>
                </div>
                <div className="finished">
                    <svg>
                        <use href="#svg-check"/>
                    </svg>
                </div>
            </div>
            {/* ## SVG SYMBOLS ############# */}
            <svg style={{display:"none"}}>
                <symbol id="svg-check" viewBox="0 0 130.2 130.2">
                    <polyline points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </symbol>
            </svg>
            <Footer />
        </>
    )
}

// ########## SAMPLE ########## //