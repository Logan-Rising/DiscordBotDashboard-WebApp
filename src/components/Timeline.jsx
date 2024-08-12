import React from 'react';

const Timeline = () => {
  const events = [
    { date: 'April 2021', title: 'Discord Bot Project Started' },
    { date: 'July 2023', title: 'Mobile App Produced' },
    { date: 'July 2023', title: 'DiscordBot v2.0 Released' },
    { date: 'May 2024', title: 'REST API Released' },
    { date: 'May 2024', title: 'Web App Released' },
    { date: 'August 2024', title: 'DiscordBot v3.0 Released'},
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-circle">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-title">{event.title}</div>
          </div>
          {index < events.length - 1 && <div className="timeline-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
