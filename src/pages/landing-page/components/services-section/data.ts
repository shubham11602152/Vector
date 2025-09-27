// Data for workshops and portfolio services, separated for fast refresh compatibility

export interface Workshop {
  focusArea: string;
  benefits: string;
  audience: string;
}

export interface PortfolioService {
  service: string;
  description: string;
  investment: string;
}

export const workshops: Workshop[] = [
  {
    focusArea: "Academic & Career Blueprinting",
    benefits:
      "Clarity, Focus, and Direction. In-depth programs to help students identify their ideal career path and understand the academic requirements needed to get there. Includes structured sessions on The Job Universe, personality assessments, career traits, and the fundamental expectations of professional life.",
    audience: "Students (Classes 9th, 10th, 11th, 12th)",
  },
  {
    focusArea: "Individualized Strategy & Analysis",
    benefits:
      "Self-Awareness and Optimized Learning. Deep-dive workshops focused on personal growth. Utilizing SWOT Analysis to identify strengths and weaknesses and defining optimal Learning Styles to maximize retention and academic performance.",
    audience: "Students, Graduates, and Professionals",
  },
  {
    focusArea: "Professional Readiness & Placements",
    benefits:
      "Market-Ready Skills and Confidence. Intensive training designed to bridge the gap between education and employment. Includes modules on corporate expectations, essential Sales Techniques, Advanced Interview Skills, and placement preparation strategies.",
    audience: "Final-Year Students and Graduates",
  },
  {
    focusArea: "Essential Life Skills & Awareness",
    benefits:
      "Holistic Development. Focused sessions covering sensitive, necessary topics such as Personality Development, Work Fundamentals, and comprehensive Sex Education to foster informed decision-making and personal integrity.",
    audience: "Schools and Colleges",
  },
  {
    focusArea: "Corporate Sales & Interviews",
    benefits:
      "Performance Enhancement. Custom-designed training sessions for organizations seeking to elevate their team’s Sales Performance, Negotiation Skills, and Interviewing Proficiency.",
    audience: "Corporate Clients",
  },
];

export const portfolioServices: PortfolioService[] = [
  {
    service: "Career Portfolio (10th Grade)",
    description:
      "A foundational document providing a professional summary of the student's aptitudes, initial career inclinations, and recommended next steps for stream selection.",
    investment: "1,300",
  },
  {
    service: "Career Portfolio (12th Grade)",
    description:
      "A strategic document mapping the student’s personality profile, skill assessment, and detailed academic options to guide university and course applications.",
    investment: "1,800",
  },
  {
    service: "Career Portfolio (Graduates)",
    description:
      "An executive strategy document detailing the graduate’s professional positioning, market fit, target roles, and a clear roadmap for the first five years of their career.",
    investment: "2,500",
  },
  {
    service: "Parent Counselling Session",
    description:
      "A dedicated 2-hour session providing parents with actionable insights into their child's aptitudes, learning style, and career trajectory, ensuring informed and supportive guidance at home.",
    investment: "3,000",
  },
];
