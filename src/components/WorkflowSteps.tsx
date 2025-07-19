import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserCheck, 
  ScanLine, 
  CreditCard, 
  FileCheck, 
  Shield,
  CheckCircle 
} from "lucide-react";

export const WorkflowSteps = () => {
  const steps = [
    {
      icon: UserCheck,
      step: "01",
      title: "Driver Registration",
      description: "Create profile with license and vehicle documentation",
      status: "active"
    },
    {
      icon: ScanLine,
      step: "02", 
      title: "E-Card Scanning",
      description: "Scan digital identity card for instant verification",
      status: "pending"
    },
    {
      icon: FileCheck,
      step: "03",
      title: "Cargo Documentation",
      description: "Upload and scan cargo details and manifests",
      status: "pending"
    },
    {
      icon: CreditCard,
      step: "04",
      title: "Payment Processing",
      description: "Complete border fees via mobile money or card",
      status: "pending"
    },
    {
      icon: Shield,
      step: "05", 
      title: "Border Agent Review",
      description: "Official inspection and clearance approval",
      status: "pending"
    },
    {
      icon: CheckCircle,
      step: "06",
      title: "Border Clearance",
      description: "Receive clearance confirmation and proceed",
      status: "completed"
    }
  ];

  const getStepStatus = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground";
      case "completed":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple 6-Step
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Clearance </span>
            Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamlined workflow designed to minimize wait times and maximize efficiency at border crossings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={step.step}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full ${getStepStatus(step.status)} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        Step {step.step}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success font-medium">
            <CheckCircle className="h-4 w-4" />
            Average processing time: 15 minutes
          </div>
        </div>
      </div>
    </section>
  );
};