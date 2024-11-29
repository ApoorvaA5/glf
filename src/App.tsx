import React from 'react';
import { Utensils, Check, MapPin, ArrowRight, Settings } from 'lucide-react';
import { Menu } from './components/Menu';
import { PowerPackage } from './components/PowerPackage';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TopBanner } from './components/TopBanner';

function PricingCard({ 
  title, 
  price, 
  description, 
  skips, 
  isPopular,
  image
}: { 
  title: string;
  price: number;
  description: string;
  skips: number;
  isPopular?: boolean;
  image: string;
}) {
  return (
    <div className={`relative flex flex-col p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 ${isPopular ? 'border-2 border-orange-500' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular plan
        </div>
      )}
      
      <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-duration-300"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold">₹{price}</span>
        <span className="ml-2 text-gray-600">/month</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">Monthly one meal only/-</p>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center">
          <Utensils className="h-5 w-5 text-orange-500" />
          <span className="ml-3 text-gray-700">{description}</span>
        </div>
        <div className="flex items-center">
          <Settings className="h-5 w-5 text-orange-500" />
          <span className="ml-3 text-gray-700">Customise option available</span>
        </div>
        <div className="flex items-center">
          <Check className="h-5 w-5 text-orange-500" />
          <span className="ml-3 text-gray-700">{skips} Skip allowance</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-orange-500" />
          <span className="ml-3 text-gray-700">Free home delivery</span>
        </div>
      </div>

      <button className="mt-8 w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:bg-orange-600 transition-colors">
        Start now
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <TopBanner />
      <Navbar />
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Meal Plan
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Delicious, homemade meals delivered right to your doorstep. Select the plan that best fits your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-12">
          <PricingCard
            title="LEAN BITES"
            price={2599}
            description="Gravy Sabzi & Rice or 3 Rotis"
            skips={5}
            image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
          />
          <PricingCard
            title="TRI BITES"
            price={2999}
            description="Gravy Sabzi, Dry Sabzi & Rice or 3 rotis"
            skips={7}
            isPopular={true}
            image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
          />
          <PricingCard
            title="PRIME BITES"
            price={3299}
            description="Gravy Sabzi, Dry Sabzi, Dal, Salad & Rice with 2 Rotis or 4 Rotis"
            skips={10}
            image="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80"
          />
        </div>

        <div className="mt-16">
          <PowerPackage />
        </div>

        <div className="mt-16">
          <Menu />
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include customization options and free delivery. Cancel anytime.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;