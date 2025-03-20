import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Create a scroll-based transform for the horizontal movement of both the cards and the h1
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-94%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]); // Apply transparency

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-[90vh] items-center overflow-hidden">
        {/* Apply both horizontal scroll transform and opacity transform to the <h1> */}
        <motion.h1
          style={{ opacity }} // Apply opacity along with x-transform
          className="projects text-6xl font-bold text-white"
        >
          Projects
        </motion.h1>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="display-flex">
      <div
        key={card.id}
        className="group relative h-[450px] w-[600px] overflow-hidden bg-black rounded-2xl"
      >
        <img
          src={card.url}
          className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <a
        href={card.link} // Use the card's link for the clickable title
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security feature
        className="no-underline" // Remove underline
      >
        <div className="hover-text-container">
          <div className="hover-text primary-text">{card.title}</div>
          <div className="hover-text secondary-text">Check Out ↗</div>
        </div>
      </a>
    </div>
  );
};

export default Example;

// Updated CardType
type CardType = {
  url: string;
  title: string;
  id: number;
  link: string; // Added the link property for the clickable link
};

const cards: CardType[] = [
  {
    url: "drug.png",
    title: "Drug Discovery Website",
    id: 1,
    link: "https://github.com/Raghav-Senthilkumar/Drug-Discovery-Website", // Example link for the card
  },
  {
    url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Personal AI Fitness Tracker",
    id: 2,
    link: "https://github.com/Raghav-Senthilkumar/Personal_Fitness_Tracker", // Example link for the card
  },
  {
    url: "terpmeals.png",
    title: "UMD Dining Menu Webscraper",
    id: 3,
    link: "https://github.com/Raghav-Senthilkumar/UMD_Dining_Menu_API", // Example link for the card
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D",
    title: "Data Analysis for Crop Recommendations",
    id: 4,
    link: "https://github.com/Raghav-Senthilkumar/Crop-Recommendation", // Example link for the card
  },
  {
    url: "game.png",
    title: "Photon Multiplayer Shooting Game",
    id: 5,
    link: "https://github.com/Raghav-Senthilkumar/MultiPlayerShootingGame", // Example link for the card
  },
];
