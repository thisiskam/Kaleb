import { useNavigate } from "react-router-dom";

export default function () {
    const nav = useNavigate()
    const imgOne = {img: "google-screenshot.png", alt: "google screenshot"}
    const containerTitle = "Find Us On"
    const googleLogo = {img: "google.svg", alt: "google logo"}
    const reviews = [
        {img:"review1.png", alt:"review", link:"https://g.co/kgs/2uKFQv5"},
        {img:"review2.png", alt:"review", link:"https://g.co/kgs/d7ZUZYp"},
        {img:"review3.png", alt:"review", link:"https://g.co/kgs/9Zx6bcg"}
    ]

    return (
        <>
            <div className="container bg-dark rounded w-75 mt-5">
                <div className="row">
                    <h1 className="display-5 text-white text-center">{containerTitle}<img style={{height: "140px"}} src={googleLogo.img} alt={googleLogo.alt}/></h1>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-4 pb-4 px-3">
                        <div className="row">
                            <div className="col">
                                <img className="w-100 rounded"src={imgOne.img} alt={imgOne.alt} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col justify-content-center d-flex">
                                <button className="btn bg-white w-auto mt-3">Read More Reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 pb-4 px-3">
                        <div className="row">
                            <div className="col-6">
                                <a href={reviews[0].link} target="_blank" rel="noopener noreferrer">
                                    <img className="rounded w-100 grow-image" src={reviews[0].img} alt={reviews[0].alt}/>
                                </a>
                            </div>
                            <div className="col-6">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">

                            </div>
                            <div className="col-6">
                                <img className="rounded w-100 grow-image" src={reviews[2].img} alt={reviews[1].alt} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img className="rounded w-100 grow-image" src={reviews[1].img} alt={reviews[2].alt} />
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   