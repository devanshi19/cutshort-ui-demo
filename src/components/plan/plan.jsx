import '../plan/plan.css';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import {useNavigate} from 'react-router-dom';
const Plan = () => {
const navigate = useNavigate();
  return (
    <>
    <div className="planwrap">
        <div className="leftwrap">
            <PersonIcon className='personIcon'/>
            <div className="planText">
                <h5 className='text-capitalize '>for myself</h5>
                <p>Writ letter.Think more clearly.Stay Organized</p>
            </div>
        </div>
        <div className="rightwrap">
            <PeopleIcon className='personIcon'/>
            <div className="planText">
                <h5 className='text-capitalize'>with my team</h5>
                <p>Wikies,docs ,tasks & projects all in one place</p>
            </div>
        </div>
    </div>
    <div className="formBtn">
    <input type="submit" value="Create workplace" className='btn btn-primary' onClick={()=>{navigate('/final')}}/>
    </div>
    </>
  )
}

export default Plan
