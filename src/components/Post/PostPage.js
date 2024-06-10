import SideBar from "../common/SideBar";
import Header from "../common/Header";
import PostList from "./PostList";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const itemsPerPage = useRef(6);
    const { postTitle } = useParams();

    if (!postTitle) {
        console.error("Post title is missing!");
        return <div>Post title is missing!</div>;
    }

    return (
        <>
            <SideBar mainColor={postTitle} />
            <Header title={postTitle} />
            <PostList itemsPerPage={itemsPerPage.current} postTitle={postTitle} />
        </>
    );
}