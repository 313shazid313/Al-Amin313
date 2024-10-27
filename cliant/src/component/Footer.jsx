
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">MyCompany</h2>
            <p className="mt-2 text-gray-400">Providing quality services since 2023.</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#web-design" className="hover:underline">Web Design</a></li>
                <li><a href="#seo" className="hover:underline">SEO</a></li>
                <li><a href="#marketing" className="hover:underline">Marketing</a></li>
                <li><a href="#consulting" className="hover:underline">Consulting</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#facebook" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al-Amin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
