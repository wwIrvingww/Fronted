export default function Post({ image, title, description, date }) {
    return (
        <div className='post'>
            <img className='postImg'
            src={image} 
            alt="" 
            /> 
            <div className="postInfo">
                <span className="postTitle">
                    {title}
                </span>
                <hr/>
                <span className="postDate"> {date} </span>
            </div>
            <p className='postDesc'>
                {description}
            </p>           
        </div>
    )
}