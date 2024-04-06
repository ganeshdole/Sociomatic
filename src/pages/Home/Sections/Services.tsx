import React from "react";
import contentCreation from "@/assets/images/content-creation.svg";
import SocialMediaStrategy from "@/assets/images/social-media-strategy.svg";
import EventPlanning from "@/assets/images/event-planning.svg";
import InfluencerCollaboration from "@/assets/images/influencer-collaboration.svg";
import BuitdForCreativity from "@/assets/images/buildforcreativity.svg";

const Services: React.FC = () => {
  return (
    <div className="px-3 sm:px-10 md:px-16 lg:px-32" id="services">
      <div className="mt-32 mb-16">
        <h1 className="text-4xl">What We Offer</h1>
        <p className="max-w-[500px] mt-5">
          At Sociomatic, we master the art of connection whether through
          strategic social media curation or flawlessly executed events. Elevate
          your brand with our dual expertise, ensuring your presence is felt at
          every digital click and event spotlight.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
        <div className="">
          <img
            src={contentCreation}
            alt="Content Creation"
            className="outline rounded-lg object-cover"
          />
          <h3 className="mt-5 text-2xl">Content Creation and Curation</h3>
          <p className="mt-4">
            Develop compelling visual and written content across platforms,
            crafting messages that resonate and spark engagement.
          </p>
        </div>
        <div className="">
          <img
            src={SocialMediaStrategy}
            alt="Social Media Strategy"
            className="outline rounded-lg object-cover"
          />
          <h3 className="mt-5 text-2xl">
            Social Media Strategy and Management
          </h3>
          <p className="mt-4">
            Craft tailored social media strategies, oversee content creation,
            engage with audiences, and analyze performance for enhanced online
            presence.
          </p>
        </div>
        <div className="">
          <img
            src={EventPlanning}
            alt="Event Planning"
            className="outline rounded-lg object-cover"
          />
          <h3 className="mt-5 text-2xl">Event Planning and Coordination</h3>
          <p className="mt-4">
            Conceptualize and execute seamless events, managing logistics,
            venues, and entertainment to create unforgettable experiences.
          </p>
        </div>
        <div className="">
          <img
            src={InfluencerCollaboration}
            alt="Influencer Collaboration"
            className="outline rounded-lg object-cover"
          />
          <h3 className="mt-5 text-2xl">
            Influencer Collaboration and Partnerships
          </h3>
          <p className="mt-4">
            Identify and collaborate with influencers and partners to extend
            brand reach and foster meaningful connections with the target
            audience.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row my-32 gap-14">
        <div className="w-[100%] p-10">
          <img src={BuitdForCreativity} alt="" className="w-full" />
        </div>
        <div className="w-[100%] p-10">
          <h3 className="text-4xl my-5 leading-[50px]">
            Built for Creatives, by Creatives
          </h3>
          <p className="text-[16px] mt-4">
            Our foundation rests on the pillars of creativity, passion, and a
            commitment to bringing your vision to life. We are not just a
            company; we are a collective of innovative minds dedicated to
            elevating your brand through social media management and event
            experiences that resonate.
          </p>
          <div className="flex gap-10 mt-4">
            <div className="flex gap-4">
              <img src="https://placehold.co/30x30" alt="" />
              <p className="max-w-[60px] text-xs">All-In-One Toolkit</p>
            </div>
            <div className="flex gap-4">
              <img src="https://placehold.co/30x30" alt="" />
              <p className="max-w-[60px] text-xs">All-In-One Toolkit</p>
            </div>
            <div className="flex gap-4">
              <img src="https://placehold.co/30x30" alt="" />
              <p className="max-w-[60px] text-xs">All-In-One Toolkit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
