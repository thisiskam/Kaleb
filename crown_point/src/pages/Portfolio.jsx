import { Link } from "react-router-dom"

export default function Portfolio () {
    return (
        <>
            <div className="d-flex justify-content-center flex-column">
                <p className="display-3 text-center mt-5">Portfolio Page</p>
                <Link className="btn fs-3" to='/'>Home</Link>
            </div>
        </>
    )
}