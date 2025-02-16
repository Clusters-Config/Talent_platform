import React, { useEffect, useRef } from "react";
import { FaCog, FaBullhorn, FaCode, FaGlobe, FaAddressCard, FaWaveSquare, FaAffiliatetheme } from "react-icons/fa";

const categories = [
  { name: "Engineering", icon: <FaCog /> },
  { name: "Marketing", icon: <FaBullhorn /> },
  { name: "Development", icon: <FaCode /> },
  { name: "Digital", icon: <FaGlobe /> },
  { name: "Consultancy", icon: <FaAddressCard/>},
  { name: "Social Media", icon: <FaWaveSquare/>},
  { name: "Hardware", icon: <FaAffiliatetheme/>}
];

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const clone = marquee.cloneNode(true);
    marquee.parentElement.appendChild(clone);
  }, []);

  return (
    <div className="marquee-wrapper">
      <div className="marquee" ref={marqueeRef}>
        {categories.concat(categories).map((category, index) => (
          <div key={index} className={`marquee-item `}>
            {category.icon} <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
