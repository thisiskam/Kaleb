import Nav from './Nav'

export default function Jumbotron() {
  const displayBrand = "Crown Point Tile"
  const displayTitleLineOne = "Excellence"
  const displayTitleLineTwo = "In Every Detail"

  return (
    <>
      <div class="jumbotron jumbotron-fluid jumbotron-background">
        <div className='h-100 m-0 p-0 w-100'>
          <div className='row mt-3'>
            <div className='col-11 px-0 d-flex justify-content-end'>
              <button className='btn bg-dark text-white text-secondary mt-1'>Get Estimate</button>
            </div>
            <div className='col-1 mt-1 d-flex justify-content-center'>
            </div>
          </div>
          <div className='row h-100'>
            <div class="col-2"></div>
            <div className='col-8 d-flex justify-content-center flex-column mb-5'>
              <p className='text-secondary font-weight-light fs-4'>{displayBrand}</p>
              <h1 className='display-1 text-white'>{displayTitleLineOne}<br/>{displayTitleLineTwo}</h1>
              <Nav />
            </div>
            <div className='col-2'>
              {/* spacing only */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


