function Footer(): JSX.Element {
    return (
      <>
        <footer className="bg-black rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
            <span className="text-sm text-amber-400 sm:text-center">
              © 2024{" "}
              <a href="/" className="hover:underline hover:text-amber-300">
               Engineering ಕನ್ನಡದಲ್ಲಿ™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  