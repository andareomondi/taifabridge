export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-red-950 via-orange-900 to-red-900 border-b border-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-white">About</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mt-1 sm:mt-2">Taifa Bridge Group</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200">A new studio dedicated to bridging people and technology.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-red-900 via-red-800 to-amber-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">
                <span className="text-white">Our</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                At Taifa Bridge Group, we believe software should serve people. We&apos;re building a studio that creates thoughtful, innovative solutions that make a real difference.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                We&apos;re just beginning, but we&apos;re committed to building something meaningful—one project, one team, one community at a time.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border border-yellow-500 border-opacity-40 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mb-3 sm:mb-4">🌉</div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Building bridges between vision and reality through code and creativity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-red-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
            <span className="text-white">Core</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border border-yellow-500 border-opacity-40 hover:border-opacity-100 transition backdrop-blur-sm text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💡</div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-300">We push boundaries and explore new possibilities in technology.</p>
            </div>
            
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border border-yellow-500 border-opacity-40 hover:border-opacity-100 transition backdrop-blur-sm text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">👥</div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">Collaboration</h3>
              <p className="text-sm sm:text-base text-gray-300">We believe in the power of teamwork and shared vision.</p>
            </div>
            
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border border-yellow-500 border-opacity-40 hover:border-opacity-100 transition backdrop-blur-sm text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">Growth</h3>
              <p className="text-sm sm:text-base text-gray-300">We&apos;re growing, learning, and improving every single day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-red-900 via-red-800 to-amber-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
            <span className="text-white">Our</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Story</span>
          </h2>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border-l-4 border-yellow-400 backdrop-blur-sm">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">We Started</h3>
              <p className="text-sm sm:text-base text-gray-300">With a vision to create software that truly serves people. A small team with big ideas about what technology can accomplish.</p>
            </div>
            
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border-l-4 border-yellow-400 backdrop-blur-sm">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">We Build</h3>
              <p className="text-sm sm:text-base text-gray-300">Solutions that matter. Each project is an opportunity to bridge the gap between vision and reality, creating tools that improve lives.</p>
            </div>
            
            <div className="p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border-l-4 border-yellow-400 backdrop-blur-sm">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">We Grow</h3>
              <p className="text-sm sm:text-base text-gray-300">Together with our clients and community. As we expand, we remain committed to the principles that started us: innovation, collaboration, and purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-red-950 to-orange-900 border-t border-yellow-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            <span className="text-white">Let&apos;s</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Build Together</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">Interested in working with us? We&apos;d love to hear from you.</p>
        </div>
      </section>
    </div>
  )
}
