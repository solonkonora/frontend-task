
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Image, 
  Video, 
  Scissors, 
  Zap, 
  Bot, 
  ArrowUp, 
  RotateCcw, 
  Palette,
  Star,
  Heart,
  ChevronDown
} from "lucide-react";

interface ToolCard {
  name: string;
  description: string;
  isNew?: boolean;
  isBeta?: boolean;
  color: string;
  textColor?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tools: ToolCard[] = [
  {
    name: "Stable",
    description: "Stable diffusion models inference",
    isNew: true,
    color: "bg-blue-600",
    textColor: "text-white",
    icon: Image
  },
  {
    name: "Videos",
    description: "Create videos with Haiper, Pika, and more",
    color: "bg-orange-500",
    textColor: "text-white",
    icon: Video
  },
  {
    name: "Hashima",
    description: "Hashima removing and utilizing",
    color: "bg-cyan-500",
    textColor: "text-white",
    icon: Scissors
  },
  {
    name: "Enhancer",
    description: "Enhance using super-resolution and more",
    isNew: true,
    color: "bg-gray-900",
    textColor: "text-white",
    icon: Zap
  },
  {
    name: "CAI",
    description: "Stable diffusion models and generative",
    isBeta: true,
    color: "bg-purple-600",
    textColor: "text-white",
    icon: Bot
  },
  {
    name: "Video Upscaler",
    description: "AI face-to-face swap for videos",
    isBeta: true,
    color: "bg-green-600",
    textColor: "text-white",
    icon: ArrowUp
  },
  {
    name: "Motion Transfer",
    description: "Motion and nature characters",
    isBeta: true,
    color: "bg-gray-800",
    textColor: "text-white",
    icon: RotateCcw
  },
  {
    name: "Fash",
    description: "Fashion to replicate your style professionally, or otherwise",
    color: "bg-amber-600",
    textColor: "text-white",
    icon: Palette
  }
];

const GenerateSection = () => {
  return (
    <>
      {/* Generate Section */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-text-primary">Generate</h2>
            <div className="flex items-center">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-transparent">
               <ChevronDown /> Show all
              </Button>
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 p-1 h-full">
                <div className="flex items-center gap-1.5 h-full">
                  <div className="flex justify-center">
                    <div className={`w-10 h-10 rounded-full ${tool.color} flex items-center justify-center shadow-sm`}>
                      <tool.icon className={`w-5 h-5 ${tool.textColor || 'text-white'}`} />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col space-y-1">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{tool.name}</h3>
                      {tool.isNew && (
                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200 px-1.5 py-0.5 rounded-full">
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

                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-gray-100 text-gray-700 dark:text-foreground-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full h-7 text-xs font-medium px-3"
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

       {/* Gallery Section */}
      <section className="px-6 py-1 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
                <Star className="w-5 h-5 text-black" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
                <Heart className="w-5 h-5 text-black" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Favorites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default GenerateSection;