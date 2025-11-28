export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-gray-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
          <a 
            href="https://www.linkedin.com/in/escartin-jameboy-a44a16397/" 
            className="hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.facebook.com/lostcreeper" 
            className="hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a 
            href="https://github.com/lostcreeper10" 
            className="hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm sm:text-base">© 2025 Jameboy. All rights reserved.</p>
      </div>
    </footer>
  );
}