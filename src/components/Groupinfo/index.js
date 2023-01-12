import {BsPeopleFill} from 'react-icons/bs'

import './index.css'


const Groupinfo = () => (
    <div className='group-data'>
        <div>
            <h1>Introductions</h1>
            <p>This channel is for company wide chatters</p>
        </div>
        <div className='people-container'>
            <p>3/100</p>
            <BsPeopleFill className='icon'/>
        </div>
        
    </div>
)

export default Groupinfo