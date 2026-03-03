import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: 'توصيل مجاني',
      titleEn: 'Free Delivery',
      description: 'للطلبات فوق 500 جنيه'
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      titleEn: 'Quality Guarantee',
      description: 'منتجات أصلية 100%'
    },
    {
      icon: CreditCard,
      title: 'دفع آمن',
      titleEn: 'Secure Payment',
      description: 'معاملات مشفرة وآمنة'
    },
    {
      icon: Headphones,
      title: 'دعم على مدار الساعة',
      titleEn: '24/7 Support',
      description: 'نحن هنا لمساعدتك'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-[1432px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-black text-white p-4 rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" dir="rtl">
                {feature.title}
              </h3>
              <p className="text-gray-600" dir="rtl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
