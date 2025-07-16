import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Talks/Cell';
import data from '../data/Talks';

const Talks = () => (
  <Main title="Talks" description="Learn about Khalvai Ozbek's Talks.">
    <article className="post" id="Talks">
      <header>
        <div className="title">
          <h2>
            <Link to="/Talks">Talks</Link>
          </h2>
          <p>A selection of Talks that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Talks;
