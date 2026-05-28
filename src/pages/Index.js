import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Khalvai Ozbek's personal website. A Reaseacher and Exploered in the field of Software Engineering and Architecture.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About me</Link>
          </h2>
          <p className="home-about-me">
            Backend Developer with +4 years of experience building scalable
            TypeScript and Node.js systems, specialising in Domain-Driven Design
            and Clean Architecture. Experienced in translating complex
            architectural concepts into practical solutions, both in production
            systems and through workshops on software design and clean code for
            developer communities and universities.{' '}
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
