function Avatar({ username, avatar}){
    return(
        <div className = "profile">
            <img src={avatar} alt= "profile" />
            <span>{username}</span>
        </div>
    )
}
export default Avatar;