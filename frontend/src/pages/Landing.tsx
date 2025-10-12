import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Users, Shield, Sparkles, TrendingUp } from "lucide-react";
import EventCard from "@/components/EventCard";

const Landing = () => {
  // Mock featured events data
  const featuredEvents = [
    {
      id: "1",
      title: "Tech Innovation Summit 2025",
      university: "University of Nairobi",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus Auditorium, Nairobi",
      attendees: 245,
      maxAttendees: 300,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
      price: 0,
    },
    {
      id: "2",
      title: "Sustainable Development Conference",
      university: "Kenyatta University",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall, Kahawa Campus",
      attendees: 180,
      maxAttendees: 200,
      category: "Environment",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
      price: 500,
    },
    {
      id: "3",
      title: "Medical Research Symposium",
      university: "Moi University",
      date: "April 5, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Medical School, Eldoret",
      attendees: 295,
      maxAttendees: 300,
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      price: 1000,
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Easy Discovery",
      description: "Find events across all Kenyan universities in one place",
    },
    {
      icon: Calendar,
      title: "Smart Booking",
      description: "Secure your spot with instant confirmation and reminders",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow students and academics",
    },
    {
      icon: Shield,
      title: "Verified Events",
      description: "All events are verified by university administrators",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Connecting Kenya's Academic Community
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Discover Educational Events Across{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kenyan Universities
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join conferences, workshops, and seminars that shape the future of education and innovation in Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/events">
                <Button size="lg" className="gradient-primary text-lg px-8 gap-2">
                  <Search className="h-5 w-5" />
                  Browse Events
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Host an Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose CampusConnect KE?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The leading platform for academic events and conferences across Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-smooth hover-lift"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                Featured Events
              </h2>
              <p className="text-muted-foreground">
                Discover upcoming educational opportunities
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hidden md:flex">
                View All Events
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/events">
              <Button variant="outline" className="w-full max-w-xs">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-secondary opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Connect with Your Academic Community?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students and educators discovering meaningful events every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button size="lg" className="gradient-primary text-lg px-8">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
