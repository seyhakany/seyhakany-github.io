import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectPage from "@/components/pages/ProjectPage";

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
