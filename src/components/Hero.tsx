import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Zap } from "lucide-react";
import heroImage from "@/assets/hero-border.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern border crossing"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
            <Shield className="h-4 w-4" />
            Secure Border Management Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Streamline
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Border </span>
            Crossings
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Digital e-card scanning, mobile payments, and real-time clearance management for African cross-border trade
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">50%</div>
              <div className="text-sm text-muted-foreground">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Real-time Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Digital Records</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
            >
              Start Border Crossing
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary/5"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border text-sm">
              <Truck className="h-4 w-4 text-primary" />
              Driver Management
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border text-sm">
              <Shield className="h-4 w-4 text-success" />
              E-Card Scanning
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border text-sm">
              <Zap className="h-4 w-4 text-warning" />
              Mobile Payments
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};