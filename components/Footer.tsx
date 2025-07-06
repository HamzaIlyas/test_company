
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Footer = () => {
  const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-plasma-violet transition-colors duration-300">
      {children}
    </a>
  );
  
  return (
    <footer className="bg-charcoal border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white">Folvix</h3>
            <p className="text-slate-400">Innovation in technologies with advanced futuristic designs and solutions.</p>
            <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Folvix Inc. All Rights Reserved.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={`footer-${link.name}`}>
                  <Link to={link.path} className="text-slate-400 hover:text-plasma-violet transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03A4.5 4.5 0 0014.22 6c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.12 1.03-3.74-.19-7.06-1.98-9.28-4.7a4.5 4.5 0 001.39 6.02c-.68-.02-1.32-.21-1.88-.51v.06c0 2.22 1.58 4.07 3.68 4.5-.38.1-.78.15-1.19.15-.3 0-.58-.03-.86-.08.58 1.8 2.27 3.12 4.27 3.15a9.04 9.04 0 01-5.59 1.92c-.36 0-.72-.02-1.07-.06A12.79 12.79 0 008.28 22c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.35-.01-.53.8-.58 1.49-1.3 2.04-2.13z" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z" /></svg></SocialIcon>
            </div>
            <p className="text-slate-400 mt-4">contact@folvix.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
