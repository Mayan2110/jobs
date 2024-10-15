import React from 'react'
import FacebookIcon from '../icons/facebookicon'
import TwitterIcon from '../icons/twitter'
import YouTubeIcon from '../icons/youtube'
import RSSIcon from '../icons/rss'

const FooterComponent= ()=> {
  return (
    <div class="bg-gray-100 text-gray-700 w-full">
      <div class="flex flex-col items-center py-8">
        <a href="#" class="text-blue-600 mb-4">
          View more business solutions
        </a>
        <div class="border-t border-gray-300 w-full max-w-4xl"></div>
        <div class="flex flex-wrap justify-center mt-4 space-x-4 text-sm">
          <a href="#" class="hover:underline">
            About
          </a>
          <a href="#" class="hover:underline">
            Cookie Policy
          </a>
          <a href="#" class="hover:underline">
            Privacy Policy
          </a>
          <a href="#" class="hover:underline">
            Your California Privacy Choices
          </a>
          <a href="#" class="hover:underline">
            User Agreement
          </a>
          <a href="#" class="hover:underline">
            Accessibility
          </a>
          <a href="#" class="hover:underline">
            Sitemap
          </a>
        </div>
        <div class="mt-4 text-sm text-gray-500">&copy;TalentConnect.com</div>
        <div class="flex items-center mt-4 space-x-4 px-12">
        <span class="text-orange-600 font-semibold">TalentConnect</span>
          <TwitterIcon />
          <YouTubeIcon/>
          <FacebookIcon />
          <RSSIcon />
        </div>
      </div>
    </div>
  );
}
export default FooterComponent;
