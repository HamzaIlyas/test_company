import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => (
  <footer className="bg-charcoal border-t border-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">Folvix</h3>
          <p className="text-slate-400">
            Innovation in technologies with advanced futuristic designs and solutions.
          </p>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Folvix Inc. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-slate-400 hover:text-plasma-violet transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map(({ href, icon, name }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-plasma-violet transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-slate-400 mt-4">contact@folvix.com</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
