import React, { useState, useRef, useEffect } from "react";

const HeaderNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const aboutLinks = [
    { label: "GitHub", href: "https://github.com/sanju311", iconSrc: "/links/github.png" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjusathya", iconSrc: "/links/linkedin2.png" },
    { label: "Portfolio", href: "https://portfolio-sanju-s.vercel.app/", iconSrc: "/links/portfolio.png" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="header-nav relative" ref={dropdownRef}>
      <div className="inline-block" style={{position: 'relative', display: 'inline-block'}}>
        <button
          className="fetch-button button-small"
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          About Me
        </button>
        <div className={`dropdown ${open ? 'show' : ''}`} role="menu" aria-label="About me links">
          <div className="flex items-center gap-2 p-2">
            {aboutLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center justify-center overflow-hidden rounded-lg p-2 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                aria-label={item.label}
                title={item.label}
              >
                <img
                  src={item.iconSrc}
                  alt=""
                  aria-hidden="true"
                  width={25}
                  height={25}
                  className="block h-8 w-8 rounded-md"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
