import SideBar from "./common/SideBar"
import Footer from "./common/Footer"
import "../scss/MyPage.scss"
import { useDispatch, useSelector } from "react-redux"
import { FaRegHandPointRight } from "react-icons/fa";
import { useState } from "react";

// ########## SERVER용 코드 ########## //
// import { update_user } from "../module/authentication";
// ########## SERVER용 코드 ########## //

// ########## SAMPLE ########## //
import { sample_update_user } from "../module/sample";
// ########## SAMPLE ########## //


export default function MyPage(){
    
    // ########## SERVER용 코드 ########## //
    // const loginUser = useSelector(state => state.authentication.loginUser)
    // ########## SERVER용 코드 ########## //

    // ########## SAMPLE ########## //
    const loginUser = useSelector(state => state.sample.loginUser)
    // ########## SAMPLE ########## //
    const [userNickName, setUserNickName] = useState(loginUser.userNickName)
    const [userPassword, setUserPassword] = useState(loginUser.userPassword)
    const [userEmail, setUserEmail] = useState(loginUser.userEmail)
    const [userName, setUserName] = useState(loginUser.userName)
    const [userAge, setUserAge] = useState(loginUser.userAge)
    const [isModified, setIsModified] = useState(false);
    const dispatch = useDispatch();

    const modifiedProfile = () => {
        const userData = {
            id: loginUser.id,
            userId: loginUser.userId,
            userNickName,
            userPassword,
            userEmail,
            userName,
            userAge,
            userImage: loginUser.userImage
        }
        dispatch(sample_update_user(userData));
        setIsModified(false);
    }

    return(
        <>
            <SideBar mainColor="basic" />
            <div className="MyPageContainer">
                <div className="profileContainer">
                    <div className="mainProfile">
                        <h1>{loginUser.userNickName}</h1>
                        <div>
                            <img src={loginUser.userImage} alt="프로필사진" />
                        </div>
                    </div>
                    <div className="contentContainer">
                        <h1>Profile</h1>
                        <div>
                            <FaRegHandPointRight />아이디
                            <input
                                type="text"
                                value={loginUser.userId}
                                disabled
                            />
                        </div>
                        <div>
                            <FaRegHandPointRight />닉네임 
                            <input
                                type="text"
                                value={userNickName}
                                disabled={!isModified}
                                onChange={(e)=>setUserNickName(e.target.value)}
                            />
                        </div>
                        <div>
                            <FaRegHandPointRight />비밀번호 
                            <input
                                type={isModified? "text" : "password"}
                                value={userPassword}
                                disabled={!isModified}
                                onChange={(e)=>setUserPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <FaRegHandPointRight />이메일 
                            <input
                                type="text"
                                value={userEmail}
                                disabled={!isModified}
                                onChange={(e)=>setUserEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <FaRegHandPointRight />이름 
                            <input
                                type="text"
                                value={userName}
                                disabled={!isModified}
                                onChange={(e)=>setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <FaRegHandPointRight />나이 
                            <input
                                type="text"
                                value={userAge}
                                disabled={!isModified}
                                onChange={(e)=>setUserAge(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="buttonContainer">
                        {
                            isModified ?
                            <button type="button" data-text="Save Profile" onClick={modifiedProfile}>Save Profile</button>
                            :
                            <button type="button" data-text="Modify Profile" onClick={()=>setIsModified(true)}>Modify Profile</button>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}