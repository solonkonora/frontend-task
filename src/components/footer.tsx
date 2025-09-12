const Footer = () => {
  return (
    <footer className="px-6 py-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* left section*/}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">K</span>
            </div>
            <span className="font-semibold text-text-primary">Krea AI</span>
          </div>
        </div>

        {/* right section*/}
        <div className="flex items-center space-x-2 text-text-secondary text-sm">
          <span>curated by</span>
          <div className="flex items-center space-x-1 font-semibold text-text-primary">
            <div className="w-4 h-4 bg-foreground rounded-sm"></div>
            <span>Mobbin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;