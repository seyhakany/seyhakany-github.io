import AboutPage from "@/components/feature/home/AboutPage";
import HomePage from "@/components/feature/home/HomePage";
import ProjectPage from "@/components/feature/home/ProjectPage";

export const metadata = {
  title: "Home | Chheng Seyhakany",
  description:
    "Meticulous Web Developer with over 5 years of front-end experience and passion for responsive website design.",
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
