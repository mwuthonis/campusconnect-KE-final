import { Target, Users, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create a unified platform that connects students, educators, and institutions across Kenya through meaningful educational events and conferences.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in the power of academic communities to drive innovation and growth. Every feature is designed with the community in mind.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Leveraging technology to make event discovery and booking seamless, efficient, and accessible to all university communities.",
    },
    {
      icon: Heart,
      title: "Passion for Education",
      description:
        "We're driven by a deep commitment to supporting educational excellence and academic collaboration across Kenya.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CampusConnect KE
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CampusConnect KE is Kenya's premier platform for discovering and booking educational
            events and conferences across universities. We're on a mission to strengthen academic
            communities by making it easier for students and educators to connect through meaningful
            events.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Partner Universities</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="text-4xl font-heading font-bold text-secondary mb-2">10K+</div>
            <p className="text-muted-foreground">Active Students</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="text-4xl font-heading font-bold text-accent mb-2">500+</div>
            <p className="text-muted-foreground">Events Hosted</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-smooth hover-lift">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto bg-muted/50 p-8 md:p-12 rounded-xl">
          <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              CampusConnect KE was born from a simple observation: university students and educators
              across Kenya were missing out on valuable events simply because they didn't know they
              existed. Information about conferences, workshops, and seminars was scattered across
              different platforms, making it difficult to discover opportunities.
            </p>
            <p>
              We set out to solve this problem by creating a centralized platform where all
              educational events across Kenyan universities could be discovered, shared, and booked
              easily. What started as a small project has grown into a thriving community of
              students, educators, and institutions working together to advance education in Kenya.
            </p>
            <p>
              Today, CampusConnect KE serves thousands of users across multiple universities,
              helping them discover opportunities for learning, networking, and professional growth.
              We're just getting started, and we're excited about the future of academic
              collaboration in Kenya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
