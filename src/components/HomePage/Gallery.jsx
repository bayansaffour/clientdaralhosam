import { useState } from "react";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    url: `/g${i + 1}.jpg`, // الصور يجب أن تكون داخل مجلد "public"
  }));

  const showPrevSlide = () =>
    setCurrentIndex((i) =>
      i === 0 ? images.length - 4 : i - 1
    );

  const showNextSlide = () =>
    setCurrentIndex((i) =>
      i >= images.length - 4 ? 0 : i + 1
    );

  const visibleImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold text-[#780C28] p-4 rounded-lg">
            من إنجازاتنا... مشاهد تُلهم وتُعبّر
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            في كل صورة حكاية، وفي كل إنجاز بصمة من دار الحسام
          </p>
        </div>
        <div className="h-1 w-24 bg-[#6E8E59] mx-auto mt-3 mb-5 rounded-full"></div>

        <div className="relative">
          <button
            onClick={showPrevSlide}
            className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#780C28] p-3 rounded-full shadow transition-all duration-300 hover:scale-105"
            aria-label="السابق"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={showNextSlide}
            className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#780C28] p-3 rounded-full shadow transition-all duration-300 hover:scale-105"
            aria-label="التالي"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#780C28]/20 via-transparent to-[#6E8E59]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={`Gallery image ${image.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#780C28] to-[#6E8E59] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: Math.ceil(images.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 4)}
                className={`relative transition-all duration-300 ${
                  Math.floor(currentIndex / 4) === index
                    ? 'w-8 h-3 bg-gradient-to-r from-[#780C28] to-[#6E8E59] rounded-full shadow-lg'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                }`}
                aria-label={`Go to page ${index + 1}`}
              >
                {Math.floor(currentIndex / 4) === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#780C28] to-[#6E8E59] rounded-full blur-sm opacity-50"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation مباشرة داخل ملف Tailwind أو ملف خارجي */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Gallery;
