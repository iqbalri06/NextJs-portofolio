"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>students at Wikrama Vocational School, Bogor</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Beginners : an HTML and CSS online course</li>
        <li>e-learning 'Keselamatan dan Kesehatan Kerja'</li>
        <li>Memulai Dasar Pemrograman untuk Menjadi Pengembang
          Software</li>
        <li>Meniti Karier sebagai Software Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.gif" width={650} height={650} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Iqbal Roudatul Irfan, a dedicated student currently studying at SMK Wikrama Bogor.
            My journey in the world of technology is very interesting and I have a strong passion
            create interactive and responsive web applications.
          </p>
          <p className="text-base lg:text-lg">
            I have learned from experience
            JavaScript, React, Node.js, Express, HTML, CSS, and Git. I enjoy the spinning process
            ideas into real, easy-to-use solutions, and I'm always excited to explore and
            implement the latest web development trends.
          </p>
          <p className="text-base lg:text-lg">
            As a continuous learner, I strive to expand my knowledge and skills in ever-evolving directions
            web development field. I find joy in overcoming challenges and collaborating
            like-minded individuals to create meaningful and innovative applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              ever studied{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
