import '../final/final.css'
import StepProgress from '../progressbar/progressbar';
import LogoComponent from '../logo/logo';
import CheckIcon from '@mui/icons-material/Check';
import Textcomponent from '../text/text';
const Final = () => {
  
  return (
    <div className="finalWrap container">
        <LogoComponent/>
        <StepProgress percentValue={100}/>
        <div className="iconWrap">
        <CheckIcon className='checkIcon'/>
        </div>
        <Textcomponent text1="Congraulations,Eren!!" text2="You have completed onboarding ,You can start using power"/>
        <div className="formBtn">
            <input type="submit" value="Create workplace" className='btn btn-primary'/>
        </div>
    </div>
  )
}

export default Final
