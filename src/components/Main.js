import { Link } from "react-router-dom";
import "../scss/Main.scss";

export default function Main(){

    return(
        <div className="container">
            <div className="mainHeader">
                <div className="inner-header flex">
                    <h1>👋 DH's Study Note</h1>
                </div>
                <nav className="menu">
                    <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
                    <label className="menu-open-button" for="menu-open">
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                    </label>
                    <Link to="/PostPage/HTML" className="menu-item blue">HTML</Link>
                    <Link to="/PostPage/CSS" className="menu-item green">CSS</Link>
                    <Link to="/PostPage/JAVASCRIPT" className="menu-item red">JAVASCRIPT</Link>
                    <Link to="/PostPage/REACT" className="menu-item purple">REACT</Link>
                    <Link to="/PostPage/GITHUB" className="menu-item orange">GITHUB</Link>
                    <Link to="/PostPage/CERTIFICATE" className="menu-item lightblue">Certificate</Link>
                </nav>
                <div>
                    <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto">
                        <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="content flex">
                <p>By.Goodkatz | Use.KDH </p>
            </div>
        </div>
    )
}