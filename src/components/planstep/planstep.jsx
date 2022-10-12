import '../planstep/planstep.css'
import Textcomponent from '../text/text';
import StepProgress from '../progressbar/progressbar';
import LogoComponent from '../logo/logo';
import Plancomponent from '../plan/plan'
const Planstep = () => {
  return (
    <div className='plansptepWrap container'>
        <LogoComponent/>
        <StepProgress percentValue={83}/>
        <Textcomponent text1="How are you planning to use Eren?" text2="We wil stremline your setup expreience accordingly"/>
        <Plancomponent/>
    </div>
  )
}

export default Planstep