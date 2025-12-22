import React from 'react'

const Footer = () => {
  return (
    <div className='mt-25 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
      <h1 className='text-[11px] font-bold'>Copyright ©️ 2025, All right reserved | IndraDevlop</h1>
      <div className='flex items-center gap-4 mr-5'>
        <a href="https://github.com/IndraDevlop">
          <i className='ri-github-fill ri-1x'></i>
        </a>
        <a href="https://www.instagram.com/indrawansyah_21/">
          <i className='ri-instagram-fill ri-1x'></i>
        </a>
        <a href="https://facebook.com/indhra.onesyah">
          <i className='ri-facebook-fill ri-1x'></i>
        </a>
        <a href="https://www.youtube.com/channel/UCmGChed0Yi4h9gRM_5NGqtw">
          <i className='ri-youtube-fill ri-1x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer