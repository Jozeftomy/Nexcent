import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Community from "./components/Community";
import DynamicComponent from "./components/DynamicComponent";
import Frame35 from "./assets/images/Frame35.png";
import pana from "./assets/images/pana.png";
import BlogCardSection from "./components/BlogCardSection";
import Demo from "./components/Demo";
import Test from "./components/Test";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center gap-[24px] pt-[84px]">
      <Header />
      <HomePage />
      <Community />
      <DynamicComponent
        imageSrc={Frame35}
        heading="The unseen of spending three years at Pixelgrade"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="Learn More"
        onButtonClick={() => alert("Learn more clicked!")}
      />
      {/* <Business /> */}
      <DynamicComponent
        imageSrc={pana}
        heading="How to design your site footer like we did"
        paragraph="Donec a eros justo. Fusce egestas tristique ultrices."
        buttonText="Learn More"
        onButtonClick={() => alert("Learn more clicked!")}
      />
       <Test />
      <BlogCardSection
        sectionTitle="Caring is the new marketing"
        sectionDesc="The Nexcent blog is the best place to read about the latest membership insights, trends and more."
      />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
