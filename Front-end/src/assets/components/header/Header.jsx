import headerStyles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.bgHeader} >
            <div className="container">
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <h1 className="text-center p-2">Il mio foto album</h1>
                    </div>
                    <div className="col-4 text-end">
                        <button><a href="http://localhost:3000/">Login</a></button>
                        <button><a href="http://localhost:3000/">Register</a></button>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;