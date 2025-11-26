import { Users, Calendar, BarChart2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AdminLanding = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome, Admin! Monitor platform engagement and manage campus events, organizers, and users efficiently.
          </p>
          <div className="space-x-4">
            <Link to="/admin/events">
              <Button variant="outline" size="lg">Manage Events</Button>
            </Link>
            <Link to="/admin/users">
              <Button variant="default" size="lg">Manage Users</Button>
            </Link>
          </div>
        </div>

        {/* Stats/Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold">1,240</div>
            <div className="text-muted-foreground">Total Users</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mx-auto mb-4">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <div className="text-3xl font-bold">320</div>
            <div className="text-muted-foreground">Events</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mx-auto mb-4">
              <BarChart2 className="h-6 w-6 text-accent" />
            </div>
            <div className="text-3xl font-bold">12,300</div>
            <div className="text-muted-foreground">Bookings</div>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-smooth text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/10 mx-auto mb-4">
              <Shield className="h-6 w-6 text-foreground" />
            </div>
            <div className="text-3xl font-bold">3</div>
            <div className="text-muted-foreground">Admins</div>
          </div>
        </div>

        {/* Platform Actions */}
        <div className="rounded-2xl bg-muted/40 p-8 text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4">Platform Quick Actions</h2>
          <div className="flex flex-wrap gap-4 justify-center my-4">
            <Link to="/admin/events">
              <Button size="lg" variant="default">Manage Events</Button>
            </Link>
            <Link to="/admin/users">
              <Button size="lg" variant="outline">Manage Users</Button>
            </Link>
            <Link to="/admin/reports">
              <Button size="lg" variant="secondary">Reports</Button>
            </Link>
            <Link to="/admin/settings">
              <Button size="lg" variant="ghost">Settings</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLanding;
