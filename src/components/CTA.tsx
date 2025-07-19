import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Truck, Building } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform
            <br />
            Your Border Operations?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of drivers, border agents, and logistics companies already using our platform
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in">
            <Truck className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Truck Drivers</h3>
            <p className="text-sm opacity-80">Fast, secure border crossings</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Border Agents</h3>
            <p className="text-sm opacity-80">Streamlined approval process</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in">
            <Building className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Logistics Companies</h3>
            <p className="text-sm opacity-80">Real-time fleet tracking</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow group"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/80 text-sm">
            Free 30-day trial • No credit card required • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};