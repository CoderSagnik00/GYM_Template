// app/components/Footer.tsx
export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-800 text-white p-6 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">MyApp</h3>
              <p>Your modern web application</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-gray-300">Home</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p>&copy; {year} MyApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  