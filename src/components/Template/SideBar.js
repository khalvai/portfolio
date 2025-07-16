import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Khalvai Ozbek</h2>
        <p>
          <a href="mailto:khalvaiozbek@gmail.com">khalvaiozbek@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Khalvai. I am a{' '}
        <a href="https://vru.ac.ir/en/">Vali-e-Asr University</a> graduate,
        Rafsanjan , and a software engineer at{' '}
        <a href="https://inteliak.ai"> Intelika</a>. Previously, I was an
        engineer at <a href="https://nobati.app"> Nobati.app</a>, and enthusiast of
        reading and exploring new topics.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
