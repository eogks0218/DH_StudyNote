import SideBar from "../common/SideBar"
import Header from "../common/Header";
import Footer from "../common/Footer"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import SelectedPost from "./SelectedPost";

export default function ItemPage(){

    const { category, id } = useParams();

    // ########## SERVER 연결 코드 ########## //
    // const postList = useSelector(state=> state.post.postList)
    // ########## SERVER 연결 코드 ########## //

    // ########## SAMPLE ########## //
    const postList = useSelector(state => state.sample.postList)
    // ########## SAMPLE ########## //

    const selectedPost = postList.find(post => post.id === parseInt(id));

    return(
        <>
            <SideBar mainColor={category}/>
            <Header title={category}/>
            <SelectedPost selectedPost={selectedPost}/>
            <Footer />
        </>
    )
}