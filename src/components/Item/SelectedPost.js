import "../../scss/Item/SelectedPost.scss"
import { BiLike, BiComment } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SelectedPost(props){

    const { selectedPost } = props;

    // ########## SERVER 연결 코드 ########## //
    // const loginUser = useSelector(state => state.authentication.loginUser)
    // ########## SERVER 연결 코드 ########## //

    // ########## SAMPLE ########## //
    const loginUser = useSelector(state => state.sample.loginUser)
    // ########## SAMPLE ########## //

    const navigate = useNavigate();

    return(
        <div className="SelectedPostContainer">
            <div className="selected-blog-card" style={{backgroundImage: `url(${selectedPost.thumbnail_url})`}}>
                <div className="title-content">
                    <h3>{selectedPost.title}</h3>
                    <div className="intro">{selectedPost.summary}</div>
                </div>
                <div className="card-info" dangerouslySetInnerHTML={{ __html: selectedPost.content}}></div>
                <div className="utility-info">
                    <ul className="utility-list">
                        <li><BiLike />{selectedPost.likes}</li>
                        <li><BiComment />{selectedPost.comments_count}</li>
                        <li><FiEye />{selectedPost.views}</li>
                        <li><AiOutlineTag />{selectedPost.tags}</li>
                    </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
            {
                loginUser && selectedPost.author_nickName === loginUser.userNickName &&
                <div className="buttonContainer">
                    <button className="btn" onClick={()=>navigate(`/WritePage/${selectedPost.id}`)}><span>Modify Post</span></button>
                </div>
            }
        </div>
    )
}