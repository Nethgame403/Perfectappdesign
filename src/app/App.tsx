import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroCarousel } from './components/HeroCarousel';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('kids');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Navigation onCategorySelect={setSelectedCategory} />

      {/* Hero Carousel Section */}
      <div className="relative group">
        <HeroCarousel />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Products Section */}
      <ProductsSection category={selectedCategory} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
