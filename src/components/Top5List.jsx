import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 , TbCircleNumber5 } from "react-icons/tb";

const Top5List = ({ title, items }) => {
  const icons = [
    <TbCircleNumber1 />,
    <TbCircleNumber2 />,
    <TbCircleNumber3 />,
    <TbCircleNumber4 />,
    <TbCircleNumber5 />
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ margin: '10px 0' }}>{title}</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ marginRight: '10px', fontSize: '1.5rem' }}>{icons[index]}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top5List;
