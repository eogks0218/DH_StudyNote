import "../../scss/common/Header.scss";
import { useSelector } from "react-redux";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header(props) {

    const { title } = props;

    // ##### SERVER 연결 코드 ##### //
    // const loginUser = useSelector(state => state.authentication.loginUser);
    // ##### SERVER 연결 코드 ##### //

    // ##### SAMPLE ##### //
    const loginUser = useSelector(state => state.sample.loginUser);
    // ##### SAMPLE ##### //
    
    const [dropdownOn, setDropdownOn] = useState(false);

    const dropdownClick = () => {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("active");
            setDropdownOn(!dropdownOn);
        } else {
            console.error('Dropdown menu not found');
        }
    }

    useEffect(() => {
        const dropdownMenu = document.querySelector(".dropdown-menu");
        if (dropdownMenu) {
            dropdownMenu.classList.remove("active");
            setDropdownOn(false);
        }
    }, [title]);

    if (!title) return <div>Post title is missing!</div>;

    return (
        <div className="headerContainer">
            <div className="overlay" id={title}>
                <h1>{title}</h1>
                {
                    loginUser &&
                    <div className="user_dropdown">
                        <div className="dropdown-toggle" onClick={dropdownClick}>
                            {
                                dropdownOn ?
                                    <ImMenu4 />
                                    :
                                    <ImMenu3 />
                            }
                        </div>
                        <div className="dropdown-menu">
                            <ul>
                                <li><Link to={`/MyPage/${loginUser.userNickName}`} dataText="마이 페이지">마이 페이지</Link></li>
                                <li><Link to="/PostPage/MYPOST" dataText="내가 쓴 글">내가 쓴 글</Link></li>
                                <li><Link to="/WritePage" dataText="새 글 작성">새 글 작성</Link></li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}