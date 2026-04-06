import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-20 text-center bg-gradient-to-br from-red-950 via-orange-900 to-red-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="text-amber-300 font-semibold tracking-widest mb-4 text-xs sm:text-sm uppercase">
            Bridging People & Technology
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="block mb-2 sm:mb-3">Build</span>
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Amazing Software
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            We&apos;re a new software group dedicated to creating meaningful
            applications that connect people with technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-red-950 font-bold rounded-full hover:from-yellow-300 hover:to-amber-300 active:scale-95 transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              View Services
            </Link>
            <Link
              href="/about"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-300 font-bold rounded-full hover:bg-yellow-400 hover:text-red-950 active:scale-95 transition text-sm sm:text-base"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-red-900 via-red-800 to-amber-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
            <span className="text-white">What We</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Believe In
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Innovation",
                desc: "Cutting-edge solutions built with modern technologies and forward-thinking approaches.",
              },
              {
                title: "People First",
                desc: "Creating software that puts user experience at the center of everything we build.",
              },
              {
                title: "Growth",
                desc: "Building our foundation and scaling with purpose for long-term success and impact.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border border-yellow-500 border-opacity-40 hover:border-opacity-100 hover:bg-opacity-80 transition backdrop-blur-sm"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-red-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
            <div className="text-center p-6 sm:p-8 bg-red-900 bg-opacity-40 rounded-xl border border-yellow-600 border-opacity-30">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">
                100%
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base">
                Focused on Quality
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-red-900 bg-opacity-40 rounded-xl border border-yellow-600 border-opacity-30">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">
                24/7
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base">
                Dedicated Support
              </p>
            </div>
            <div className="text-center p-6 sm:p-8 bg-red-900 bg-opacity-40 rounded-xl border border-yellow-600 border-opacity-30">
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">
                ∞
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base">
                Growing Together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-red-950 to-orange-900 border-t border-yellow-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            <span className="text-white">Ready to Build</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Something Amazing?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8">
            Let&apos;s explore how we can help bring your ideas to life.
          </p>
          <Link
            href="/services"
            className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-red-950 font-bold rounded-full hover:from-yellow-300 hover:to-amber-300 active:scale-95 transition transform hover:scale-105 text-xs sm:text-base shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
