import { Link } from 'react-router-dom';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import { useStore } from '../store';

export function Training() {
  const { courses } = useStore();

  const getWhatsAppLink = (courseTitle: string) => {
    const message = `Hello Coach Clement,\n\nI am interested in enrolling for the ${courseTitle} training program.\n\nPlease provide details on registration and payment.\n\nThank you.`;
    return `https://wa.me/2347033325827?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-white/10 pb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Digital Skills <span className="text-[#4DA6FF]">Training Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive, step-by-step courses designed to equip you with practical, high-income digital skills.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {course.isCustom && (
                      <span className="px-3 py-1 bg-[#4DA6FF]/10 text-[#4DA6FF] text-xs font-bold uppercase tracking-wider rounded-full">
                        New
                      </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342]">{course.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> Reviews: <span className="text-[#0A2342]">4.9/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-72 shrink-0 flex flex-col justify-center">
                  <div className="bg-[#0A2342] text-white p-8 rounded-2xl text-center shadow-xl">
                    <div className="text-lg font-medium text-gray-300 mb-2">Enrollment Status</div>
                    <div className="text-2xl font-bold mb-8 text-[#4DA6FF]">Open</div>
                    <a
                      href={getWhatsAppLink(course.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-[#25D366] hover:bg-[#1fad53] text-white font-bold rounded-lg transition-colors mb-4 flex justify-center items-center gap-2"
                    >
                      Enroll via WhatsApp <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-[#4DA6FF]/10 rounded-2xl p-10 border border-[#4DA6FF]/20">
            <h3 className="text-2xl font-bold text-[#0A2342] mb-4">More Courses Coming Soon</h3>
            <p className="text-gray-600 mb-0">Coach Clement is constantly developing new training materials. Check back for fresh content!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
