import { useEffect, useState } from 'react';

function Footer(): JSX.Element {
  const [footerText, setFooterText] = useState('');

  useEffect(() => {
    fetch('/data/main.json')
      .then((response) => response.json())
      .then((data) => setFooterText(data.website_name || 'Engineering ಕನ್ನಡದಲ್ಲಿ™'))
      .catch((error) => console.error('Error fetching JSON data:', error));
  }, []);

  return (
    <footer className="bg-gray-900 w-full pt-6 pb-4">
      <div className="w-full mx-auto max-w-screen-xl text-center">
        <span className="text-sm text-amber-400">
          © 2024{" "}
          <a href="/" className="hover:underline hover:text-amber-300">
            {footerText}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
