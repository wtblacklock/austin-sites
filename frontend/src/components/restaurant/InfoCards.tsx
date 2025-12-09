const infoItems = [
  {
    title: "Fresh Daily",
    description: "Everything is made fresh every morning. We source local ingredients whenever possible.",
  },
  {
    title: "Family Owned",
    description: "Bella has been serving South Austin for over 16 years. Family recipes, family vibes.",
  },
  {
    title: "Catering",
    description: "Planning a party? We cater! Custom taco trays for office breakfasts, events, and more.",
  },
  {
    title: "Cash & Card",
    description: "We accept all major credit cards and cash. Easy ordering, no hassle.",
  },
  {
    title: "Gas Up & Taco Up",
    description: "Yes, we share a parking lot with a Shell station. Fill your tank, then fill your belly. ⛽🌮",
  },
];

export function InfoCards() {
  return (
    <section id="info" className="bg-[#111111] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Sticky text */}
          <div className="md:sticky md:top-32">
            <h2 className="font-chunky text-3xl md:text-4xl text-white mb-12">
              Things You Need to Know
            </h2>

            <div className="space-y-10">
              {infoItems.map((item, index) => (
                <div key={index}>
                  <h3 className="font-chunky text-2xl md:text-3xl text-[#FF6B00] mb-3">{item.title}</h3>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src="/images/bella.webp"
              alt="Bella"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
