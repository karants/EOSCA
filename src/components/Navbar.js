import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>EOSCA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href='/About'>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/Policy'>Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/Assessment'>Assessment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;