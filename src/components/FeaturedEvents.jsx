import React, { useMemo } from 'react';
import { MapPin, Calendar } from 'lucide-react';

// Simple featured mock data for the landing view
const MOCK_EVENTS = [
  {
    id: 'evnt_001',
    title: 'Hologram Beats Festival',
    date: '2025-12-05',
    location: 'Berlin, DE',
    category: 'Music',
    img: 'https://images.unsplash.com/photo-1514512364185-4c2b4c52f34e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'evnt_002',
    title: 'Next‑Gen Dev Summit',
    date: '2025-08-21',
    location: 'Austin, TX',
    category: 'Tech',
    img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'evnt_003',
    title: 'Immersive Art Night',
    date: '2025-07-12',
    location: 'Tokyo, JP',
    category: 'Art',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'evnt_004',
    title: 'Quantum Sports Expo',
    date: '2025-09-02',
    location: 'London, UK',
    category: 'Sports',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          loading="lazy"
          className="h-full w-full transform object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="space-y-2 p-4 text-white">
        <h3 className="line-clamp-1 text-lg font-semibold">{event.title}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-1"><Calendar size={16} /> {new Date(event.date).toLocaleDateString()}</span>
          <span className="inline-flex items-center gap-1"><MapPin size={16} /> {event.location}</span>
          <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-cyan-300">{event.category}</span>
        </div>
      </div>
    </div>
  );
};

const FeaturedEvents = ({ query, date, category }) => {
  const filtered = useMemo(() => {
    return MOCK_EVENTS.filter((e) => {
      const matchesQuery = !query || e.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || category === 'All' || e.category === category;
      const matchesDate = !date || e.date === date;
      return matchesQuery && matchesCategory && matchesDate;
    });
  }, [query, date, category]);

  return (
    <section className="mx-auto mt-10 w-full max-w-7xl px-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Featured upcoming events</h2>
          <p className="text-sm text-white/60">Hand‑picked events you might like</p>
        </div>
        <a href="#" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">View all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-lg border border-white/10 bg-white/5 p-8 text-center text-white/70">
            No events match your filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedEvents;
