
export const SITE_DATA = {
  company: {
    name: "Nammi Construction",
    tagline: "Foundations of Strength, Pillars of Trust",
    description: "Creating Landmarks, Earning Trust. A legacy of precision engineering and Swiss-inspired architectural rigor.",
    contact: {
      address: "123 Architecture Blvd, Zurich, Switzerland",
      phone: "+41 123 456 789",
      email: "contact@nammi.construction",
    }
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    {
      id: "s1",
      title: "Complete Solutions",
      icon: "Building2",
      desc: "End-to-end construction management for complex infrastructures.",
      details: "We handle everything from initial feasibility studies to final handover, ensuring a seamless process."
    },
    {
      id: "s2",
      title: "Housing & Business",
      icon: "Home",
      desc: "Residential and commercial masterpieces built to last.",
      details: "Luxury residences and high-performance commercial spaces designed for modern living."
    },
    {
      id: "s3",
      title: "Renovation",
      icon: "Hammer",
      desc: "Revitalizing existing structures with modern standards.",
      details: "Careful restoration and modernization of heritage and aging buildings."
    },
    {
      id: "s4",
      title: "Developments",
      icon: "Ruler",
      desc: "Large scale urban planning and development.",
      details: "Transforming raw land into thriving communities with sustainable planning."
    },
    {
      id: "s5",
      title: "Interiors",
      icon: "PaintBucket",
      desc: "Crafting inner spaces that inspire and comfort.",
      details: "Bespoke interior design and fit-outs for residential and corporate clients."
    },
    {
      id: "s6",
      title: "Design-Build",
      icon: "PenTool",
      desc: "Integrated design and delivery for unified vision.",
      details: "A single point of responsibility for both design and construction phases."
    },
    {
      id: "s7",
      title: "Quality Assurance",
      icon: "ShieldCheck",
      desc: "Uncompromising safety standards and rigorous testing.",
      details: "We adhere to the strictest international safety and quality protocols.",
      colSpan: true
    },
  ],
  projects: [
    {
      id: "p1",
      title: "The Vertex Tower",
      category: "Commercial",
      location: "Zurich",
      image: "/images/project1.jpg", // Placeholder
      year: "2023"
    },
    {
      id: "p2",
      title: "Alpine Residence",
      category: "Residential",
      location: "Lucerne",
      image: "/images/project2.jpg", // Placeholder
      year: "2022"
    },
    {
      id: "p3",
      title: "Tech Hub One",
      category: "Commercial",
      location: "Geneva",
      image: "/images/project3.jpg", // Placeholder
      year: "2023"
    },
    {
      id: "p4",
      title: "Lakeview Villa",
      category: "Residential",
      location: "Zug",
      image: "/images/project4.jpg", // Placeholder
      year: "2024"
    }
  ],
  stats: [
    { value: 100, label: "Projects", suffix: "+" },
    { value: 100, label: "Satisfaction", suffix: "%" },
    { value: 25, label: "Years Experience", suffix: "" },
    { value: 15, label: "Awards", suffix: "" },
  ],
  team: [
    { name: "Adrian V.", role: "Lead Architect" },
    { name: "Sarah M.", role: "Project Manager" },
    { name: "Thomas K.", role: "Structural Engineer" },
  ]
};
