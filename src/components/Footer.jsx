import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-4 bg-gray-100">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Links */}
            <div className="flex space-x-5 text-gray-600 hover:text-black transition-all duration-300">
              <a
                href="https://github.com/chaitu-patil61102"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chaitali-patil-8a76b2338"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com/chaitu_61102?igsh=b2JpZ3Nrem91dTZx&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Footer Info */}
            <div className="mt-4 border-t border-gray-300 pt-3 text-center">
              <p className="text-xs text-gray-700">
                &copy; 2024 Chaitali Patil. All rights reserved.
              </p>
              {/* <p className="text-xs text-gray-600 mt-1">
                Supportive Partner ❤️ Ankush
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
