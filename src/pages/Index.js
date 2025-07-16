import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Khalvai Ozbek's personal website. Rafsanjan based Stanford ICME graduate">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About me</Link>
          </h2>
          <p className="home-about-me">
            I am a software engineering student passionate about reading and
            exploring new concepts. I am excited to share knowledge with those
            who are interested. I have conducted workshops on the principles of
            software engineering, sharing insights and engaging in discussions
            with participants who are eager to learn.
          </p>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/Talks">Talks</Link>, view{' '}
        <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
