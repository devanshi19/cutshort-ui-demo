import '../form/form.css'
import {useNavigate} from 'react-router-dom';
const Form = ({input1,input2,placeholder1,placeholder2,navigateUrl}) => {
  const navigate = useNavigate();
  return (
      <div className="formWrap">
        <form className='form'>
            <div className="formelement">
                <label>{input1}</label>
                <input type="text" name="name" className='form-control text-capitalize' placeholder={placeholder1}/>
            </div>
            <div className="formelement">
                <label>{input2}</label>
                <input type="text" name="name" className='form-control' placeholder={placeholder2}/>
            </div>
            <div className="formBtn">
                  <input type="submit" value="Create workplace" className='btn btn-primary' onClick={()=>{navigate(navigateUrl)}}/>
            </div>
            </form>
      </div>
  )
}

export default Form
