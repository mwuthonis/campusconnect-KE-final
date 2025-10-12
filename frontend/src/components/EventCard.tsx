import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  university: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  category: string;
  image: string;
  price?: number;
}

const EventCard = ({
  id,
  title,
  university,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  category,
  image,
  price = 0,
}: EventCardProps) => {
  const isFree = price === 0;
  const spotsLeft = maxAttendees - attendees;
  const isAlmostFull = spotsLeft <= 10 && spotsLeft > 0;

  return (
    <Card className="overflow-hidden hover-lift group">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {category}
          </Badge>
        </div>
        {isAlmostFull && (
          <div className="absolute top-3 right-3">
            <Badge variant="destructive" className="bg-accent backdrop-blur">
              Only {spotsLeft} spots left!
            </Badge>
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-heading font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{university}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>
              {attendees}/{maxAttendees} attending
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            {isFree ? (
              <span className="text-lg font-heading font-bold text-secondary">Free</span>
            ) : (
              <span className="text-lg font-heading font-bold">KSh {price.toLocaleString()}</span>
            )}
          </div>
          <Link to={`/events/${id}`}>
            <Button size="sm" className="gradient-primary">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
