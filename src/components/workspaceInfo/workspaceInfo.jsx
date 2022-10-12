import '../workspaceInfo/workspaceinfo.css'
import Textcomponent from '../text/text';
import Formcomponent from '../form/form';
import StepProgress from '../progressbar/progressbar';
import LogoComponent from '../logo/logo'
const WorkspaceInfo = () => {
  const formObj = {
    input1: "Workspace Name",
    input2:"Workspace Url",
    placeholder1:"Eren ",
    placeholder2:"www.eren.com/",
    navigateUrl : "/plan"
  }
  return (
    <div className="welcomeinfoWrap container">
      <LogoComponent/>
      <StepProgress percentValue={50}/>
      <Textcomponent text1="Let's Set up a home for all your work" text2="You can always create another workspace letter" />
      <Formcomponent {...formObj}/>
    </div>
  )
}

export default WorkspaceInfo