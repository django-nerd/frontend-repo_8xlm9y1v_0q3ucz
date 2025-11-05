import React from 'react';
import { Search, Calendar, Filter } from 'lucide-react';

const categories = ['All', 'Music', 'Tech', 'Art', 'Sports', 'Theatre'];

const SearchFilters = ({ query, setQuery, date, setDate, category, setCategory }) => {
  return (
    <div className="mx-auto -mt-10 w-full max-w-6xl rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        <div className="md:col-span-6">
          <label className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white">
            <Search size={18} className="text-white/80" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, artists, venues..."
              className="w-full bg-transparent text-sm placeholder-white/60 outline-none"
            />
          </label>
        </div>
        <div className="md:col-span-3">
          <label className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white">
            <Calendar size={18} className="text-white/80" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm outline-none [color-scheme:dark]"
            />
          </label>
        </div>
        <div className="md:col-span-3">
          <label className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white">
            <Filter size={18} className="text-white/80" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-slate-900">{c}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
