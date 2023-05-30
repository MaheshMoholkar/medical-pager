import React from "react"
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'

import {ChannelListContainer, ChannelContainer, Auth} from './components'

import './App.css'

const apiKey = 'e6saq9tspkuw'

const client = StreamChat.getInstance(apiKey)

const authToken = false

const App = () => {
  
  if(!authToken) return <Auth />

  return (
    <div className="app__wrapper">
    <Chat client={client} theme="team light">
      <ChannelListContainer></ChannelListContainer>
      <ChannelContainer></ChannelContainer>
    </Chat>
  </div>
  )
}

export default App;
