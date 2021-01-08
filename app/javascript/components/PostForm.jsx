import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

function PostForm(){
    const [content, setContent] = useState("")
    const [platform, setPlatform] = useState("")
    const [status, setStatus] = useState("draft")
    const dispatch = useDispatch()
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <form id="post-form" onSubmit={handleOnSubmit}>
            <h1>Create a New Post</h1>
            <select id="platform" name="platform"  value={platform} onChange={e => setPlatform(e.target.value)}>
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
            </select>
            <select id="status" name="status"  value={status} onChange={e => setStatus(e.target.value)}>
                <option value="facebook">Draft</option>
                <option value="twitter">Pending</option>
                <option value="instagram">Approved</option>
                <option value="instagram">Scheduled</option>
            </select>
            <br /><br />
            <textarea rows = "5" cols = "60" name ="content" value={content} onChange={e =>setContent(e.target.value)} placeholder="Write your awesome post here..." >
            </textarea><br /><br />
            <input type="submit" />
        </form>
    )
}

export default PostForm