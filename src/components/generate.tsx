
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-1 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 h-full">
                <div className="grid grid-cols-3 gap-0 h-full items-center">
                  <div className="flex justify-center">
                    <div className={`w-10 h-10 rounded-2xl ${tool.color} flex items-center justify-center shadow-sm`}>
                      <span className={`font-bold text-sm ${tool.textColor || 'text-white'}`}>
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{tool.name}</h3>
                      {tool.isNew && (
                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200 px-0.5 py-0.5 rounded-full">
                          NEW
                        </Badge>
                      )}
                      {tool.isBeta && (
                        <Badge variant="secondary" className="text-xs bg-purple-50 text-purple-700 border-purple-200 px-1.5 py-0.5 rounded-full">
                          BETA
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-4">{tool.description}</p>
                  </div>

                  {/* Third Column - Centered Open Button */}
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg h-7 text-xs font-medium px-3"
                    >
                      Open
                    </Button>
                  </div>
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