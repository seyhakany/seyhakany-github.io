import AboutPage from "@/components/feature/home/AboutPage";
import HomePage from "@/components/feature/home/HomePage";
import ProjectPage from "@/components/feature/home/ProjectPage";

export const metadata = {
  title: "Portfolio | Chheng Seyhakany",
  description: "this page was about ...",
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
