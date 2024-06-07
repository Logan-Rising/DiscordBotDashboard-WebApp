import React, {useState} from 'react'
import Timeline from './Timeline'

function AboutThisProject() {
    
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h1>About This Project</h1>
        </div>
        <h3>
            This project was first started in 2021 as a way to learn a little bit more about Javascript.  I learned a Discord Bot could be 
            made entirely with Javascript so I pursued that path.  It seems lame to talk about the making of a Discord Bot, but I've been able
            to take this project farther than I had ever imagined, and create an ecosystem of applications.  
            I had already been using Discord for several years as a way to communicate with
            friends and even for school for one of my classes, so this was the perfect path.  My version of a Discord Bot started out extremely simple and just sent some messages
            here and there.  As I started playing around with Javascript and Discord JS, I learned about how far I could take the Discord Bot.  
            I started with some basic admin commands like kicking and banning people from Discord servers, but quickly moved to image commands due to Node Js' ability to execute
            File System I/O.  I then moved to implementing games.  I had previously been assigned a project in my college classwork to program Hangman and Tic-Tac-Toe in Java.  
            With the algorithms already in hand, it was a simple language conversion to get them up and running, along with some styling for users to play the game.  With the 
            influx of supported commands and users, I decided to start tracking data that the Discord Bot was experiencing such as number of messages read and commands being used,
            etc. My initial approach included using json to store and read information, given Node JS' file system capabilities.  This worked and was a very rigid and robust way
            of storing data.  However, with my curiosity growing and my need for more knowledge expanding, I took up learning React Native and mobile app development.  With a bit
            of research and trial and erorr, I finalized my decision on Google Firestore as my cloud database.  Being in college and having expenses made me want to keep the cost
            as low as possible, in this case $0.  There is some caveats such as being limited on the number of reads and writes per day, etc, but it was going to work for my purposes.
            After quite some time and a lot of work I transitioned to Cloud Firestore and began tracking all sorts of data.  As of recently, I even started tracking data daily for 
            daily analysis.  There is just so much I can do with this project.  As the Discord Bot has become more advanced, there is a need to keep pushing it further. At this point
            I wanted to allow anyone to be able to use my Discord Bot so I made the repository pulbic and made a config.js file along with some scripts so that anyone could
            clone the code base and use it. That may seem like something simple I did, but trust me, it was a lot of work.  I then began down
            the trail of message filtering.  This would allow messages to be filtered and potentially deleted should they contained information not intended.  This was simple enough,
            but I wanted to make it server independent.  This means storing the filter list for each server, and that means a lot of database reads.  With only so many reads on the
            free plan, I had to come up with a solution.  If you recall earlier, I talked about storing data in json format.  What I ended up doing was taking the idea of caching 
            and implementing it with this project.  Each time the Discord Bot starts up, I read all of the server data from the Cloud Firestore database and store it locally.  This
            cuts reads down to the initial startup reads, which when the bot is running for extended amounts of time, is negligible.  With this idea of caching in mind, there are
            so many reads able to be saved.  With all these reads available, I began to think, hey I could use all these reads to create some sort of admin dashboard, and that is 
            what you're looking at now.  I created this website, that anyone can look at, and see how the Discord Bot is doing. I created a REST API so that data could be 
            read without exposing the Firebase Config, and with a little elbow grease, this website was born.  That is currently where the project is at.  I have several things 
            planned for the future, so stay tuned!
        </h3>

        <h1>Timeline</h1>
        <Timeline/>
    </main>
  )
}

export default AboutThisProject