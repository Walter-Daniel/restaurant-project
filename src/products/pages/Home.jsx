
import { useAuth } from '../../context/AuthContext';
import { Card } from 'antd';
import React from 'react';
import { Hero } from '../components/home/Hero';

const { Meta } = Card;

export const Home = () => {
 

  return(
     <div className="main">
      <Hero />
     </div>
  )
}
