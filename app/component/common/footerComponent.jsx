import React from "react";
import FacebookIcon from "../icons/facebookicon";
import TwitterIcon from "../icons/twitter";
import YouTubeIcon from "../icons/youtube";
import RSSIcon from "../icons/rss";

const FooterComponent = () => {
  return (
    <div className="bg-gray-100 text-gray-700 w-full">
      <div className="flex flex-col items-center py-8">
        <a href="/business-solutions" className="text-blue-600 mb-4">
          View more business solutions
        </a>
        <div className="border-t border-gray-300 w-full max-w-4xl"></div>
        <div className="flex flex-wrap justify-center mt-4 space-x-4 text-sm">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/cookie-policy" className="hover:underline">
            Cookie Policy
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/california-privacy" className="hover:underline">
            Your California Privacy Choices
          </a>
          <a href="/user-agreement" className="hover:underline">
            User Agreement
          </a>
          <a href="/accessibility" className="hover:underline">
            Accessibility
          </a>
          <a href="/sitemap" className="hover:underline">
            Sitemap
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          &copy; TalentConnect.com
        </div>
        <div className="flex items-center mt-4 space-x-4 px-12">
          <span className="text-orange-600 font-semibold">TalentConnect</span>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a href="/rss-feed" target="_blank" rel="noopener noreferrer">
            <RSSIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
