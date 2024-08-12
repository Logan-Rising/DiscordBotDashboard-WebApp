import React, {useState} from 'react'
import Timeline from './Timeline'

function AboutThisProject() {
    
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>About This Project</h3>
        </div>
        <ul>
            <li>Started in 2021 to learn JavaScript by creating a Discord Bot</li>
            <li>Expanded the bot's capabilities to include admin commands, image commands, and games like Hangman and Tic-Tac-Toe</li>
            <li>Initially used JSON for data storage, then migrated to Google Firestore for cloud database functionality</li>
            <li>Made the project open source with a public repository for wider use</li>
            <li>Implemented server-independent message filtering, optimizing database reads with caching</li>
            <li>Developed an admin dashboard and REST API for monitoring bot performance</li>
            <li>Planning future enhancements and features for the project</li>
        </ul>

        <h3>Timeline</h3>
        <Timeline/>
    </main>
  )
}

export default AboutThisProject