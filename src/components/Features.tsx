import { FeatureCard } from "@/components/FeatureCard";
import { 
  Shield, 
  CreditCard, 
  Truck, 
  ScanLine, 
  Clock, 
  Users,
  FileCheck,
  Smartphone
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "E-Card Authentication",
      description: "Secure digital identity verification with QR code and smartcard scanning for instant driver authentication.",
      gradient: "bg-gradient-to-br from-primary/20 to-primary-glow/20"
    },
    {
      icon: Truck,
      title: "Driver Profile Management", 
      description: "Complete driver profiles with license verification, vehicle registration, and compliance tracking.",
      gradient: "bg-gradient-to-br from-accent/20 to-accent/10"
    },
    {
      icon: CreditCard,
      title: "Mobile Money Integration",
      description: "Seamless payments via MTN, Airtel, Zamtel, and Visa with real-time transaction processing.",
      gradient: "bg-gradient-to-br from-success/20 to-success/10"
    },
    {
      icon: ScanLine,
      title: "Cargo Scanning",
      description: "Digital cargo inspection with barcode scanning and document uploads for complete transparency.",
      gradient: "bg-gradient-to-br from-warning/20 to-warning/10"
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Live border queue status, trip monitoring, and automated clearance progress updates.",
      gradient: "bg-gradient-to-br from-primary-glow/20 to-primary/10"
    },
    {
      icon: Users,
      title: "Border Agent Dashboard",
      description: "Comprehensive interface for border officials to review, approve, and manage crossing requests.",
      gradient: "bg-gradient-to-br from-accent/20 to-primary/10"
    },
    {
      icon: FileCheck,
      title: "Digital Documentation",
      description: "Paperless workflow with digital forms, automated compliance checks, and audit trails.",
      gradient: "bg-gradient-to-br from-success/20 to-accent/10"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for smartphones with offline capabilities and multi-language support.",
      gradient: "bg-gradient-to-br from-warning/20 to-success/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Border
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Management </span>
            Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to digitize and streamline cross-border trade operations across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};