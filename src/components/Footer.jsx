import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="px-36 py-10 mt-20">
      <div className="flex items-center justify-between text-xl font-medium">
        <div className="">
          <div className="flex items-center gap-x-10">
            <img
              src="/images/header/logo.png"
              alt=""
              className="w-[260px] h-[76px]"
            />
            <Link to="/">ĐIỀU KIỆN & CHÍNH SÁCH</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-10">
          <Link to="/">FACEBOOK</Link>
          <Link to="/">YOUTUBE</Link>
          <Link to="/">TWITTER</Link>
          <Link to="/">LINKEDIN</Link>
        </div>
      </div>
      <div className='w-3/5 text-justify text-base font-light mt-10'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
          purus mattis nulla porttitor, ut convallis libero cursus. Maecenas
          faucibus eu arcu sit amet commodo. Nam posuere nunc quis aliquet
          laoreet. Nam lacinia neque vel ultrices facilisis. Proin lobortis
          felis tortor, ac cursus metus luctus eu. Vivamus erat velit, blandit
          ut elementum in, mollis at tortor. Nulla vel dignissim nunc,
          vestibulum tristique libero. Aliquam et arcu at dolor vulputate mollis
          quis at massa. Pellentesque at nulla varius, pulvinar dui ut,
          venenatis odio. Nullam purus libero, lacinia nec malesuada euismod,
          tristique vel est.
        </p>
      </div>
    </div>
  );
}
