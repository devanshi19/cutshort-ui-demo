import '../welcome/welcome.css'
import Textcomponent from '../text/text';
import Formcomponent from '../form/form';
import StepProgress from '../progressbar/progressbar';
import LogoComponent from '../logo/logo'

const Welcome = () => {
  const formObj = {
    input1: "Full Name",
    input2:"Display Name",
    placeholder1:"Eren Yerger",
    placeholder2:"Eren",
    navigateUrl : "/workspace"
  }
 
  return (
      <div className='welcomeWrap container'>
          <LogoComponent/>
          <StepProgress percentValue={15}/>
          <Textcomponent text1="Welcome ! First things First....." text2="You can always change them letter" />
          <Formcomponent {...formObj}/>
      </div>
  )
}

export default Welcome
