export interface Course {
  id: string;
  title: string;
  description: string;
  benefits?: string[];
  duration?: string;
  skillLevel?: string;
  imageUrl?: string;
  isCustom?: boolean; // Indicates if uploaded by admin
}

export const INITIAL_COURSES: Course[] = [
  {
    id: 'smartphone-graphics',
    title: 'Smartphone Graphics Design',
    description: 'Learn how to create professional flyers, social media graphics, church banners, business adverts, and marketing designs using your smartphone.',
    benefits: ['Professional designs on-the-go', 'No expensive software needed', 'Client attraction strategies'],
    duration: '4 Weeks',
    skillLevel: 'Beginner to Intermediate',
    isCustom: false,
  },
  {
    id: 'ebook-creation',
    title: 'Ebook Creation & Publishing',
    description: 'Learn how to turn your knowledge into ebooks, design covers, publish digitally, and sell online for profit.',
    benefits: ['Passive income generation', 'Formatting and design', 'Amazon KDP basics'],
    duration: '3 Weeks',
    skillLevel: 'Beginner',
    isCustom: false,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Master online marketing strategies that help businesses attract customers and increase sales.',
    benefits: ['Social media growth', 'SEO fundamentals', 'Email marketing'],
    duration: '6 Weeks',
    skillLevel: 'All Levels',
    isCustom: false,
  },
  {
    id: 'facebook-ads',
    title: 'Facebook Ads Training',
    description: 'Learn how to create, manage, optimize, and scale profitable Facebook advertising campaigns.',
    benefits: ['High ROAS strategies', 'Audience targeting', 'Ad copywriting'],
    duration: '4 Weeks',
    skillLevel: 'Intermediate',
    isCustom: false,
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    description: 'Learn how to promote products and earn commissions online without creating your own products.',
    benefits: ['No product creation needed', 'High commission strategies', 'Sales funnel setup'],
    duration: '5 Weeks',
    skillLevel: 'Beginner',
    isCustom: false,
  }
];
