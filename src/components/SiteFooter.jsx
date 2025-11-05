import React from 'react';
import { Github, Twitter } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-white/70 md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} HoloTickets. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 hover:text-white">
            <Github size={18} /> GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-2 hover:text-white">
            <Twitter size={18} /> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
