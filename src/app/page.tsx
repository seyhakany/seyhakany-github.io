import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectPage from "@/components/pages/ProjectPage";

export const metadata = {
  title: "Home | Chheng Seyhakany",
  description: "Meticulous Web Developer with over 4 years of front-end experience and passion for responsive website design.",
};

export default function Home() {
  return (
    <>
      <HomePage />
      <ProjectPage />
      <AboutPage />
    </>
  );
}
