import React, { useState, useRef, useEffect } from "react";

const HeaderNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        <button className="fetch-button button-small" onClick={() => setOpen((prev) => !prev)}>
          About Us
        </button>
          <div className={`dropdown ${open ? 'show' : ''}`} >
            <a
              href="http://github.com/sanju311"
              className="text-red-500 px-4 py-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sanju
            </a>
            <a
              href="https://github.com/parth-aga12"
              className="text-red-500 px-4 py-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Parth 
            </a>
          </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
