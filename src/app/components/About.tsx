"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabItem from "./TabItem";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const TAB_DATA = [
  {
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Nest</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    id: "education",
    content: (
      <ul>
        <li>Bachelors in Information System</li>
      </ul>
    ),
  },
  {
    id: "experience",
    content: <div>experiencia</div>,
  },
];

function About() {
  const [tab, setTab] = useState("skills");
  const [isPeding, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-40">
        <Image
          src="/images/wip.png"
          height={500}
          width={500}
          alt={"About Image"}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-lg lg:text-xl">
            Experienced software engineer specializing in full-stack development
            with a strong emphasis on front-end solutions. I am dedicated to
            delivering software that aligns with clients' strategic goals,
            leveraging technology and best practices to enhance the development
            experience. A strong communicator and collaborator, I excel in
            diverse environments and consistently drive projects to meet
            business objectives. Committed to continuous growth and innovation,
            I aim to advance my skills and contribute to impactful software
            solutions.
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((item) => {
              return (
                <TabItem
                  active={item.id === tab}
                  selectTab={() => handleTabChange(item.id)}
                  key={"tab-" + item.id}
                >
                  {capitalizeFirstLetter(item.id)}
                </TabItem>
              );
            })}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => item.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
