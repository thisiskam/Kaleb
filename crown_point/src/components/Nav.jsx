import { Link } from "react-router-dom"

export default function Nav() {
    return (
      <>
         <nav className="navbar navbar-expand-md navbar-light">
            <div className="pr-0">
                <a className="navbar-toggler btn fs-1 border-black" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">Explore</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="nav-link text-center btn fs-5 text-hover-underline" to='/portfolio'>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-center btn fs-5 text-hover-underline" to='blog'>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-center btn fs-5 text-hover-underline" to='estimates'>Estimate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    )
  }
  
