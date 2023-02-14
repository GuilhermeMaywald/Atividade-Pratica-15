import PostItem from "./PostItem";

function Posts(props) {
    const {itens} = props

    return (
        <div>
            <h1>Big Data Component</h1>
            <ul>
                {itens.map((item) => (
                    <PostItem key={item.id} item = {item}/>
                ))}
            </ul>
        </div>
    )
}

export default Posts;