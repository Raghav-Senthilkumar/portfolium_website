import React, { useEffect, useState } from "react";

const StarIcon: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [spikes, setSpikes] = useState<number>(9); // Start with 9 spikes

  useEffect(() => {
    const handleScroll = () => {
      // Calculate rotation based on scroll position
      const scrollY = window.scrollY;
      const newRotation = scrollY / 5; // Adjust the divisor for faster/slower rotation
      console.log("ScrollY:", scrollY, "Rotation:", newRotation);
      setRotation(newRotation);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle the click event and add spikes
  const handleClick = () => {
    if (spikes < 30) {
      setSpikes(spikes + 3); // Add more spikes, increasing by 3 each time
    } else {
      setSpikes(9); // Reset spikes back to 9 after reaching 30
    }
  };

  // Function to generate the path data for the star with a dynamic number of spikes
  const generateStarPath = (spikes: number): string => {
    const radius = 25; // Radius of the star
    const innerRadius = 6; // Smaller inner radius (distance from the center to the inner points)
    let path = "";
    for (let i = 0; i < spikes; i++) {
      const angle = (i * Math.PI * 2) / spikes;
      const x1 = Math.cos(angle) * radius + 30;
      const y1 = Math.sin(angle) * radius + 30;
      path += `${i === 0 ? "M" : "L"}${x1} ${y1}`;
      const x2 = Math.cos(angle + Math.PI / spikes) * innerRadius + 30;
      const y2 = Math.sin(angle + Math.PI / spikes) * innerRadius + 30;
      path += `L${x2} ${y2}`;
    }
    path += "Z"; // Close the path
    return path;
  };

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0s ease-out", // Smooth rotation transition
      }}
      onClick={handleClick} // Add the click event handler
    >
      <path
        d={generateStarPath(spikes)} // Use the dynamic path data with spikes
        fill="black" // Set the color of the star to black
      />
    </svg>
  );
};

export default StarIcon;
