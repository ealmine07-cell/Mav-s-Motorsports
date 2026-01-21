
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';
import { Page, Review, Product } from './types';
import { BUSINESS_INFO, REVIEWS, PRODUCTS } from './constants';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  ShoppingCart, 
  Wrench, 
  ShieldCheck,
  Facebook,
  Navigation,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1920&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Motorcycle"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
              </div>
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full w-fit border border-orange-600/30">
                    <Star size={16} fill="currentColor" />
                    <span className="text-xs font-bold uppercase tracking-widest">5.0 Rated Local Shop</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 uppercase italic brand-font">
                    MAV'S <span className="text-orange-500">MOTORSPORTS</span>
                  </h1>
                  <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                    Ridgecrest's premier destination for high-performance parts, premium riding gear, and custom merchandise. Built by enthusiasts, for enthusiasts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setCurrentPage(Page.Contact)}
                      className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center brand-font uppercase tracking-wider"
                    >
                      Visit Store <ArrowRight className="ml-2" size={20} />
                    </button>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center border border-zinc-700 brand-font uppercase tracking-wider"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-zinc-900 border-y border-zinc-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <p className="text-4xl font-bold text-orange-500 brand-font">18+</p>
                    <p className="text-sm text-zinc-400 uppercase tracking-widest mt-1">5-Star Reviews</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white brand-font">100%</p>
                    <p className="text-sm text-zinc-400 uppercase tracking-widest mt-1">Local Ownership</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white brand-font">1k+</p>
                    <p className="text-sm text-zinc-400 uppercase tracking-widest mt-1">Parts in Stock</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white brand-font">2024</p>
                    <p className="text-sm text-zinc-400 uppercase tracking-widest mt-1">Latest Gear</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 brand-font uppercase tracking-tight">Our <span className="text-orange-500">Expertise</span></h2>
                  <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-orange-500/50 transition-all group">
                    <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                      <Wrench className="text-orange-500 group-hover:text-white" size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 brand-font uppercase">Premium Parts</h3>
                    <p className="text-zinc-400">From performance exhausts to precision brakes, we carry the brands that matter for your ride.</p>
                  </div>
                  
                  <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-orange-500/50 transition-all group">
                    <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                      <ShieldCheck className="text-orange-500 group-hover:text-white" size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 brand-font uppercase">Riding Gear</h3>
                    <p className="text-zinc-400">Safety doesn't have to compromise style. Helmets, jackets, and gloves from industry leaders.</p>
                  </div>
                  
                  <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-orange-500/50 transition-all group">
                    <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                      <ShoppingCart className="text-orange-500 group-hover:text-white" size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 brand-font uppercase">Merchandise</h3>
                    <p className="text-zinc-400">Rep Mav's Motorsports with our exclusive line of apparel, accessories, and gifts.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
      case Page.About:
        return (
          <div className="py-24 animate-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-5xl font-bold mb-8 brand-font uppercase tracking-tight">The <span className="text-orange-500">Mav's Story</span></h2>
                  <div className="space-y-6 text-lg text-zinc-300">
                    <p>
                      Mav’s Motorsports isn't just a shop; it's a hub for the Ridgecrest motorcycle community. Our passion for two wheels drives everything we do, from sourcing the most reliable parts to providing expert advice on the best gear for your riding style.
                    </p>
                    <p>
                      We founded this business on three core principles: <span className="text-white font-bold italic">Trust, Quality, and Community.</span> As a local, owner-operated shop, we take pride in knowing our customers by name and their bikes by their roar.
                    </p>
                    <div className="p-6 bg-zinc-900 border-l-4 border-orange-600 italic">
                      "Whether you're cruising the desert or tearing up the track, we've got the expertise and the inventory to keep you on the road safely and stylishly."
                    </div>
                    <p>
                      With a perfect 5.0 rating on Google and a growing family of loyal riders, we invite you to stop by Suite C on W Ward Ave and experience the difference of a shop that truly cares.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop" 
                      alt="Shop Interior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-zinc-950 p-8 rounded-xl border border-zinc-800 shadow-xl hidden md:block">
                    <p className="text-4xl font-bold text-orange-500 brand-font">5.0</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case Page.Products:
        return (
          <div className="py-24 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 brand-font uppercase tracking-tight">Premium <span className="text-orange-500">Inventory</span></h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Explore our curated selection of parts, gear, and merchandise. Looking for something specific? Call us or ask our AI assistant!</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {PRODUCTS.map(product => (
                  <div key={product.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">{product.category}</div>
                      <h3 className="text-xl font-bold mb-2 brand-font uppercase">{product.name}</h3>
                      <p className="text-zinc-400 text-sm mb-4">{product.description}</p>
                      <button 
                        onClick={() => setCurrentPage(Page.Contact)}
                        className="w-full py-2 bg-zinc-800 hover:bg-orange-600 transition-colors rounded font-bold uppercase brand-font tracking-widest"
                      >
                        In-Store Only
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 bg-orange-600 rounded-2xl p-12 text-center text-white">
                <h3 className="text-3xl font-bold mb-4 brand-font uppercase">Don't See What You Need?</h3>
                <p className="text-xl mb-8 font-medium">We can special order almost anything. Call our parts department today!</p>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-block bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-xl hover:bg-zinc-100 transition-all uppercase brand-font"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        );

      case Page.Reviews:
        return (
          <div className="py-24 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 brand-font uppercase tracking-tight text-white">Rider <span className="text-orange-500">Testimonials</span></h2>
                <div className="flex items-center justify-center gap-1 text-orange-500 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                </div>
                <p className="text-zinc-400">18 verified 5-star reviews and counting</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {REVIEWS.map((review, idx) => (
                  <div key={idx} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 relative">
                    <div className="flex text-orange-500 mb-4">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                    </div>
                    <p className="text-lg mb-6 text-zinc-300 italic">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-orange-500 border border-zinc-700 uppercase">
                        {review.author[0]}
                      </div>
                      <div>
                        <div className="font-bold brand-font uppercase">{review.author}</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">{review.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case Page.Contact:
        return (
          <div className="py-24 animate-in fade-in duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-5xl font-bold mb-8 brand-font uppercase tracking-tight">Get <span className="text-orange-500">In Touch</span></h2>
                  <p className="text-zinc-400 text-lg mb-12">Stop by the shop or give us a call. Our knowledgeable staff is ready to help you with your motorcycle needs.</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-zinc-900 p-4 rounded-lg text-orange-500 border border-zinc-800">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg brand-font uppercase mb-1">Visit Us</h4>
                        <p className="text-zinc-400">{BUSINESS_INFO.address}</p>
                        <a 
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-orange-500 hover:text-orange-400 flex items-center gap-2 mt-2 font-bold uppercase text-sm tracking-widest"
                        >
                          Get Directions <Navigation size={14} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="bg-zinc-900 p-4 rounded-lg text-orange-500 border border-zinc-800">
                        <Phone size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg brand-font uppercase mb-1">Call Us</h4>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="text-zinc-400 hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="bg-zinc-900 p-4 rounded-lg text-orange-500 border border-zinc-800">
                        <Clock size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg brand-font uppercase mb-1">Hours</h4>
                        <p className="text-zinc-400">{BUSINESS_INFO.hours}</p>
                        <div className="mt-1 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-red-500"></span>
                           <span className="text-xs uppercase font-bold text-zinc-500">Currently Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-1 overflow-hidden border border-zinc-800 shadow-2xl h-[500px]">
                  {/* Embedded Google Map Iframe Placeholder - in a real app would use Google Maps API */}
                  <div className="w-full h-full bg-zinc-800 flex flex-col items-center justify-center text-center p-8">
                    <MapPin size={64} className="text-orange-500 mb-4 opacity-50" />
                    <p className="text-zinc-300 font-bold mb-4 uppercase brand-font tracking-widest">Map View</p>
                    <p className="text-zinc-500 max-w-xs">{BUSINESS_INFO.address}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 bg-zinc-700 hover:bg-zinc-600 px-6 py-3 rounded-md transition-all font-bold uppercase tracking-wider text-sm border border-zinc-600"
                    >
                      Open Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <span className="text-3xl font-bold tracking-tighter brand-font italic uppercase">
                MAV'S <span className="text-orange-500">MOTORSPORTS</span>
              </span>
              <p className="mt-6 text-zinc-400 max-w-sm text-lg">
                Ridgecrest's leading destination for high-performance parts, premium gear, and a true local rider community. 5-star service guaranteed.
              </p>
              <div className="flex gap-4 mt-6">
                <a href={BUSINESS_INFO.facebook} className="bg-zinc-900 p-3 rounded-full hover:bg-orange-600 transition-colors text-zinc-300 hover:text-white border border-zinc-800">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest brand-font text-white mb-6">Quick Links</h4>
              <ul className="space-y-4 text-zinc-400">
                {Object.values(Page).map(page => (
                  <li key={page}>
                    <button 
                      onClick={() => setCurrentPage(page)}
                      className="hover:text-orange-500 transition-colors uppercase text-sm font-semibold tracking-wide"
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest brand-font text-white mb-6">Contact info</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500 flex-shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>{BUSINESS_INFO.hours}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-medium">
            <p>© {new Date().getFullYear()} Mav's Motorsports. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <Assistant />
    </div>
  );
};

export default App;
