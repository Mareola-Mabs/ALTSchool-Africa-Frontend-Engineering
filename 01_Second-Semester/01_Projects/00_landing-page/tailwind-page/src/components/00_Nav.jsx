const Nav = () =>{
    return <div className="nav border-b border-nav-border">
        <div className="nav__logo">
            <section className="logo__logo-img">
                <img className="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind Logo" />
                tailwind
            </section>
            <section className="nav__logo-version"></section>
        </div>

        <div className="nav__menu">
            <section className="nav__menu-search"></section>
            <section className="nav__menu-links">
                <a href="" className="">Docs</a>
                <a href="" className="">Blog</a>
                <a href="" className="">Showcase</a>
                <a href="" className="">Sponsor</a>
            </section>
            <section className="nav__menu-plus">
                Plus
            </section>
            <section className="nav__menu-github">
                <a href=""></a>
            </section>
        </div>
    </div>
}

export default Nav