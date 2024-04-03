export default function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
            <i className="topIcon fa-brands fa-github"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img
                    className='topImg'
                    src='https://i.pinimg.com/564x/47/4b/8a/474b8a199086b29ae636a06fd3ecbf6d.jpg'
                    alt=''
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}