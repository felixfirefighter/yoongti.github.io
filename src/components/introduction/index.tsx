import React from 'react';
import Button from '../button';
import NavMenu from '../nav-menu';
import './index.scss';

const Introduction = () => {
  return (
    <>
      <div className="introduction text-primary section">
        <h1 className="font-size-xxl mb-2">
          Hi, my name is <span className="text-bold">Felix Lee</span>.
        </h1>
        <p className="font-size-lg mb-3">
          I'm a software engineer specializing in building exceptional web
          experience.
        </p>
        <div>
          <Button
            onClick={() =>
              (window.location.href = 'mailto:leeyoongti@gmail.com')
            }
            text="Say Hello"
          />
        </div>
        <div className="links">
          <a
            href="https://github.com/yoongti"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://leeyoongti.medium.com/"
            title="Medium"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-medium"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yoongtilee/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="text-gray">
          Reach me at <span className="text-link">leeyoongti@gmail.com</span> or
          download{' '}
          <a
            className="text-link"
            href="/Felix.pdf"
            target="_blank"
            rel="noreferrer"
          >
            my resume
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Introduction;
