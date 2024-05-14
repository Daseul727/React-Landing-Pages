import React from 'react'


const Header = () => {

    const commonImagePath = '/img/'

    return (
        <>
            <div className="header">
                <img src="/img/ds_logo.jpg" alt="로고" className="logo" />
                <div className="menu_area">
                    <img src="/img/menu.png" alt="햄버거 버튼" className="menu_icon" />
                </div>

            </div>
        </>
    )
}

export default Header