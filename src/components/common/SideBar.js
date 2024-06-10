import { Link, useNavigate } from "react-router-dom";
import "../../scss/common/SideBar.scss";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// ##### SERVER 연결 코드 ##### //
// import { logout } from "../../module/authentication";
// ##### SERVER 연결 코드 ##### //

// ##### SAMPLE ##### //
import { sample_logout } from "../../module/sample";
// ##### SAMPLE ##### //

export default function SideBar(props) {
    const { mainColor } = props;
    const navigate = useNavigate();
    
    // ##### SERVER 연결 코드 ##### //
    // const loginUser = useSelector(state => state.authentication.loginUser);
    // ##### SERVER 연결 코드 ##### //

    // ##### SAMPLE ##### //
    const loginUser = useSelector(state => state.sample.loginUser);
    // ##### SAMPLE ##### //

    const dispatch = useDispatch();

    const [authColor, setauthColor] = useState("#000");

    useEffect(() => {
        if (mainColor === "HTML") {
            setauthColor("#5356FF");
        } else if (mainColor === "CSS") {
            setauthColor("#40A578");
        } else if (mainColor === "JAVASCRIPT") {
            setauthColor("#A91D3A");
        } else if (mainColor === "REACT") {
            setauthColor("#7469B6");
        } else if (mainColor === "GITHUB") {
            setauthColor("#DC5F00");
        } else if (mainColor === "CERTIFICATE") {
            setauthColor("#9AC8CD");
        } else if (mainColor === "MYPOST") {
            setauthColor("#A79277");
        } else if (mainColor === "loginYellow") {
            setauthColor("#000");
        } else if (mainColor === "basic"){
            setauthColor("#686D76");
        }
    }, [mainColor]);

    useEffect(() => {
        const button = document.querySelector(".loginButton");
        if (button) {
            const buttonText = button.textContent.trim().split("");
            button.innerHTML = "";
            const div = document.createElement("div");
            div.style.textShadow = `0 var(--font-shadow) 0 ${authColor}`;
            buttonText.forEach(char => {
                const span = document.createElement("span");
                span.textContent = char;
                div.appendChild(span);
            });
            button.appendChild(div);
        }
    }, [authColor]);

    const logoutClick = () => {
        alert("로그아웃되었습니다.");
        
        // ##### SERVER 연결 코드 ##### //
        // dispatch(logout());
        // ##### SERVER 연결 코드 ##### //

        // ##### SAMPLE ##### //
        dispatch(sample_logout());
        // ##### SAMPLE ##### //

        navigate("/");
    };

    if (!mainColor) return <div>Post title is missing!</div>;

    return (
        <div className={mainColor}>
            <div className="commonHeader">
                {!loginUser && (
                    <button className="loginButton" onClick={() => navigate('/LoginPage')} style={{ color: authColor }}>
                        Login
                    </button>
                )}
                {loginUser && (
                    <button className="logoutButton">
                        <div className="loButton" style={{ color: authColor }}>
                            <img src={loginUser.userImage} alt="X" />
                            {loginUser.userNickName}
                            <div className="logout" style={{ borderLeft: `4px double ${authColor}` }} onClick={logoutClick}>
                                로그아웃
                            </div>
                        </div>
                    </button>
                )}
            </div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li>DH's Study Note<span>김대환의 공부노트</span></li>
                    <li><Link to="/"><FaHome /></Link></li>
                    <li><Link to="/PostPage/HTML">HTML</Link></li>
                    <li><Link to="/PostPage/CSS">CSS</Link></li>
                    <li><Link to="/PostPage/JAVASCRIPT">JAVASCRIPT</Link></li>
                    <li><Link to="/PostPage/REACT">REACT</Link></li>
                    <li><Link to="/PostPage/GITHUB">GITHUB</Link></li>
                    <li><Link to="/PostPage/CERTIFICATE">CERTIFICATE</Link></li>
                </ul>
            </div>
        </div>
    );
}