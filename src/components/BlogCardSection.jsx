import React from "react";
import BlogCard from "./BlogCard";
import image18 from "../assets/images/image-18.png";
import image19 from "../assets/images/image-19.png";
import image20 from "../assets/images/image-20.png";

const BlogCardSection = ({ sectionTitle, sectionDesc }) => {
  const cards = [
    {
      image: image18,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      buttonText: "Read More",
      onClick: () => alert("Clicked card 1"),
    },
    {
      image: image19,
      title: "What are your safeguarding responsibilities and how can you manage them?",
      buttonText: "Read More",
      onClick: () => alert("Clicked card 2"),
    },
    {
      image: image20,
      title: "Revamping the Membership Model with Triathlon Australia",
      buttonText: "Read More",
      onClick: () => alert("Clicked card 3"),
    },
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{sectionTitle}</h2>
      <p className="text-gray-500 mb-10 max-w-[600px] mx-auto">{sectionDesc}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <BlogCard
            key={index}
            image={card.image}
            title={card.title}
            buttonText={card.buttonText}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCardSection;
