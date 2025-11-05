import React from 'react';
import Spline from '@splinetool/react-spline';
import { Ticket, Calendar, MapPin } from 'lucide-react';

const Hero = ({ onExplore }) => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Ticket size={14} />
          <span className="tracking-wide">Futuristic ticketing made simple</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          Discover. Select. <span className="text-cyan-400">Attend</span>.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-white/80 md:text-base">
          Find unforgettable concerts, festivals, and conferences. Reserve seats in an interactive map and check out in seconds.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onExplore}
            className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-cyan-400"
          >
            Explore Events
          </button>
          <div className="flex items-center gap-4 text-xs text-white/80">
            <span className="inline-flex items-center gap-1"><Calendar size={14} /> Daily updates</span>
            <span className="inline-flex items-center gap-1"><MapPin size={14} /> Global venues</span>
          </div>
        </div>
      </div>

      {/* Soft gradient for legibility (does not block pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  );
};

export default Hero;
