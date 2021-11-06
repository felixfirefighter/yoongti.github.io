import React from 'react';
import './index.scss';

const About = () => {
  return (
    <div className="about">
      <div className="font-size-xl mb-2 text-black">About Me</div>
      <p className="mb-1">
        I enjoy working with the design team and product owner to build
        exceptional, user experience focused products. I am also a blockchain
        enthusiast who constantly explores the knowledge/technologies that
        evolve in the industry.
      </p>
      <p className="mb-1">
        I've had the opportunity to work at{' '}
        <a
          className="text-link"
          href="https://www.phonespeak.com/home"
          target="_blank"
          rel="noreferrer"
        >
          a startup
        </a>{' '}
        and{' '}
        <a
          className="text-link"
          href="https://www.tngdigital.com.my/"
          target="_blank"
          rel="noreferrer"
        >
          one of the biggest e-wallet company in Malaysia
        </a>
        . My main responsibility these days is to build an exceptional content
        delivery platform at{' '}
        <a
          className="text-link"
          href="https://www.bybit.com"
          target="_blank"
          rel="noreferrer"
        >
          Bybit
        </a>{' '}
        to increase our platform's user growth.
      </p>
      <p className='mb-1'>
        When I have the time, I write articles to post them on <a
          className="text-link"
          href="https://leeyoongti.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>. 
      </p>
      <p>Here are a few technologies that I've been using recently:</p>

      <div className="skills">
        <ul className="list-primary">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>NextJS</li>
          <li>GraphQL</li>
        </ul>
        <ul className="list-primary">
          <li>TypeScript</li>
          <li>Web3</li>
          <li>Solidity</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
