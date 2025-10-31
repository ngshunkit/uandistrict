import { CheckCircle2 } from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6 group">
            {/* Step number */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-accent/30">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground ml-8">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
