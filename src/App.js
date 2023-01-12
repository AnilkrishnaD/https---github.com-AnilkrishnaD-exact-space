import React, {useState} from 'react'
import {FaSmile} from 'react-icons/fa'
import Picker from 'emoji-picker-react'
import TextMsg from './components/TextMsg'
import Groupinfo from './components/Groupinfo'
import './App.css'

const App = () => {

  const usersList = ["Alan", "Bob", "Carol", "Dean", "Elin"]
  const [msgsList, setMsglist] = useState([])
  const [msg, setMsg] = useState('')
  const [isEmojiPicker, setEmojiPicker] = useState(false)

  const ontoggleEmoji = () => {
    setEmojiPicker(emojiPicker => !emojiPicker)
  }

  const onEmojiClick = (event, emojiObject) => {
    setMsg(prevMsg => prevMsg + emojiObject.emoji);
  }

  const updateLike = (uniqueId) => {
    const updatedList = msgsList.map(eachItem => {
      if (eachItem.id === uniqueId) {
        return {...eachItem, likes: eachItem.likes+ 1}
      }
      else {
        return eachItem
      }
    })
    setMsglist(updatedList)
  }


  // console.log(msg)
  
  const onClickSend = () => {
    let time = new Date().toLocaleTimeString('en-US', {hour12: false})
    let no = Math.floor(Math.random() * usersList.length)
    // console.log(no)
    
    const msgObject = {
      name: usersList[no],
      time: time,
      content: msg,
      id: msgsList.length,
      likes: 0

    }
    // console.log(msgObject)
    setMsglist(prevList => [...prevList, msgObject])
    setMsg('')

  }
  // console.log(msgsList)




  return (
    <div className='app-container'>
     <div className='chat-box'>
      <Groupinfo />
      <hr />
      <div className='msgs-container'>
        
        {msgsList.map(eachItem => <TextMsg key={eachItem.id} details={eachItem} updateLike={updateLike}/>)}
        
        
        {isEmojiPicker && <Picker onEmojiClick={onEmojiClick} className="picker-container"/> }
      </div>
      
      
      <div className='input-button-container'>
        <div className='input-container'>
          <input value={msg} type="text" onChange={event => setMsg(event.target.value)} className='input-element' placeholder='Type tour Message here'/>
          <button type="button" className="button" onClick={ontoggleEmoji}><FaSmile className='smile'/></button>
        </div>
        <button type="button" className='send-button' onClick={onClickSend}>Send</button>
      </div>
        
     </div>
    </div>
  );
}

export default App