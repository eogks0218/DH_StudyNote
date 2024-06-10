
// ########## SERVER 연결 코드 ########## //

// import { useEffect, useMemo, useRef, useState } from "react";
// import ReactQuill from "react-quill"
// import "react-quill/dist/quill.snow.css"
// import SideBar from "../common/SideBar";
// import "../../scss/Write/WritePage.scss"
// import { useDispatch, useSelector } from "react-redux";
// import { write_post, tags_reset, tags_add, tags_remove, update_post, delete_post } from "../../module/write";
// import { useNavigate, useParams } from "react-router-dom";
// import Footer from "../common/Footer";
// import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";

// const formats = [
//     'font',
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'indent',
//     'link',
//     'align',
//     'color',
//     'background',
//     'size',
//     'h1'
// ];

// export default function WritePage(){

//     const [contentValue, setContentValue] = useState("");
//     const [titleValue, setTitleValue] = useState("");
//     const [summaryValue, setSummaryValue] = useState("");
//     const [categoryValue, setCategoryValue] = useState("HTML");
//     const [uploadedImage, setUploadedImage] = useState(null);
//     const [tagValue, setTagValue] = useState("");
//     const fileInputRef = useRef(null);
//     const loginUser = useSelector(state => state.authentication.loginUser);
//     const tags = useSelector(state => state.write.tags)
//     const postList = useSelector(state => state.post.postList);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(()=>{
//         dispatch(tags_reset());
//     }, [dispatch])

//     const onChangeImage = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             const file = e.target.files[0];
//             setUploadedImage(`/image/thumbnail/${file.name}`);
//         } else {
//             setUploadedImage(null);
//         }
//     }

//     const modules = useMemo(()=>{
//         return{
//             toolbar: {
//                 container: [
//                     [{ size: ['small', false, 'large', 'huge'] }],
//                     [{ align: [] }],
//                     ['bold', 'italic', 'underline', 'strike'],
//                     [{ list: 'ordered' }, { list: 'bullet' }],
//                     [{ color: [] }, { background: [] }]
//                 ]
//             }
//         }
//     }, [])

//     const write_cancel = () => {
//         // eslint-disable-next-line no-restricted-globals
//         const cancelTrue = confirm("모든 필드가 지워집니다. 정말 취소하시겠습니까?")
//         if (cancelTrue) {
//             setContentValue("")
//             setTitleValue("")
//             setSummaryValue("")
//             setCategoryValue("HTML")
//             setUploadedImage(null)
//             dispatch(tags_reset());
//             if (fileInputRef.current) {
//                 fileInputRef.current.value = ""; // 파일 입력 필드 값 초기화
//             }
//         } else{
//             return;
//         }
//     }
    

//     const write_submit = () => {
//         const tagsData = tags.join(", ");    
//         const postData = {
//             category: categoryValue,
//             title: titleValue,
//             summary: summaryValue,
//             author_nickName: loginUser.userNickName,
//             content: contentValue,
//             tags: tagsData,
//             thumbnail_url: uploadedImage
//         };
//         dispatch(write_post(postData));
//         navigate(`/PostPage/${postData.category}`)
//     }

//     const tagAdd = () => {
//         const isTag = tags.find(tag => tag === "#"+tagValue)
//         if (tagValue!== "" && !isTag ) {
//             dispatch(tags_add("#"+tagValue));
//             setTagValue("");
//             return;
//         } else if (tagValue === ""){
//             alert("빈 태그는 추가할 수 없습니다.")
//             return;
//         } else if(isTag){
//             alert("중복된 태그는 추가할 수 없습니다.")
//             setTagValue("");
//             return;
//         }
//     }

//     const selectedPost = postList.find(post => post.id === parseInt(id));

//     useEffect(()=>{
//         if(id && selectedPost){
//             setTitleValue(selectedPost.title);
//             setSummaryValue(selectedPost.summary);
//             setContentValue(selectedPost.content);
//             setCategoryValue(selectedPost.category);
//             setUploadedImage(selectedPost.thumbnail_url);

//             const tagsList = selectedPost.tags.split(", ").map(tag => tag.trim());
//             tagsList.forEach(tag => dispatch(tags_add(tag)));
//         }
//     }, [id, selectedPost, dispatch])

    
    
//     const write_update = () => {
//         const tagsData = tags.join(", ");  
//         const postData = {
//             id: selectedPost.id,
//             category: categoryValue,
//             title: titleValue,
//             summary: summaryValue,
//             author_nickName: loginUser.userNickName,
//             content: contentValue,
//             tags: tagsData,
//             thumbnail_url: uploadedImage
//         };
//         // eslint-disable-next-line no-restricted-globals
//         const updateTrue = confirm("글을 수정하시겠습니까 ?");
//         if(updateTrue){
//             alert("글이 수정되었습니다.")
//             dispatch(update_post(postData));
//             navigate(`/ItemPage/${selectedPost.category}/${selectedPost.id}`)
//         }else{
//             return;
//         }
//     }

//     const write_delete = () => {
//         // eslint-disable-next-line no-restricted-globals
//         const deleteTrue = confirm("글을 삭제하시겠습니까 ?");
//         if(deleteTrue){
//             alert("글이 삭제되었습니다.")
//             navigate(`/PostPage/${selectedPost.category}`)
//             dispatch(delete_post(selectedPost.id));
//         }else{
//             return;
//         }
        
//     }

//     return(
//         <>
//             <SideBar mainColor="basic" />
//             <div className="writeContainer">
//                 <div className="writeBox">
//                     <h1>
//                         {id ? "글 수정" : "새 글 작성"}
//                     </h1>
//                     <div className="write_category">
//                         <div className="subTitle">Category </div>
//                         <select value={categoryValue} onChange={(e)=>setCategoryValue(e.target.value)}>
//                             <option value="HTML">HTML</option>
//                             <option value="CSS">CSS</option>
//                             <option value="JAVASCRIPT">JAVASCRIPT</option>
//                             <option value="REACT">REACT</option>
//                             <option value="GITHUB">GITHUB</option>
//                             <option value="CERTIFICATE">CERTIFICATE</option>
//                         </select>
//                     </div>
//                     <div className="write_title">
//                         <input
//                             type="text"
//                             placeholder="제목을 입력하세요."
//                             onChange={(e)=>setTitleValue(e.target.value)}
//                             value={titleValue}
//                         />
//                     </div>
//                     <div className="write_summary">
//                         <input
//                             type="text"
//                             placeholder="소제목을 입력하세요."
//                             onChange={(e)=>setSummaryValue(e.target.value)}
//                             value={summaryValue}
//                         />
//                     </div>
//                     <div className="write_content">
//                         <ReactQuill
//                             theme="snow"
//                             modules={modules}
//                             formats={formats}
//                             onChange={setContentValue}
//                             value={contentValue}
//                         />
//                     </div>
//                     <div className="write_tags">
//                         <div className="subTitle">Tag</div>
//                         <div className="inputBox">
//                             <input
//                                 type="text"
//                                 placeholder="태그를 입력하세요."
//                                 value={tagValue}
//                                 onChange={(e) => setTagValue(e.target.value)}
//                             />
//                             <FaPlusCircle onClick={tagAdd}/>
//                         </div>
//                         {tags.length !== 0 &&
//                             <div className="tagList">
//                                 {tags.map((tag, idx) => (
//                                     <div>
//                                         <div key={idx}>{tag}</div>
//                                         <FaTimesCircle
//                                             onClick={()=> dispatch(tags_remove(tag))}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         }
//                     </div>
//                     <div className="write_image">
//                         <div className="subTitle">Thumbnail</div>
//                         <input type="file" onChange={onChangeImage} ref={fileInputRef}/>
//                         {uploadedImage && <img src={uploadedImage} alt="이미지" />}
//                     </div>
//                     <div className="write_button">
//                         {
//                             id ?
//                             <>
//                                 <button type="button" onClick={write_update}>수정</button>
//                                 <button type="button" onClick={write_delete}>삭제</button>
//                             </>
//                             :
//                             <>
//                                 <button type="button" onClick={write_submit}>등록</button>
//                                 <button type="button" onClick={write_cancel}>취소</button>
//                             </>
//                         }
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// ########## SERVER용 코드 ########## //


// ########## SAMPLE ########## //

import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import SideBar from "../common/SideBar";
import "../../scss/Write/WritePage.scss"
import { useDispatch, useSelector } from "react-redux";
import { sample_tags_reset, sample_write_post, sample_tags_add, sample_update_post, sample_tags_remove, sample_delete_post } from "../../module/sample";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../common/Footer";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";

const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
    'background',
    'size',
    'h1'
];

export default function WritePage(){

    const [contentValue, setContentValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [summaryValue, setSummaryValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("HTML");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [tagValue, setTagValue] = useState("");
    const fileInputRef = useRef(null);
    const loginUser = useSelector(state => state.sample.loginUser);
    const tags = useSelector(state => state.sample.tags)
    const postList = useSelector(state => state.sample.postList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(sample_tags_reset());
    }, [dispatch])

    const onChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setUploadedImage(`/image/thumbnail/${file.name}`);
        } else {
            setUploadedImage(null);
        }
    }

    const modules = useMemo(()=>{
        return{
            toolbar: {
                container: [
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ align: [] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ color: [] }, { background: [] }]
                ]
            }
        }
    }, [])

    const write_cancel = () => {
        // eslint-disable-next-line no-restricted-globals
        const cancelTrue = confirm("모든 필드가 지워집니다. 정말 취소하시겠습니까?")
        if (cancelTrue) {
            setContentValue("")
            setTitleValue("")
            setSummaryValue("")
            setCategoryValue("HTML")
            setUploadedImage(null)
            dispatch(sample_tags_reset());
            if (fileInputRef.current) {
                fileInputRef.current.value = ""; // 파일 입력 필드 값 초기화
            }
        } else{
            return;
        }
    }
    

    const write_submit = () => {
        const tagsData = tags.join(", ");    
        const postData = {
            category: categoryValue,
            title: titleValue,
            summary: summaryValue,
            author_nickName: loginUser.userNickName,
            content: contentValue,
            tags: tagsData,
            thumbnail_url: uploadedImage
        };
        dispatch(sample_write_post(postData));
        navigate(`/PostPage/${postData.category}`)
    }

    const tagAdd = () => {
        const isTag = tags.find(tag => tag === "#"+tagValue)
        if (tagValue!== "" && !isTag ) {
            dispatch(sample_tags_add("#"+tagValue));
            setTagValue("");
            return;
        } else if (tagValue === ""){
            alert("빈 태그는 추가할 수 없습니다.")
            return;
        } else if(isTag){
            alert("중복된 태그는 추가할 수 없습니다.")
            setTagValue("");
            return;
        }
    }

    const selectedPost = postList.find(post => post.id === parseInt(id));

    useEffect(()=>{
        if(id && selectedPost){
            setTitleValue(selectedPost.title);
            setSummaryValue(selectedPost.summary);
            setContentValue(selectedPost.content);
            setCategoryValue(selectedPost.category);
            setUploadedImage(selectedPost.thumbnail_url);

            const tagsList = selectedPost.tags.split(", ").map(tag => tag.trim());
            tagsList.forEach(tag => dispatch(sample_tags_add(tag)));
        }
    }, [id, selectedPost, dispatch])

    
    
    const write_update = () => {
        const tagsData = tags.join(", ");  
        const postData = {
            id: selectedPost.id,
            category: categoryValue,
            title: titleValue,
            summary: summaryValue,
            author_nickName: loginUser.userNickName,
            content: contentValue,
            tags: tagsData,
            thumbnail_url: uploadedImage
        };
        // eslint-disable-next-line no-restricted-globals
        const updateTrue = confirm("글을 수정하시겠습니까 ?");
        if(updateTrue){
            alert("글이 수정되었습니다.")
            dispatch(sample_update_post(postData));
            navigate(`/ItemPage/${selectedPost.category}/${selectedPost.id}`)
        }else{
            return;
        }
    }

    const write_delete = () => {
        // eslint-disable-next-line no-restricted-globals
        const deleteTrue = confirm("글을 삭제하시겠습니까 ?");
        if(deleteTrue){
            alert("글이 삭제되었습니다.")
            navigate(`/PostPage/${selectedPost.category}`)
            dispatch(sample_delete_post(selectedPost.id));
        }else{
            return;
        }
        
    }

    return(
        <>
            <SideBar mainColor="basic" />
            <div className="writeContainer">
                <div className="writeBox">
                    <h1>
                        {id ? "글 수정" : "새 글 작성"}
                    </h1>
                    <div className="write_category">
                        <div className="subTitle">Category </div>
                        <select value={categoryValue} onChange={(e)=>setCategoryValue(e.target.value)}>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JAVASCRIPT">JAVASCRIPT</option>
                            <option value="REACT">REACT</option>
                            <option value="GITHUB">GITHUB</option>
                            <option value="CERTIFICATE">CERTIFICATE</option>
                        </select>
                    </div>
                    <div className="write_title">
                        <input
                            type="text"
                            placeholder="제목을 입력하세요."
                            onChange={(e)=>setTitleValue(e.target.value)}
                            value={titleValue}
                        />
                    </div>
                    <div className="write_summary">
                        <input
                            type="text"
                            placeholder="소제목을 입력하세요."
                            onChange={(e)=>setSummaryValue(e.target.value)}
                            value={summaryValue}
                        />
                    </div>
                    <div className="write_content">
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            onChange={setContentValue}
                            value={contentValue}
                        />
                    </div>
                    <div className="write_tags">
                        <div className="subTitle">Tag</div>
                        <div className="inputBox">
                            <input
                                type="text"
                                placeholder="태그를 입력하세요."
                                value={tagValue}
                                onChange={(e) => setTagValue(e.target.value)}
                            />
                            <FaPlusCircle onClick={tagAdd}/>
                        </div>
                        {tags.length !== 0 &&
                            <div className="tagList">
                                {tags.map((tag, idx) => (
                                    <div>
                                        <div key={idx}>{tag}</div>
                                        <FaTimesCircle
                                            onClick={()=> dispatch(sample_tags_remove(tag))}
                                        />
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    <div className="write_image">
                        <div className="subTitle">Thumbnail</div>
                        <input type="file" onChange={onChangeImage} ref={fileInputRef}/>
                        {uploadedImage && <img src={uploadedImage} alt="이미지" />}
                    </div>
                    <div className="write_button">
                        {
                            id ?
                            <>
                                <button type="button" onClick={write_update}>수정</button>
                                <button type="button" onClick={write_delete}>삭제</button>
                            </>
                            :
                            <>
                                <button type="button" onClick={write_submit}>등록</button>
                                <button type="button" onClick={write_cancel}>취소</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

// ########## SAMPLE ########## //