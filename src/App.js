import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Slider from './Slider';

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            data.map((data)=>{
              return <SingleQuestion key={data.id} {...data} />
            })
          }
        </section>
        <Slider/>
      </div>
    </main>
  );
}

export default App;
