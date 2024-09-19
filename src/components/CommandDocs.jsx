import React, {useState} from 'react'
import Table from './Table'

function AboutThisProject() {
    const generalCommandData = [
        {column1: '8ball', column2: '&8ball <message>', column3: 'Recieve a randomly generated 8-ball phrase in response to a message'},
        {column1: 'dependencies', column2: '&dependencies', column3: 'Returns the packages used in the discord bot'},
        {column1: 'help', column2: '&help [command type or command name]', column3: 'This is a help command'},
        {column1: 'pfp', column2: '&pfp <@user or id>', column3: 'Fetches a users pfp and sends the image'},
        {column1: 'ping', column2: '&ping', column3: 'Pings a response'},
        {column1: 'specs', column2: '&specs', column3: 'Returns the specs of the computer that runs the discord bot'},
        {column1: 'suggestion', column2: '&suggestion <request>', column3: 'Submits a suggestion for the bot to be added/removed/changed'},
        {column1: 'translate', column2: '&translate <language>', column3: 'Reply to a message with this command to translate the message'},
    ];

    const gameCommandData = [
        {column1: 'hangman', column2: '&hangman', column3: 'Play hangman with a randomly generated word. Send a letter guess as a message. 2 minute time limit'},
        {column1: 'ttt', column2: '&ttt <@user>', column3: 'Play tic-tac-toe with another user with a 2 minute time limit'},
    ];

    const imageCommandData = [
        {column1: 'jotchua', column2: '&jotchua', column3: 'Send a random pic of jotchua the beloved'},
        {column1: 'meme', column2: '&meme [text color | !black or !white] <description>', column3: 'Makes a meme with text as in the decription when the command was ran. Uses image sent with the message or image from the message replied to'},
    ];

    const adminCommandData = [
        {column1: 'addfilteredword', column2: '&addfilteredword <word>', column3: 'Add a filtered word from this server\'s filtered word list'},
        {column1: 'ban', column2: '&ban <@user or user id>', column3: 'Ban a user from the server'},
        {column1: 'disablelogging', column2: '&disablelogging', column3: 'Disable logging for the current server'},
        {column1: 'getuserviolations', column2: '&getuserviolations <@user or user id>', column3: 'Get a user\'s current number of filter violations'},
        {column1: 'kick', column2: '&kick <@user or user id>', column3: 'Kick a user from the server'},
        {column1: 'mute', column2: '&mute <@user or user id>', column3: 'Mute a user in the server'},
        {column1: 'reactionrole', column2: '/reactionrole [role 1] [role 2] [role 3] [role 4] [role 5]', column3: 'Create a reaction role message to assign up to 5 roles to members'},
        {column1: 'removefilteredword', column2: '&removefilteredword <word>', column3: 'Remove a filtered word from this server\'s filtered word list'},
        {column1: 'resetfilteredwordslist', column2: '&resetfilteredwordslist', column3: 'Reset the filtered word list to an empty list'},
        {column1: 'resetuserviolations', column2: '&resetuserviolations ', column3: 'Reset a user\'s filter violations back to zero'},
        {column1: 'setdefaultfilteredwords', column2: '&setdefaultfilteredwords', column3: 'Set this server\'s filtered word list to the default list. Use &viewdefaultfilteredwordlist to view the default filtered words'},
        {column1: 'setfiltersettings', column2: '&setfiltersettings <true/false>', column3: 'Set the filter settings for this server'},
        {column1: 'setfilterviolationsmax', column2: '&setfilterviolationsmax <number>', column3: 'Set the violations limit before punishment is enforced'},
        {column1: 'setlogchannel', column2: '&setlogchannel', column3: 'Run this command in the channel you want to set as the log channel for your server'},
        {column1: 'setpenalty', column2: '&setpenalty <mute, kick, ban>', column3: 'Set the penalty for a user going over the max filter violations. Either, mute, kick, or ban'},
        {column1: 'setuserviolations', column2: '&setuserviolations <@user or user id>', column3: 'Set the violations for a user'},
        {column1: 'unmute', column2: '&unmute <@user or user id>', column3: 'Unmute a user in the server'},
        {column1: 'viewdefaultfilteredwordslist', column2: '&viewdefaultfilteredwordslist', column3: 'View the default filtered word list'},
        {column1: 'setlogchannel', column2: '&setlogchannel', column3: 'Run this command in the channel you want to set as the log channel for your server'}
    ];
    
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>General Commands</h3>
        </div>
        <Table data={generalCommandData}/>
        <div className='main-title'>
            <h3>Game Commands</h3>
        </div>
        <Table data={gameCommandData}/>
        <div className='main-title'>
            <h3>Image Commands</h3>
        </div>
        <Table data={imageCommandData}/>
        <div className='main-title'>
            <h3>Admin Commands</h3>
        </div>
        <Table data={adminCommandData}/>
    </main>
  )
}

export default AboutThisProject