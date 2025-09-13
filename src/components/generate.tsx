
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

interface ToolCard {
  name: string;
  description: string;
  isNew?: boolean;
  isBeta?: boolean;
  color: string;
  textColor?: string;
}

const tools: ToolCard[] = [
  {
    name: "Stable",
    description: "Stable diffusion models inference",
    isNew: true,
    color: "bg-blue-600",
    textColor: "text-white"
  },
  {
    name: "Videos",
    description: "Create videos with Haiper, Pika, and more",
    color: "bg-orange-500",
    textColor: "text-white"
  },
  {
    name: "Hashima",
    description: "Hashima removing and utilizing",
    color: "bg-cyan-500",
    textColor: "text-white"
  },
  {
    name: "Enhancer",
    description: "Enhance using super-resolution and more",
    isNew: true,
    color: "bg-gray-900",
    textColor: "text-white"
  },
  {
    name: "CAI",
    description: "Stable diffusion models and generative",
    isBeta: true,
    color: "bg-purple-600",
    textColor: "text-white"
  },
  {
    name: "Video Upscaler",
    description: "AI face-to-face swap for videos",
    isBeta: true,
    color: "bg-green-600",
    textColor: "text-white"
  },
  {
    name: "Motion Transfer",
    description: "Motion and nature characters",
    isBeta: true,
    color: "bg-gray-800",
    textColor: "text-white"
  },
  {
    name: "Fash",
    description: "Fashion to replicate your style professionally, or otherwise",
    color: "bg-amber-600",
    textColor: "text-white"
  }
];

const GenerateSection = () => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Generate</h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            View all
          </Button>
        </div>

        {/* tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-card-bg border border-border rounded-xl p-4 hover:bg-tool-hover transition-colors duration-200 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center`}>
                    <span className={`font-semibold text-sm ${tool.textColor || 'text-white'}`}>
                      {tool.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    {tool.isNew && (
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        New
                      </Badge>
                    )}
                    {tool.isBeta && (
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Beta
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary mb-2">{tool.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{tool.description}</p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-border">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-center text-primary hover:text-primary/80 hover:bg-primary/10"
                  >
                    Open
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenerateSection;