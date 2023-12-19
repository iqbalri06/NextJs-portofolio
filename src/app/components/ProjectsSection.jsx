"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "Website Majid SMK Wikrama Bogor",
    description: "Proyek website Majid SMK Wikrama Bogor adalah inisiatif untuk menciptakan platform yang mendukung untuk mengumpulkan dana sumbangan pembangunan masjid. ",
    image: "/images/projects/port1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Beginners : an HTML and CSS online course",
    description: "Beginners: Kursus online HTML dan CSS adalah pengenalan singkat untuk pengembangan web. Pelajari dasar-dasar HTML dan CSS melalui latihan praktis, cocok untuk pemula yang ingin memulai membuat website.",
    image: "/images/projects/certi4.png",
    tag: ["All", "Certificate"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Meniti Karier sebagai Software Developer",
    description: "Meniti karier sebagai Software Developer adalah perjalanan menuju pengembangan teknologi. Mulai dari pendidikan formal hingga membangun portofolio proyek, fokus pada penguasaan bahasa pemrograman dan keterampilan teknis. Partisipasi aktif dalam komunitas pengembang membuka peluang untuk pembelajaran dan kolaborasi. ",
    image: "/images/projects/certi1.png",
    tag: ["All", "Certificate"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    description: "Memulai dasar pemrograman sebagai langkah awal menuju menjadi Pengembang Software. Fokus pada pemahaman konsep dasar pemrograman, seperti logika, algoritma, dan struktur data. Eksplorasi bahasa pemrograman yang umum digunakan, seperti Python atau JavaScript, untuk membangun dasar keterampilan. ",
    image: "/images/projects/certi2.png",
    tag: ["All", "Certificate"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "e-learning 'Keselamatan dan Kesehatan Kerja'",
    description: "E-learning Keselamatan dan Kesehatan Kerja: Pembelajaran daring untuk memahami konsep dan praktik keselamatan di lingkungan kerja. Materi meliputi risiko, peraturan keselamatan, dan tindakan pencegahan. Akses mudah, fleksibilitas waktu, dan penilaian interaktif untuk mendukung pemahaman yang mendalam dalam melindungi kesehatan dan keselamatan di tempat kerja.",
    image: "/images/projects/certi3.png",
    tag: ["All", "Certificate"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Certificate"
          isSelected={tag === "Certificate"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
