
// ########## SERVER 연결 코드 ########## //

// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import "../../scss/Post/PostList.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { post_list } from "../../module/post";
// import Footer from "../common/Footer";

// const Div = styled.div`
//     padding-top: 100px;
//     padding-bottom: 100px;
//     display: flex;
//     flex-direction: column;
//     font-size: 1rem;
//     justify-content: center;
//     align-items: center;
// `;

// export default function PostList(props) {
//     const { itemsPerPage, postTitle } = props;

//     const dispatch = useDispatch();
//     const loginUser = useSelector(state => state.authentication.loginUser);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postListByTitle, setPostListByTitle] = useState([]);

//     useEffect(() => {
//         dispatch(post_list());
//     }, [dispatch]);
    
//     const postList = useSelector(state => state.post.postList);

//     useEffect(() => {
//         setCurrentPage(1);
//     }, [postTitle]);

//     useEffect(() => {
//         if (postTitle === "MYPOST" && loginUser) {
//             setPostListByTitle(postList.filter(post => post.author_nickName === loginUser.userNickName));
//         } else {
//             setPostListByTitle(postList.filter(post => post.category === postTitle));
//         }
//     }, [postList, postTitle, loginUser]);

//     const pageNumbers = Array.from({ length: Math.ceil(postListByTitle.length / itemsPerPage) }, (_, index) => (index + 1));
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const BlogCard = ({ post, isAlt }) => {
//         const updated_date = new Date(post.updated_at).toLocaleDateString("ko-KR", {
//             year: "numeric",
//             month: "2-digit",
//             day: "2-digit",
//         });
//         const tags = post.tags ? post.tags.split(",").map(tag => tag.trim()) : [];
//         return (
//             <div className={`blog-card ${isAlt ? 'alt' : ''} ${postTitle}`} key={post.id}>
//                 <div className="meta">
//                     <div className="photo" style={{ backgroundImage: `url(${post.thumbnail_url})` }}></div>
//                     <ul className="details">
//                         <li className="author">{post.author_nickName}</li>
//                         <li className="date">{updated_date}</li>
//                         <li className="tags">
//                             <ul>
//                                 {tags.map((tag, idx) => (
//                                     <li key={idx}>{tag}</li>
//                                 ))}
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="description">
//                     <h1>{post.title}</h1>
//                     <p>{post.summary}</p>
//                     <p className="read-more">
//                         <Link to={`/ItemPage/${post.category}/${post.id}`}>Read More</Link>
//                     </p>
//                 </div>
//             </div>
//         );
//     };

//     const displayItems = postListByTitle.slice(startIndex, endIndex).map((post, index) => (
//         <BlogCard key={post.id} post={post} isAlt={index % 2 !== 0} />
//     ));

//     if (!postTitle) return <div>Post title is missing!</div>;

//     return (
//         <Div>
//             <div className="items">{displayItems}</div>
//             <ul className={`page-numbers ${postTitle}`}>
//                 {pageNumbers.map(number => (
//                     <li
//                         key={number}
//                         className={number === currentPage ? "pageActive" : ""}
//                         onClick={() => setCurrentPage(number)}
//                     >
//                         {number}
//                     </li>
//                 ))}
//             </ul>
//             <Footer />
//         </Div>
//     );
// }

// ########## SERVER 연결 코드 ########## //


// ########## SAMPLE ########## //

import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../scss/Post/PostList.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Footer from "../common/Footer";

const Div = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
`;

export default function PostList(props) {
    const { itemsPerPage, postTitle } = props;

    const loginUser = useSelector(state => state.sample.loginUser);
    const [currentPage, setCurrentPage] = useState(1);
    const [postListByTitle, setPostListByTitle] = useState([]);
    
    const postList = useSelector(state => state.sample.postList);

    useEffect(() => {
        setCurrentPage(1);
    }, [postTitle]);

    useEffect(() => {
        if (postTitle === "MYPOST" && loginUser) {
            setPostListByTitle(postList.filter(post => post.author_nickName === loginUser.userNickName));
        } else {
            setPostListByTitle(postList.filter(post => post.category === postTitle));
        }
    }, [postList, postTitle, loginUser]);
    

    if (!postList) {
        return <Div>Loading...</Div>;
    }

    const pageNumbers = Array.from({ length: Math.ceil(postListByTitle.length / itemsPerPage) }, (_, index) => (index + 1));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const BlogCard = ({ post, isAlt }) => {
        const updated_date = new Date(post.updated_at).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
        const tags = post.tags ? post.tags.split(",").map(tag => tag.trim()) : [];
        return (
            <div className={`blog-card ${isAlt ? 'alt' : ''} ${postTitle}`} key={post.id}>
                <div className="meta">
                    <div className="photo" style={{ backgroundImage: `url(${post.thumbnail_url})` }}></div>
                    <ul className="details">
                        <li className="author">{post.author_nickName}</li>
                        <li className="date">{updated_date}</li>
                        <li className="tags">
                            <ul>
                                {tags.map((tag, idx) => (
                                    <li key={idx}>{tag}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="description">
                    <h1>{post.title}</h1>
                    <p>{post.summary}</p>
                    <p className="read-more">
                        <Link to={`/ItemPage/${post.category}/${post.id}`}>Read More</Link>
                    </p>
                </div>
            </div>
        );
    };

    const displayItems = postListByTitle.slice(startIndex, endIndex).map((post, index) => (
        <BlogCard key={post.id} post={post} isAlt={index % 2 !== 0} />
    ));

    if (!postTitle) return <div>Post title is missing!</div>;
    
    return (
        <Div>
            <div className="items">{displayItems}</div>
            <ul className={`page-numbers ${postTitle}`}>
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        className={number === currentPage ? "pageActive" : ""}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </li>
                ))}
            </ul>
            <Footer />
        </Div>
    );
}

// ########## SAMPLE ########## //