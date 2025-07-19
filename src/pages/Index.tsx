import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features"; 
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WorkflowSteps />
      <CTA />
    </div>
  );
};

export default Index;
