import React from 'react';
import Nav from './nav';
import './HomePage.css';

const HomePage = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum eu facilisis sed odio. Ullamcorper eget nulla facilisi etiam. Risus pretium quam vulputate dignissim suspendisse. Mi bibendum neque egestas congue quisque egestas diam in. Quis auctor elit sed vulputate mi sit amet mauris. Quam quisque id diam vel quam elementum.';
  const text2 = 'Vitae ultricies leo integer malesuada nunc. Nam at lectus urna duis. Integer feugiat scelerisque varius morbi. Tortor posuere ac ut consequat semper viverra nam libero. Pretium vulputate sapien nec sagittis aliquam. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci.Fames ac turpis egestas sed. Fames ac turpis egestas sed tempus.';
  const welcome = 'Welcome to Math World!';

  return (
    <div>
      <Nav />
      <main>
        <h2>{welcome}</h2>
        <div className="text-container">
          <p>{text}</p>
          <p>{text2}</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
