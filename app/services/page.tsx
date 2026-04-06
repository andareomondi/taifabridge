export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored applications built from the ground up to meet your specific needs and goals.",
    },
    {
      title: "Web Applications",
      description:
        "Fast, responsive web apps that deliver exceptional user experiences across all devices.",
    },
    {
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile applications that reach your users anywhere.",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with your users in mind.",
    },
    {
      title: "API Development",
      description:
        "Robust backend systems and APIs that power modern applications.",
    },
    {
      title: "Consulting",
      description:
        "Expert guidance on technology strategy and software architecture decisions.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-red-950 via-orange-900 to-red-900 border-b border-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-white">Our</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Services
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Comprehensive software solutions designed to help your business grow
            and succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-red-900 via-red-800 to-amber-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-red-900 bg-opacity-60 rounded-2xl border border-yellow-500 border-opacity-40 hover:border-opacity-100 hover:bg-opacity-80 transition backdrop-blur-sm"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-red-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
            <span className="text-white">How We</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We understand your vision, goals, and requirements in detail.",
              },
              {
                num: "02",
                title: "Planning",
                desc: "Creating a roadmap and strategy tailored to your needs.",
              },
              {
                num: "03",
                title: "Development",
                desc: "Building your solution with care and attention to quality.",
              },
              {
                num: "04",
                title: "Launch",
                desc: "Deploying your application and ensuring success.",
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 items-start">
                <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent min-w-fit">
                  {step.num}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
