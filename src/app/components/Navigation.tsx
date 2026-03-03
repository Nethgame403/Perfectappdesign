import { useState } from 'react';
import svgPaths from "../../imports/svg-dykmm05s7e";

interface NavigationProps {
  onCategorySelect?: (category: string) => void;
}

export function Navigation({ onCategorySelect }: NavigationProps) {
  const [activeCategory, setActiveCategory] = useState('kids');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'men', label: 'الرجال', labelEn: 'Men' },
    { id: 'kids', label: 'الأطفال', labelEn: 'Kids' },
    { id: 'women', label: 'النساء', labelEn: 'Women' }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategorySelect?.(categoryId);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0)] h-[120px] pointer-events-none" />
      
      <div className="relative max-w-[1432px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <button 
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Change language"
            >
              <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p32c89c00} fill="white" />
                <path d={svgPaths.p3e6f2b80} fill="white" />
                <path d={svgPaths.p1e89e400} fill="white" />
              </svg>
            </button>

            {/* Shopping Basket */}
            <button 
              className="p-2 hover:bg-white/10 rounded-md transition-colors relative"
              aria-label="Shopping basket"
            >
              <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p2255f500} fill="white" stroke="white" strokeWidth="0.4" />
                <path d={svgPaths.p3d41aa80} fill="white" stroke="white" strokeWidth="0.4" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Profile */}
            <button 
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="User profile"
            >
              <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.pae96b00} fill="white" fillRule="evenodd" />
                <path d={svgPaths.p99d6c80} fill="white" />
                <path d={svgPaths.p13fecc20} stroke="white" strokeWidth="0.184486" />
              </svg>
            </button>

            {/* Search */}
            <button 
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search"
            >
              <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1f7c7700} fill="white" />
              </svg>
            </button>
          </div>

          {/* Center - Category Navigation */}
          <div className="flex items-center gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative px-6 py-2 font-['Cairo:Bold',sans-serif] font-bold text-[16px] uppercase transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/80 hover:text-white border-b-2 border-transparent'
                }`}
                style={{ textShadow: '0px 1px 1px rgba(0,0,0,0.15)' }}
              >
                <span dir="auto">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-center">
            <div className="px-10 py-5">
              <div className="font-['Rockwell_Extra_Bold:Regular','Noto_Sans_Arabic:Black',sans-serif] text-[30px] text-white uppercase leading-6 text-center" 
                   style={{ fontVariationSettings: "'wdth' 100, 'wght' 900" }}>
                <p dir="auto">طيور الجنة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        {showSearch && (
          <div className="absolute top-full left-0 right-0 mt-2 px-6">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
                <svg className="size-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1f7c7700} fill="currentColor" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن المنتجات..."
                  className="flex-1 outline-none text-gray-800 text-right"
                  dir="rtl"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  بحث
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
