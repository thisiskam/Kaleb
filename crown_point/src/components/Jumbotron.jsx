import './jumbotron.css'
import Nav from './Nav'

export default function Jumbotron() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid jumbotron-background">
        <div className='h-100 m-0 p-0 w-100'>
          <div className='row mt-3'>
            <div className='col-11 pr-1'>
              <p className='text-end fs-5 text-secondary'>5038870759</p>
            </div>
            <div className='col-1 p-0 mt-1'>
              <i class="bi bi-telephone-fill"></i>
            </div>
          </div>
          <div className='row h-100'>
            <div class="col-2"></div>
            <div className='col-8 d-flex justify-content-center flex-column mb-5'>
              <p className='text-secondary font-weight-light fs-4'>Crown Point Tile</p>
              <h1 className='display-1 text-white'>Excellence<br/>In Every Detail</h1>
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


