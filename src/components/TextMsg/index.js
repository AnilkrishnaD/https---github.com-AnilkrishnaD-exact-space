import {AiTwotoneLike} from 'react-icons/ai'
import './index.css'

const TextMsg = (props) => {
    const {details, updateLike} = props
    const {name, id, content, time, likes} = details
    const profile = name.slice(0, 2)
    // console.log(id)

    const onClikLike = () => {
        updateLike(id)
    }

    const showLikes = likes > 0 ? likes : null

    return (
        <li className='list-item'>
            <div className='profile-name'>
              <div className='profile-pic'>{profile}</div>
              <div>
               <p className="name">{name}<span className='time'>{time}</span></p>
              </div>
            </div>
            <div className='msg-like-container'>
              <p className='msg'>{content}</p>
              <button type='button' className="like" onClick={onClikLike}><AiTwotoneLike className='like-button'/><span className='likes-count'>{showLikes}</span></button>
            </div>
            
            
        </li>
    )

}

export default TextMsg