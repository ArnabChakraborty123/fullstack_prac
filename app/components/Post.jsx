import DeletePostButton from "./DeletePostButton"
export default function Post({id, title, content, authorName}){

    return (
        <div>
        <h1>{authorName}</h1>
        <h2>{title}</h2>
        <p>{content}</p>
        <DeletePostButton postId ={id} />
        </div>
    )
}