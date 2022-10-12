import '../logo/logo.css'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
const Logo = () => {
  return (
    <div className='logoWrap'>
      <div className="top">
              <EnergySavingsLeafIcon className='topIcon'/>
              <h5 className='text-capitalize text-black'>power</h5>
          </div>
    </div>
  )
}

export default Logo
