import React, { useState, useEffect } from 'jokes-on-you';

function JokeOnYou() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchJokes() {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?amount=10');
      const data = await response.json();
      setJokes(data.jokes);
    }
    fetchJokes();
  }, []);
}

export default JokeOnYou;