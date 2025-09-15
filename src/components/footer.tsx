import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-foreground/80 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-6 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center">
              <Image
                src="/Krea.png"
                alt="Krea logo"
                width={34}
                height={34}
              />{" "}
            </div>
            <span className="text-white font-semibold text-gray-900 dark:text-white">Krea AI</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-white dark:text-gray-300 text-sm">
          <span>curated by</span>
          <div className="flex items-center space-x-1 font-semibold text-white-900 dark:text-white text-xl">
            <Image
              src="/mobbin-2.png"
              alt="Mobbin logo"
              width={34}
              height={34}
            />
            <span>Mobbin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
