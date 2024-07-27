export default function Post({id, title, content, authorName}){

    return (
        <div>
        <h1>{authorName}</h1>
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
    )
}