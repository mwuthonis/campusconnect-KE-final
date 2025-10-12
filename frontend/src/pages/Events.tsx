import { useState } from "react";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EventCard from "@/components/EventCard";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("all");

  // Mock events data
  const events = [
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
    {
      id: "4",
      title: "Business Leadership Workshop",
      university: "Strathmore University",
      date: "April 12, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Business School, Nairobi",
      attendees: 85,
      maxAttendees: 100,
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop",
      price: 1500,
    },
    {
      id: "5",
      title: "Artificial Intelligence Bootcamp",
      university: "Jomo Kenyatta University",
      date: "April 18, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "ICT Complex, Juja",
      attendees: 120,
      maxAttendees: 150,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      price: 0,
    },
    {
      id: "6",
      title: "Creative Writing Workshop",
      university: "Egerton University",
      date: "April 25, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Arts Building, Njoro Campus",
      attendees: 45,
      maxAttendees: 50,
      category: "Arts",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop",
      price: 300,
    },
  ];

  const categories = ["All", "Technology", "Healthcare", "Business", "Environment", "Arts"];
  const universities = [
    "All Universities",
    "University of Nairobi",
    "Kenyatta University",
    "Moi University",
    "Strathmore University",
    "Jomo Kenyatta University",
    "Egerton University",
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Discover Events
          </h1>
          <p className="text-muted-foreground">
            Find educational conferences and workshops across Kenyan universities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-xl shadow-smooth mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search events by title, university, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-11">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
              <SelectTrigger className="h-11">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <SelectValue placeholder="University" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {universities.map((university) => (
                  <SelectItem key={university} value={university.toLowerCase().replace(/\s+/g, "-")}>
                    {university}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="h-11">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{events.length}</span> events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
