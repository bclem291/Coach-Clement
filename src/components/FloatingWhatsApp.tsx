import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2347033325827"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
      title="Chat with Coach Clement"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      <MessageCircle className="h-8 w-8 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-900">
        Chat with Coach Clement
      </span>
    </a>
  );
}
