import userTable from '../sampleData/userTable.json'
import contentTable from '../sampleData/contentTable.json'

const SAMPLE_LOGIN = 'sample/SAMPLE_LOGIN';
const SAMPLE_LOGOUT = 'sample/SAMPLE_LOGOUT';
const SAMPLE_UPDATE_USER = 'sample/SAMPLE_UPDATE_USER';

export const sample_login = (user) => ({ type: SAMPLE_LOGIN, user })
export const sample_logout = () => ({ type: SAMPLE_LOGOUT })
export const sample_update_user = (userData) => ({ type: SAMPLE_UPDATE_USER, userData })

const SAMPLE_TAGS_ADD = 'sample/SAMPLE_TAGS_ADD'
const SAMPLE_TAGS_REMOVE = 'sample/SAMPLE_TAGS_REMOVE'
const SAMPLE_TAGS_RESET = 'sample/SAMPLE_TAGS_RESET'

export const sample_tags_add = (tag) => ({ type: SAMPLE_TAGS_ADD, tag })
export const sample_tags_remove = (tag) => ({ type: SAMPLE_TAGS_REMOVE, tag })
export const sample_tags_reset = () => ({ type: SAMPLE_TAGS_RESET })

const SAMPLE_WRITE_POST = 'sample/SAMPLE_WRITE_POST';
const SAMPLE_UPDATE_POST = 'sample/SAMPLE_UPDATE_POST';
const SAMPLE_DELETE_POST = 'sample/SAMPLE_DELETE_POST';

export const sample_write_post = (postData) => ({ type: SAMPLE_WRITE_POST, postData })
export const sample_update_post = (postData) => ({ type: SAMPLE_UPDATE_POST, postData })
export const sample_delete_post = (post_id) => ({ type: SAMPLE_DELETE_POST, post_id })

const initailState = {
    memberList: userTable,
    postList: contentTable,
    loginUser: null,
    tags: []
}

export const sample = (state=initailState, action) => {
    switch(action.type){
        case SAMPLE_LOGIN:
            return{
                ...state,
                loginUser: action.user,
                postList: state.postList,
                tags: []
            }
        case SAMPLE_LOGOUT:
            return{
                ...state,
                memberList: state.memberList,
                loginUser: null,
                postList: state.postList,
                tags: []
            }
        case SAMPLE_UPDATE_USER:
            return{
                memberList: state.memberList.map(member => member.id === action.userData.id? action.userData : member),
                loginUser: action.userData,
                postList: state.postList,
                tags: []
            }
        case SAMPLE_TAGS_ADD:
            return{
                ...state,
                memberList: state.memberList,
                tags: [...state.tags, action.tag],
                loginUser: state.loginUser,
                postList: state.postList
            }
        case SAMPLE_TAGS_REMOVE:
            return{
                ...state,
                memberList: state.memberList,
                loginUser: state.loginUser,
                postList: state.postList,
                tags: state.tags.filter(tag => tag!== action.tag)
            }
        case SAMPLE_TAGS_RESET:
            return{
                ...state,
                memberList: state.memberList,
                loginUser: state.loginUser,
                postList: state.postList,
                tags: []
            }
        case SAMPLE_WRITE_POST:
            return{
                ...state,
                memberList: state.memberList,
                loginUser: state.loginUser,
                postList: [...state.postList, action.postData],
                tags: []
            }
        case SAMPLE_UPDATE_POST:
            return{
                ...state,
                memberList: state.memberList,
                loginUser: state.loginUser,
                postList: state.postList.map(post => post.id === action.postData.id? action.postData : post),
                tags: []
            }
        case SAMPLE_DELETE_POST:
            return{
                ...state,
                memberList: state.memberList,
                loginUser: state.loginUser,
                postList: state.postList.filter(post => post.id!== action.post_id),
                tags: []
            }
        default:
            return state;
    }
}