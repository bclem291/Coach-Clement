import {  Target, Rocket, Heart, Lightbulb, Zap, CheckCircle2, Star } from 'lucide-react';

export function Vision() {
  const coreValues = [
    { name: 'Excellence', icon: Star, desc: 'Delivering the highest quality of practical education.' },
    { name: 'Integrity', icon: CheckCircle2, desc: 'Honest, transparent coaching that prioritizes student success.' },
    { name: 'Empowerment', icon: Zap, desc: 'Giving individuals the tools to control their financial destiny.' },
    { name: 'Innovation', icon: Lightbulb, desc: 'Staying ahead of digital trends to teach what works today.' },
    { name: 'Impact', icon: Heart, desc: 'Measuring success by the life-changing results of our students.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0A2342] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Our <span className="text-[#4DA6FF]">Vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            "To empower thousands of Nigerians with practical digital skills that create financial independence, personal growth, and sustainable opportunities."
          </p>
        </div>
      </section>

      {/* Mission & Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission Panel */}
            <div className="bg-gray-50 rounded-3xl p-10 md:p-12 border border-gray-100">
              <div className="w-16 h-16 bg-[#0A2342] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="h-8 w-8 text-[#4DA6FF]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-loose">
                To provide accessible, practical, and result-oriented digital skills training that equips students and entrepreneurs for success in the digital economy. We focus on step-by-step guidance rather than overwhelming theory.
              </p>
            </div>
            
            {/* Long Term Goal Panel */}
            <div className="bg-[#4DA6FF] rounded-3xl p-10 md:p-12 text-white shadow-xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Rocket className="h-8 w-8 text-[#0A2342]" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Long-Term Goal</h2>
              <p className="text-lg leading-loose font-medium text-white/90">
                To become one of Nigeria's leading digital skills coaching platforms, recognized not just for the volume of students taught, but for the tangible financial impact created in their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2342]">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#4DA6FF] mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#4DA6FF]/10 text-[#4DA6FF] rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2342]">{value.name}</h3>
                  </div>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-[#0A2342] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">How Coach Clement is Helping</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Students', desc: 'Providing side-income streams to support their education independently.' },
                { title: 'Youths', desc: 'Offering high-paying skill alternatives to traditional employment struggles.' },
                { title: 'Business Owners', desc: 'Teaching modern marketing to scale profits and attract online customers.' },
                { title: 'Entrepreneurs', desc: 'Building solid foundations for launching lucrative digital products.' }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                  <h3 className="text-2xl font-bold text-[#4DA6FF] mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}

// Ensure Star correctly imports from lucide in this component since we re-declare it inside array if we want. Wait, we imported Target, Rocket, etc., but missing Star.
