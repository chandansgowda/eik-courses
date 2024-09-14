import { useEffect, useState } from 'react';

export default function Header() {
  const [typewriterText, setTypewriterText] = useState("Start Your Learning Journey Now.");

  useEffect(() => {
    fetch('/data/main.json')
      .then(response => response.json())
      .then(data => setTypewriterText(data.typewriter_text || "Start Your Learning Journey Now."))
      .catch(error => console.error('Error fetching JSON data:', error));
  }, []);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-8xl px-8 lg:px-8">
        <div className="mx-auto lg:mx-0 p-8 lg:p-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-amber-400 sm:text-6xl mb-4 lg:mb-6">
            <span className="typewriter">{typewriterText}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}


