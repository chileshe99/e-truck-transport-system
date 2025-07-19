import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg ${gradient || 'bg-primary/10'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};