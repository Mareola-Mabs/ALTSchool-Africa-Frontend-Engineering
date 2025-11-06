import '../assets/css/userprofile.css'
const users = [
    {
        id: 1,
        name: "Jane Doe",
        bio: "I am a web developer",
        avatar: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        id: 2,
        name: "Jane Doe",
        bio: "I am a web developer",
        avatar: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        id: 3,
        name: "Jane Doe",
        bio: "I am a web developer",
        avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }
]
const UserProfile = ()=>{
    return users.map(user =>{
        return (
            <section className="users" key={user.id}>
                <section className='username'>{user.name}</section>
                <section className='bio'>{user.bio}</section>

                <img src={user.avatar} alt="Avatar"/>
            </section>
        )
    })
}

export default UserProfile