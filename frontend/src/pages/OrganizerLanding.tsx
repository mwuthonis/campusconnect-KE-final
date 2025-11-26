import { Calendar, BarChart2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OrganizerLanding = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-base font-medium text-primary">
              Organizer Portal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Manage and Host Events
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome! Organize, manage and track the impact of your campus events on one platform.
          </p>
          <div className="space-x-4">
            <Link to="/organizer/events">
              <Button variant="default" size="lg">My Events</Button>
            </Link>
            <Link to="/organizer/create">
              <Button variant="outline" size="lg">Create New Event</Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold">12</div>
            <div className="text-muted-foreground">Your Events</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mx-auto mb-4">
              <BarChart2 className="h-6 w-6 text-accent" />
            </div>
            <div className="text-3xl font-bold">530</div>
            <div className="text-muted-foreground">Total Attendees</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold">4.7/5</div>
            <div className="text-muted-foreground">Avg. Event Rating</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="rounded-2xl bg-muted/40 p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-wrap gap-4 justify-center my-4">
            <Link to="/organizer/events">
              <Button size="lg" variant="default">Manage Events</Button>
            </Link>
            <Link to="/organizer/create">
              <Button size="lg" variant="outline">Create Event</Button>
            </Link>
            <Link to="/organizer/analytics">
              <Button size="lg" variant="secondary">View Analytics</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerLanding;
