import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-red-900 text-white z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">NEW YORKER PIZZA</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-amber-300 transition">About</a>
            <a href="#menu" className="hover:text-amber-300 transition">Menu</a>
            <a href="#gallery" className="hover:text-amber-300 transition">Gallery</a>
            <a href="#reviews" className="hover:text-amber-300 transition">Reviews</a>
            <a href="#contact" className="hover:text-amber-300 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">AUTHENTIC ITALIAN PIZZA</h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-200">Hand-tossed dough, finest ingredients, timeless recipes</p>
          <a href="#menu" className="inline-block bg-amber-500 text-red-900 font-bold py-4 px-10 rounded-full hover:bg-amber-400 transition transform hover:scale-105">VIEW MENU</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-8">OUR STORY</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Since 1985, New Yorker Pizza has been bringing the authentic taste of Italian pizza to our community. 
            Our family recipe, passed down through generations, uses only the freshest ingredients and traditional 
            techniques to create pizzas that transport you to the streets of Naples.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every pizza is hand-tossed and baked in our stone oven at exactly 500°F to achieve that perfect 
            crispy crust with a soft, chewy center. We believe in quality over everything.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">OUR MENU</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Classic Pizzas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-red-900 mb-4">CLASSICS</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Margherita</span>
                  <span className="text-red-700 font-bold">$16</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Pepperoni</span>
                  <span className="text-red-700 font-bold">$18</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Cheese</span>
                  <span className="text-red-700 font-bold">$14</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Veggie</span>
                  <span className="text-red-700 font-bold">$19</span>
                </li>
              </ul>
            </div>
            {/* Specialty Pizzas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-red-900 mb-4">SPECIALTY</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Meat Lovers</span>
                  <span className="text-red-700 font-bold">$22</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">BBQ Chicken</span>
                  <span className="text-red-700 font-bold">$21</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Supreme</span>
                  <span className="text-red-700 font-bold">$23</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Hawaiian</span>
                  <span className="text-red-700 font-bold">$20</span>
                </li>
              </ul>
            </div>
            {/* Sides & Drinks */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-red-900 mb-4">SIDES</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Garlic Knots</span>
                  <span className="text-red-700 font-bold">$6</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Caesar Salad</span>
                  <span className="text-red-700 font-bold">$8</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Buffalo Wings</span>
                  <span className="text-red-700 font-bold">$12</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">2L Soda</span>
                  <span className="text-red-700 font-bold">$3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-red-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">OUR PIZZAS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400" alt="Pizza" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" alt="Pizza" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" alt="Pizza" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1590947132387-155cc6db2321?w=400" alt="Pizza" fill className="object-cover hover:scale-110 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">WHAT OUR CUSTOMERS SAY</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-amber-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4">&quot;Best pizza I&apos;ve ever had! The crust is perfectly crispy and the toppings are always fresh.&quot;</p>
              <p className="font-bold text-red-900">- John D.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-amber-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4">&quot;Authentic Italian taste! This brings back memories of my trip to Naples. Highly recommend!&quot;</p>
              <p className="font-bold text-red-900">- Sarah M.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-amber-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4">&quot;Family favorite! We order from here every Friday night. Never disappoints.&quot;</p>
              <p className="font-bold text-red-900">- Mike R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">CONTACT US</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-6">GET IN TOUCH</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 font-bold">📍</span> 123 Pizza Street, New York, NY 10001
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 font-bold">📞</span> (555) 123-4567
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 font-bold">✉️</span> info@newyorkerpizza.com
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <span className="text-red-700 font-bold">🕐</span> Mon-Sun: 11am - 10pm
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-6">SEND US A MESSAGE</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700" />
                <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"></textarea>
                <button type="submit" className="w-full bg-red-900 text-white font-bold py-3 rounded-lg hover:bg-red-800 transition">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">NEW YORKER PIZZA</h2>
          <p className="text-amber-200 mb-6">Authentic Italian Pizza Since 1985</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-amber-300 transition">Facebook</a>
            <a href="#" className="hover:text-amber-300 transition">Instagram</a>
            <a href="#" className="hover:text-amber-300 transition">Twitter</a>
          </div>
          <p className="text-gray-400">© 2024 New Yorker Pizza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}