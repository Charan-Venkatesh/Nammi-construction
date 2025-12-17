
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
      id: "complete-solutions",
      title: "Complete Construction Solutions",
      icon: "Building2",
      desc: "End-to-end construction management for complex infrastructures.",
      details: "We handle everything from initial feasibility studies to final handover, ensuring a seamless process.",
      longDescription: "Our Complete Construction Solutions offer a holistic approach to building. We act as your single point of contact, managing every aspect of the lifecycle. From the initial soil testing and feasibility analysis to the final coat of paint and handover, our team ensures that your project stays on time, on budget, and up to the highest quality standards. We leverage advanced project management software and lean construction methodologies to minimize waste and maximize value.",
      features: [
        "Feasibility Studies & Site Analysis",
        "Project Management & Scheduling",
        "Cost Estimation & Budgeting",
        "Subcontractor Management",
        "Regulatory Compliance & Permitting",
        "Quality Control & Safety Supervision"
      ]
    },
    {
      id: "housing-business",
      title: "Housing & Business Projects",
      icon: "Home",
      desc: "Residential and commercial masterpieces built to last.",
      details: "Luxury residences and high-performance commercial spaces designed for modern living.",
      longDescription: "Whether it is a luxury high-rise apartment complex or a state-of-the-art corporate headquarters, Nammi Construction delivers spaces that inspire. We understand that housing needs warmth and functionality, while business spaces need efficiency and branding. Our dual expertise allows us to create mixed-use developments that blend the best of both worlds.",
      features: [
        "Luxury Residential Towers",
        "Corporate Office Parks",
        "Mixed-Use Developments",
        "Gated Communities",
        "Smart Home Integration",
        "Green Building Certifications (LEED)"
      ]
    },
    {
      id: "renovation",
      title: "Renovation Services",
      icon: "Hammer",
      desc: "Revitalizing existing structures with modern standards.",
      details: "Careful restoration and modernization of heritage and aging buildings.",
      longDescription: "Renovation requires a delicate balance between preserving the old and introducing the new. Our team specializes in structural retrofitting, heritage restoration, and modernizing outdated facilities. We breathe new life into existing structures, improving energy efficiency, safety, and aesthetics without losing the building's original character.",
      features: [
        "Structural Retrofitting",
        "Heritage Restoration",
        "Facade Modernization",
        "Energy Efficiency Upgrades",
        "Interior Remodeling",
        "Seismic Strengthening"
      ]
    },
    {
      id: "developments",
      title: "Developments",
      icon: "Ruler",
      desc: "Large scale urban planning and development.",
      details: "Transforming raw land into thriving communities with sustainable planning.",
      longDescription: "Our Development division looks at the big picture. We transform raw land into thriving communities. This involves intricate master planning, infrastructure development (roads, utilities, drainage), and zoning optimization. We work closely with urban planners and local authorities to create sustainable, future-proof environments.",
      features: [
        "Master Planning & Urban Design",
        "Land Acquisition & Zoning",
        "Infrastructure Development",
        "Road & Utility Networks",
        "Landscape Architecture",
        "Community Amenities Planning"
      ]
    },
    {
      id: "interiors",
      title: "Home Interiors",
      icon: "PaintBucket",
      desc: "Crafting inner spaces that inspire and comfort.",
      details: "Bespoke interior design and fit-outs for residential and corporate clients.",
      longDescription: "A building is only as good as its interior. Our Interior Design team works hand-in-hand with architects to ensure a seamless flow between the exterior and interior. We specialize in bespoke joinery, lighting design, and space planning. Whether it's a minimalist Scandinavian home or a lavish corporate lobby, we craft environments that elevate the human experience.",
      features: [
        "Space Planning & Layout",
        "Custom Joinery & Millwork",
        "Lighting Design",
        "Material Selection & Sourcing",
        "Furniture Procurement",
        "Smart Automation Integration"
      ]
    },
    {
      id: "design-build",
      title: "Design-Build Solutions",
      icon: "PenTool",
      desc: "Integrated design and delivery for unified vision.",
      details: "A single point of responsibility for both design and construction phases.",
      longDescription: "The Design-Build model streamlines the construction process by overlapping the design and construction phases. This results in faster delivery, reduced costs, and fewer change orders. Our in-house architects and engineers work alongside our construction managers from day one, ensuring that every design decision is buildable and budget-conscious.",
      features: [
        "Single Point of Responsibility",
        "Accelerated Project Delivery",
        "Cost Certainty",
        "Collaborative Problem Solving",
        "Value Engineering",
        "Reduced Administrative Burden"
      ]
    },
    {
      id: "quality-safety",
      title: "Quality & Safety Assurance",
      icon: "ShieldCheck",
      desc: "Uncompromising safety standards and rigorous testing.",
      details: "We adhere to the strictest international safety and quality protocols.",
      colSpan: true,
      longDescription: "Safety is not just a policy; it is our culture. We strictly adhere to international safety standards (OSHA/ISO) to ensure zero accidents. Our Quality Assurance program involves rigorous material testing, regular site inspections, and third-party audits. We build structures that are not only beautiful but also safe and durable for generations.",
      features: [
        "ISO 9001 & 45001 Compliance",
        "Rigorous Material Testing",
        "Regular Site Safety Audits",
        "Worker Safety Training",
        "Environmental Impact Assessments",
        "Post-Construction Warranty"
      ]
    },
  ],
  projects: [
    {
      id: "vertex-tower",
      title: "The Vertex Tower",
      category: "Commercial",
      location: "Zurich",
      image: "/images/project1.jpg",
      year: "2023",
      client: "Global Corp Holdings",
      challenge: "Constructing a 40-story glass facade tower in a high-wind zone with minimal disruption to the surrounding busy business district.",
      solution: "We utilized a top-down construction method to speed up the basement works and employed a self-climbing formwork system for the core. A specialized wind-tunnel tested facade system was custom designed.",
      outcome: "Completed 2 months ahead of schedule. The building is now a LEED Platinum certified landmark in Zurich."
    },
    {
      id: "alpine-residence",
      title: "Alpine Residence",
      category: "Residential",
      location: "Lucerne",
      image: "/images/project2.jpg",
      year: "2022",
      client: "Luxury Living AG",
      challenge: "Building luxury villas on a steep, rocky slope overlooking the lake, requiring complex retaining structures.",
      solution: "We implemented a terraced foundation system using micro-piles to minimize excavation. The design integrated local stone to blend the structures into the mountainside.",
      outcome: "Award-winning design that offers panoramic views while maintaining complete privacy and structural integrity."
    },
    {
      id: "tech-hub-one",
      title: "Tech Hub One",
      category: "Commercial",
      location: "Geneva",
      image: "/images/project3.jpg",
      year: "2023",
      client: "Innovate Swiss",
      challenge: "Retrofitting an old industrial warehouse into a modern, energy-efficient tech campus.",
      solution: "We preserved the original steel trusses while installing a high-performance thermal envelope inside. Solar roof tiles and geothermal heating were added.",
      outcome: "A net-zero energy campus that preserves industrial heritage while providing cutting-edge workspace."
    },
    {
      id: "lakeview-villa",
      title: "Lakeview Villa",
      category: "Residential",
      location: "Zug",
      image: "/images/project4.jpg",
      year: "2024",
      client: "Private Client",
      challenge: "Creating a minimalist, open-plan home with 10-meter cantilevered sections.",
      solution: "Used post-tensioned concrete slabs to achieve long spans without columns. Floor-to-ceiling structural glass was used as load-bearing elements in key areas.",
      outcome: "A gravity-defying architectural marvel that blurs the line between indoor and outdoor living."
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
