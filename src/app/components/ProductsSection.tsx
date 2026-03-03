import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Kids Summer Dress",
    nameAr: "فستان صيفي للأطفال",
    price: 299,
    originalPrice: 399,
    category: "kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Boys Casual Shirt",
    nameAr: "قميص كاجوال للأولاد",
    price: 199,
    category: "kids",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Girls Party Wear",
    nameAr: "ملابس الحفلات للبنات",
    price: 449,
    originalPrice: 599,
    category: "kids",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Kids Sleepwear Set",
    nameAr: "طقم ملابس نوم للأطفال",
    price: 249,
    category: "kids",
    image: "https://images.unsplash.com/photo-1587996054634-61e49c7f1d04?w=400&h=500&fit=crop"
  },
  {
    id: 5,
    name: "Baby Romper",
    nameAr: "رومبر للأطفال الرضع",
    price: 179,
    category: "kids",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop"
  },
  {
    id: 6,
    name: "Teen Casual Outfit",
    nameAr: "زي كاجوال للمراهقين",
    price: 349,
    category: "kids",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop"
  },
  {
    id: 7,
    name: "Kids Sportswear",
    nameAr: "ملابس رياضية للأطفال",
    price: 279,
    category: "kids",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop"
  },
  {
    id: 8,
    name: "Traditional Outfit",
    nameAr: "زي تقليدي",
    price: 499,
    originalPrice: 699,
    category: "kids",
    image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=400&h=500&fit=crop"
  }
];

interface ProductsSectionProps {
  category?: string;
}

export function ProductsSection({ category = 'kids' }: ProductsSectionProps) {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-[1432px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">
            تسوق أحدث المجموعات
          </h2>
          <p className="text-gray-600 text-lg" dir="rtl">
            اكتشف أفضل العروض على الملابس العصرية
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.nameAr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% خصم
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 left-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.has(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Quick Add to Cart - Shows on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                    <span dir="rtl">أضف إلى السلة</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4" dir="rtl">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                  {product.nameAr}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    {product.price} جنيه
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice} جنيه
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
            <span dir="rtl">عرض المزيد من المنتجات</span>
          </button>
        </div>
      </div>
    </div>
  );
}
