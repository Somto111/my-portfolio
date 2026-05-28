import { useState } from "react";
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (  
    <div className='bg-white text-[#ffe0e0] font-sans relative overflow-hidden'>

      {/* ── Nav ── */}
      <nav className='fixed top-0 left-0 flex justify-between items-center px-12 py-5 w-full z-50 bg-[#0f0a0a]/80 backdrop-blur-md border-b border-red-900/20'>
        <p className='font-serif font-bold text-red-500 text-sm tracking-[0.18em] uppercase'>
          Medical Storyteller
        </p>
        <ul className='hidden flex gap-8 text-[13px] font-light text-[#b08080] tracking-wide'>
          <li className='hover:text-white transition-colors cursor-pointer'>Home</li>
          <li className='hover:text-white transition-colors cursor-pointer'>About</li>
          <li className='hover:text-white transition-colors cursor-pointer'>Services</li>
          <li className='hover:text-white transition-colors cursor-pointer'>Contact</li>
        </ul>
        <button className='hidden bg-red-500 hover:bg-red-400 text-white text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full transition-colors'>
          Sign Up
        </button>

        <button
          className='md:hidden relative w-8 h-8'
          onClick={() => setIsOpen(!isOpen)}
        >

          {/* TOP LINE */}
          <span
            className={`
              absolute left-0 top-1/2 h-[2px] w-8 bg-white
              transition-all duration-300
              ${isOpen ? "rotate-45" : "-translate-y-2"}
            `}
          ></span>

          {/* MIDDLE LINE */}
          <span
            className={`
              absolute left-0 top-1/2 h-[2px] w-8 bg-white
              transition-all duration-300
              ${isOpen ? "opacity-0" : ""}
            `}
          ></span>

          {/* BOTTOM LINE */}
          <span
            className={`
              absolute left-0 top-1/2 h-[2px] w-8 bg-white
              transition-all duration-300
              ${isOpen ? "-rotate-45" : "translate-y-2"}
            `}
          ></span>

        </button>

        {isOpen && (
        <div className='fixed top-20 left-0 w-full bg-[#140d0d] z-40 flex flex-col items-center gap-6 py-10 text-[#b08080] md:hidden'>

          <a href="#" className='hover:text-white transition-colors'>
            Home
          </a>

          <a href="#ABOUT" className='hover:text-white transition-colors'>
            About
          </a>

          <a href="#" className='hover:text-white transition-colors'>
            Services
          </a>

          <a href="#" className='hover:text-white transition-colors'>
            Contact
          </a>

          <button className='bg-red-500 hover:bg-red-400 text-white text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full transition-colors'>
            Sign Up
          </button>

        </div>
      )}

        
      </nav>

      {/* ── Hero ── */}
      <main className='grid md:grid-cols-2 min-h-screen pt-24 px-12 relative z-10'>

        {/* Left */}
        <div className='flex flex-col justify-center py-16 gap-0'>
          <p className='text-sm font-light text-[#b08080] tracking-[0.08em] mb-2'>Hello, I am</p>
          <p className='font-serif text-xl font-light italic text-[#ffe0e0] tracking-wide mb-2'>
            Nwachukwu Paschaleen
          </p>
          <h1 className='font-serif font-bold text-red-500 leading-none mb-7' style={{ fontSize: 'clamp(48px, 8vw, 80px)' }}>
            The Medical<br />
            <em className='font-serif font-light not-italic text-[#ffe0e0]' style={{ fontSize: '0.65em' }}>
              Storyteller
            </em>
          </h1>

          {/* Social Icons */}
          <div className='flex gap-3 mb-8'>
            {[
              { href: 'https://www.linkedin.com/in/paschaleen-nwachukwu ', label: 'LinkedIn', icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              { href: 'https://www.instagram.com/paschaleennwachukwu?utm_source=ig_web_button_share_sheet&igsh=M2M0Y2JmOTAyOA==', label: 'Instagram', icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4" className="fill-[#1a0e0e]"/><circle cx="17.5" cy="6.5" r="1" className="fill-[#1a0e0e]"/></svg> },
              { href: '#', label: 'Facebook', icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { href: 'https://www.youtube.com/results?search_query=paschaleen+nwachukwu', label: 'YouTube', icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0a0a"/></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} aria-label={label}
                className='w-9 h-9 rounded-full border border-red-900/40 flex items-center justify-center text-[#b08080] hover:text-red-500 hover:border-red-500/60 hover:bg-red-500/10 transition-all'>
                {icon}
              </a>
            ))}
          </div>

          <p className='text-sm font-light text-[#b08080] leading-relaxed max-w-md mb-9'>
            Helping girls and women understand their bodies without fear, shame, or confusion —
            through education, storytelling, and the Period Emergency Kit.
          </p>

          <div className='flex gap-4 items-center'>
            <button className='bg-red-500 hover:bg-red-400 text-white text-sm font-medium tracking-wide px-8 py-3.5 rounded-full transition-colors mt-3'>
              Pre-order Kit
            </button>
            <button className='border border-white/20 hover:border-white/40 text-[#ffe0e0] text-sm font-light tracking-wide px-8 py-3.5 rounded-full transition-colors'>
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className='flex gap-0 mt-14 pt-7 border-t border-red-900/20'>
            {[
              { num: '3K+', label: 'Girls Reached' },
              { num: '12+', label: 'School Talks' },
              { num: '1', label: 'Kit. Many Lives.' },
            ].map(({ num, label }, i) => (
              <div key={i} className={`pr-9 mr-9 ${i < 2 ? 'border-r border-red-900/20' : ''}`}>
                <div className='font-serif font-bold text-red-500 leading-none' style={{ fontSize: '42px' }}>{num}</div>
                <div className='text-[11px] font-light text-[#b08080] tracking-[0.1em] uppercase mt-1'>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className='flex items-center justify-center relative  md:bottom-25 mb-25 mt-10 md:mb-0'>
          <div className='absolute w-120 h-120 md:w-130 md:h-130 rounded-full border border-dashed border-red-900/15'></div>
          <div className='absolute w-110 h-110 md:w-120 md:h-120 rounded-full bg-[#241414] border border-red-900/20'></div>
          <div className='absolute  w-65 h-65 rounded-full bg-red-500/10 blur-[60px] right-10 top-10'></div>
          <div className='absolute w-30 h-30 rounded-full bg-red-500/10 blur-2xl left-5 bottom-15'></div>
          <img
            src={`${import.meta.env.BASE_URL}images/Paschaleen.jpeg`}
            alt="Paschaleen"
            className='relative z-10 w-70 h-105 md:w-80 md:h-110 object-cover object-top  rounded-[140px_140px_50%_50%] border border-red-900/20'
          />
        </div>
      </main>

      {/* ── Why Cards ── */}
      <section className='relative z-10 px-12 pb-16 grid md:grid-cols-3 gap-4 -mt-4'>
        {[
          { num: '01', head: "Periods don't always give warnings", body: "A sudden flow can happen in class, at work, in church, or while travelling." },
          { num: '02', head: "Preparedness protects confidence", body: "The right pouch helps girls and women avoid panic, shame, and confusion." },
          { num: '03', head: "Education makes it better", body: "Every kit comes with simple guidance, not just products." },
        ].map(({ num, head, body }) => (
          <div key={num} className='bg-[#1a0e0e] border border-red-900/25 rounded-2xl p-7'>
            <div className='font-serif font-bold text-red-500 text-4xl mb-4'>{num}</div>
            <p className='font-serif text-[17px] font-semibold text-[#ffe0e0] leading-snug mb-3'>{head}</p>
            <p className='text-[13px] font-light text-[#b08080] leading-relaxed'>{body}</p>
          </div>
        ))}
      </section>

      {/* ── About Me ── */}
      <section id="ABOUT" className='border-t border-red-900/20  Z-10 bottom-0 '>
        <h1 className="font-serif font-black text-red-400 text-center text-4xl mb-2 mt-5">About me</h1>
        <p className="text-sm mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


        <div className='grid md:grid-cols-2 md:min-h-dvh relative z-10 md-gap-0'>
          <div className='hidden md:flex items-end justify-center relative right-0.5 lg:right-10 md:h-full mt-10 md:mt-0'>
              <div className='absolute w-120 h-120 md:w-120 md:h-150 rounded-b-none rounded-t-full border border-dashed border-red-900/15'></div>
              <div className='absolute w-110 h-110 md:w-110 md:h-140 rounded-b-none rounded-t-full bg-[#241414] border  border-red-900/20'></div>
              <div className='absolute  w-65 h-65 rounded-full bg-red-500/10 blur-[60px] right-10 top-10'></div>
              <div className='absolute w-30 h-30 rounded-full bg-red-500/10 blur-2xl left-5 bottom-15'></div>
              <img
                src={`${import.meta.env.BASE_URL}images/paa.JPG`}
                alt="Paschaleen"
                className='relative z-10 w-70 h-105 md:w-80 md:h-120 object-cover object-top rounded-b-none rounded-t-full border border-red-900/20'
              />
          </div>


          <div className='flex p-4 '>
            <p className="max-w-xl text-[20px] md:text-[18px] md:p-5 font-light text-[#b08080] leading-relaxed text-left">
              Paschaleen is a passionate advocate for menstrual health and education. With years of experience in community outreach, she has dedicated her life to ensuring that every girl has access to the resources and knowledge they need to manage their periods with confidence and dignity.
              She is a graduate of Nnamdi Azikiwe University where she studied Medical laboratory science. Her journey into menstrual health advocacy began when she noticed the lack of resources and the knowledge gap surrounding menstruation in yournger girls and some adults.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur laborum facilis blanditiis vel qui nulla impedit dignissimos. Porro, officia. Possimus voluptas consequatur quibusdam quisquam placeat eos accusamus beatae et?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error consequuntur laborum facilis blanditiis vel qui nulla impedit dignissimos. Porro, officia. Possimus voluptas consequatur quibusdam quisquam placeat eos accusamus beatae et?
            </p>
          </div>

        
        </div>
      </section>
      
      {/*-- Outreach Section --*/}  
      <section className='relative z-10 px-12 py-16 border-t border-red-900/20'>
        <h1>Outreach</h1>
      </section>

      {/* ── Product Section ── */}
      <section className='relative z-10 px-12 py-16 border-t border-red-900/20'>
        <p className='text-red-500 text-xs tracking-[0.2em] uppercase mb-3'>The Product</p>
        <h2 className='font-serif font-bold text-[#ffe0e0] text-4xl mb-4'>Introducing the<br /><em className='text-red-500 font-light not-italic'>Period Emergency Kit</em></h2>
        <p className='text-[14px] font-light text-[#b08080] leading-relaxed max-w-xl mb-12'>
          A simple, beautiful, portable pouch packed with basic period essentials for unexpected flow moments.
          Designed for school bags, handbags, lockers, travel bags, and office drawers.
        </p>

        <div className='bg-[#1a0e0e] border border-red-900/25 rounded-2xl p-8 w-2xl'>
          <p className='text-xs tracking-[0.15em] uppercase text-[#b08080] mb-2'>Kit preview</p>
          <h3 className='font-serif font-bold text-[#ffe0e0] text-2xl mb-6'>Starter Emergency Pouch</h3>
          <div className='grid grid-cols-5 gap-3 mb-8'>
            {['Pad', 'Pad', 'Pad', 'Pad', 'Pad'].map((item, i) => (
              <div key={i} className='bg-[#241414] border border-red-900/30 rounded-xl p-4 flex flex-col items-center gap-2'>
                <svg width="28" height="36" viewBox="0 0 28 36" className='opacity-60'>
                  <path d="M14 2C8 2 4 8 4 16L4 26C4 31 8 34 14 34C20 34 24 31 24 26L24 16C24 8 20 2 14 2Z" fill="#e63946" opacity="0.3"/>
                  <rect x="9" y="17" width="10" height="2" rx="1" fill="#e63946" opacity="0.6"/>
                  <rect x="10" y="21" width="8" height="1.5" rx="0.75" fill="#e63946" opacity="0.5"/>
                  <rect x="10" y="24" width="8" height="1.5" rx="0.75" fill="#e63946" opacity="0.5"/>
                </svg>
                <p className='text-[10px] text-[#b08080] font-light'>Sanitary Pad</p>
              </div>
            ))}
          </div>
          <button className='border border-red-500/40 text-red-400 text-xs tracking-[0.1em] uppercase px-6 py-2.5 rounded-full hover:bg-red-500/10 transition-colors'>
            View Demo
          </button>
        </div>
      </section>

      {/* ── Interactive Section ── */}
      <section className='relative z-10 px-12 py-16 border-t border-red-900/20'>
        <p className='text-red-500 text-xs tracking-[0.2em] uppercase mb-3'>Interactive</p>
        <h2 className='font-serif font-bold text-[#ffe0e0] text-3xl mb-3'>
          Tap each item to learn<br />why it belongs in the kit.
        </h2>
        <p className='text-sm font-light text-[#b08080] max-w-lg'>
          This section shows how the final website can explain each item in a friendly
        </p>
      </section>

      {/* ── Contact Form ── */}
      <section className='relative z-10 px-12 py-16 border-t border-red-900/20'>
        <p className='text-red-500 text-xs tracking-[0.2em] uppercase mb-3'>Get in Touch</p>
        <h2 className='font-serif font-bold text-[#ffe0e0] text-3xl mb-10'>Let's work together</h2>

        <div className='bg-[#1a0e0e] border border-red-900/25 rounded-3xl p-8 max-w-lg'>
          <div className='flex flex-col gap-4'>
            <div>
              <label className='block text-xs font-medium text-[#b08080] tracking-wide uppercase mb-2'>Name</label>
              <input type="text" placeholder='Your name'
                className='w-full bg-[#0f0a0a] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-[#ffe0e0] placeholder-[#5a3a3a] focus:outline-none focus:border-red-500/60 transition-colors' />
            </div>
            <div>
              <label className='block text-xs font-medium text-[#b08080] tracking-wide uppercase mb-2'>Phone number</label>
              <input type="text" placeholder='Your phone number'
                className='w-full bg-[#0f0a0a] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-[#ffe0e0] placeholder-[#5a3a3a] focus:outline-none focus:border-red-500/60 transition-colors' />
            </div>
            <div>
              <label className='block text-xs font-medium text-[#b08080] tracking-wide uppercase mb-2'>Email</label>
              <input type="email" placeholder='Your email'
                className='w-full bg-[#0f0a0a] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-[#ffe0e0] placeholder-[#5a3a3a] focus:outline-none focus:border-red-500/60 transition-colors' />
            </div>
            <div>
              <label className='block text-xs font-medium text-[#b08080] tracking-wide uppercase mb-2'>I want to</label>
              <select className='w-full bg-[#0f0a0a] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-[#ffe0e0] focus:outline-none focus:border-red-500/60 transition-colors appearance-none'>
                <option>Pre-order a kit</option>
                <option>Book a school talk</option>
                <option>Request Bulk order</option>
                <option>Partner with Us</option>
              </select>
            </div>
            <div>
              <label className='block text-xs font-medium text-[#b08080] tracking-wide uppercase mb-2'>Message</label>
              <textarea placeholder='Tell us what you need'
                className='w-full bg-[#0f0a0a] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-[#ffe0e0] placeholder-[#5a3a3a] h-32 resize-none focus:outline-none focus:border-red-500/60 transition-colors'></textarea>
            </div>
            <button className='bg-red-500 hover:bg-red-400 text-white font-medium text-sm tracking-wide py-3.5 rounded-full transition-colors mt-2'>
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='relative z-10 px-12 py-12 border-t border-red-900/20 flex justify-between items-end'>
        <div>
          <p className='font-serif font-bold text-red-500 text-lg tracking-[0.1em] uppercase mb-2'>The Medical Storyteller</p>
          <p className='text-sm font-light text-[#b08080] max-w-sm'>
            Helping girls and women understand their bodies without fear, shame, or confusion.
          </p>
        </div>
        <p className='text-xs text-[#5a3a3a]'>© 2025 Nwachukwu Paschaleen</p>
      </footer>

    </div>
  )
}

// Reusable pad SVG blob
function PadBlob({ className }) {
  return (
    <svg className={className} width="100" height="130" viewBox="0 0 100 130" fill="none">
      <path d="M50 5C25 5 10 25 10 55L10 90C10 112 28 125 50 125C72 125 90 112 90 90L90 55C90 25 75 5 50 5Z" fill="#e63946"/>
      <rect x="30" y="60" width="40" height="4" rx="2" fill="#ff8fa3" opacity="0.7"/>
      <rect x="35" y="70" width="30" height="3" rx="1.5" fill="#ff8fa3" opacity="0.5"/>
      <rect x="35" y="78" width="30" height="3" rx="1.5" fill="#ff8fa3" opacity="0.5"/>
      <rect x="35" y="86" width="30" height="3" rx="1.5" fill="#ff8fa3" opacity="0.5"/>
      <rect x="35" y="94" width="30" height="3" rx="1.5" fill="#ff8fa3" opacity="0.5"/>
      <line x1="50" y1="5" x2="50" y2="20" stroke="#ff8fa3" strokeWidth="2" opacity="0.6"/>
      <line x1="44" y1="14" x2="56" y2="14" stroke="#ff8fa3" strokeWidth="2" opacity="0.6"/>
    </svg>
  )
}

export default App