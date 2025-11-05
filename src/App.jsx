import React, { useRef, useState } from 'react';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import FeaturedEvents from './components/FeaturedEvents';
import SiteFooter from './components/SiteFooter';

function App() {
  const exploreRef = useRef(null);
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('All');

  const scrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onExplore={scrollToExplore} />

      <div ref={exploreRef} className="relative z-20 -mt-16 pb-10">
        <SearchFilters
          query={query}
          setQuery={setQuery}
          date={date}
          setDate={setDate}
          category={category}
          setCategory={setCategory}
        />

        <FeaturedEvents query={query} date={date} category={category} />
      </div>

      <SiteFooter />
    </div>
  );
}

export default App;
