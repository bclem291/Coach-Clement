import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageCircle, Star, Users, Briefcase, Award, Facebook, Image as ImageIcon } from 'lucide-react';

const REVIEWS = [
  {
    name: "Michael Adeyemi",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&auto=format&fit=crop",
    text: "I enrolled in Coach Clement's digital marketing training with little knowledge of online business. The lessons were practical, easy to understand, and full of real-life examples. Within a few weeks, I started getting clients for social media management. I highly recommend Coach Clement to anyone serious about learning digital skills."
  },
  {
    name: "Olatunji Tosin",
    location: "Lagos",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1eb1c4?q=80&w=150&auto=format&fit=crop",
    text: "As a beginner, I was afraid digital skills would be difficult to learn, but Coach Clement made everything simple. The support and guidance I received during the training were excellent. I now have the confidence to offer my services online and earn extra income. Thank you, Coach Clement!"
  },
  {
    name: "Ebuka Kenneth",
    location: "Anambra",
    image: "https://images.unsplash.com/photo-1523824922382-225823246eb6?q=80&w=150&auto=format&fit=crop",
    text: "Coach Clement's graphic design training changed my perspective completely. The classes were detailed and practical. I can now create professional designs for businesses and churches. This training was worth every minute."
  },
  {
    name: "Usman Adams",
    location: "Abuja",
    image: "https://images.unsplash.com/photo-1507153715104-e3cc8a5eb0ff?q=80&w=150&auto=format&fit=crop",
    text: "I joined Coach Clement's AI and content creation training and was amazed by the value provided. I learned how to use AI tools effectively to create content faster and better. The knowledge has helped me improve my online business."
  },
  {
    name: "Chiamaka Johnson",
    location: "Port Harcourt",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=150&auto=format&fit=crop",
    text: "The ebook creation and publishing training I received from Coach Clement was outstanding. I successfully created and published my first ebook after the training. Coach Clement is patient, knowledgeable, and genuinely interested in the success of his students."
  }
];
import { useStore } from '../store';

export function Home() {
  const { courses, coachPhoto } = useStore();
  // Display only top 6 courses for preview
  const previewCourses = courses.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2342] to-[#11315c] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Become Digitally Skilled and <br className="hidden md:block"/>
            <span className="text-[#4DA6FF]">Start Earning Online</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn practical digital skills from Coach Clement and discover how to create income opportunities online using your smartphone or laptop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/training" 
              className="px-8 py-4 bg-[#4DA6FF] hover:bg-[#338be6] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#4DA6FF]/20"
            >
              Join Training <ArrowRight className="h-5 w-5" />
            </Link>
            <a 
              href="https://wa.me/2347033325827" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" /> Chat with Coach Clement
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Master High-Income Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Equip yourself with the most in-demand digital skills and transform your smartphone into an income-generating tool.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewCourses.map((course) => (
              <div key={course.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-12 h-12 bg-[#4DA6FF]/10 text-[#4DA6FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{course.description}</p>
                <Link to="/training" className="text-[#4DA6FF] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/training" className="inline-flex items-center gap-2 font-semibold text-[#0A2342] hover:text-[#4DA6FF] transition-colors">
              View All Programs <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Coach Clement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-square bg-gray-100 rounded-3xl border-4 border-gray-50 flex items-center justify-center relative overflow-hidden shadow-lg">
                 {coachPhoto ? (
                   <img src={coachPhoto} alt="Coach Clement" className="w-full h-full object-cover" />
                 ) : (
                   <>
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2342]/10 to-[#4DA6FF]/10" />
                     <div className="flex items-center flex-col text-gray-400 gap-4">
                        <div className="w-24 h-24 rounded-full border-4 border-[#4DA6FF]/50 bg-white flex items-center justify-center text-sm font-bold text-[#0A2342]">
                          <ImageIcon className="h-8 w-8 text-gray-300" />
                        </div>
                        <span>Coach Clement Professional Photo</span>
                     </div>
                   </>
                 )}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0A2342] mb-6">About Coach Clement</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Coach Clement is a passionate Digital Skills Coach dedicated to helping students, entrepreneurs, and young professionals learn practical online skills that generate income and create amazing opportunities.
              </p>
              
              <h3 className="font-bold text-xl text-[#0A2342] mb-6">Why Learn With Me?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  'Practical Training', 'Beginner Friendly', 
                  'Step-by-Step Guidance', 'Affordable Programs', 
                  'Ongoing Support', 'Real-Life Applications'
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4DA6FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#4DA6FF]" />
                    </div>
                    <span className="font-medium text-gray-800">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take my word for it. See what my students are achieving.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 text-[#0A2342] font-bold text-lg rounded-full overflow-hidden flex items-center justify-center shrink-0">
                    {review.image ? (
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    ) : (
                      review.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2342] leading-tight">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="py-20 bg-[#4DA6FF] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl text-white/90 mb-10">Don't let another year pass without learning a high-income skill.</p>
          <a 
            href="https://wa.me/2347033325827"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A2342] hover:bg-gray-50 font-bold rounded-lg transition-all shadow-xl shadow-[#0A2342]/10 scale-100 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-6 w-6 text-green-500" /> 
            Chat with Coach Clement
          </a>
        </div>
      </section>
    </div>
  );
}
