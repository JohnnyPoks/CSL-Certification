import { useState } from "react";
import { Course } from "@/models";
import { Rating } from "@smastrom/react-rating";
import { Skeleton } from "@/components/ui/skeleton";
import * as HoverCard from "@radix-ui/react-hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import AppLink from "./AppLink";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { HeartIcon, Trash2Icon } from "lucide-react";

export default function LessonCard({
  course,
  onRemove,
}: {
  course: Course;
  onRemove?: () => void;
}) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <HoverCard.Root openDelay={500}>
      <HoverCard.Trigger asChild>
        <div>
          <AppLink
            to={`/course/${course.id}`}
            className="no-underline text-black flex flex-col gap-1 rounded-none"
          >
            <div className="relative w-full h-48">
              {isImageLoading && (
                <Skeleton className="absolute inset-0 w-full h-full" />
              )}
              <img
                src={course.thumbnailURL}
                alt={course.title}
                className={`w-full h-full object-cover ${
                  isImageLoading ? "hidden" : "block"
                }`}
                onLoad={() => setIsImageLoading(false)}
              />
              {onRemove && (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onRemove();
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full p-1.5 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  variant="outline"
                  size="icon"
                >
                  <Trash2Icon className="text-red-500 w-4 h-4" />
                </Button>
              )}
            </div>
            <h3 className="text-lg font-semibold font-sans">{course.title}</h3>
            <span className="text-xs text-gray-500 font-sans">
              {course.instructorId}
            </span>
            <span className="text-gray-500 font-sans inline-flex items-center gap-1 text-xs">
              {course.rating?.toFixed(1)}
              <Rating
                className="max-w-20"
                readOnly
                orientation="horizontal"
                value={course.rating ?? 0}
              />
              ({course.totalRatings})
            </span>
            <span className="text-md text-gray-500 font-sans flex items-center gap-2">
              {course.discountPrice && (
                <span className="text-green-pea font-semibold">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(course.discountPrice)}
                </span>
              )}
              <span
                className={
                  course.discountPrice
                    ? "line-through text-gray-500 text-sm"
                    : "text-green-pea font-semibold text-md"
                }
              >
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(course.price)}
              </span>
            </span>
          </AppLink>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content side="right" hideWhenDetached className="w-96">
          <HoverCard.Arrow width={15} height={20} className="fill-green-pea" />
          <Card className="rounded-none border border-gray-300">
            <CardHeader>
              <CardTitle>
                <AppLink to={`/course/${course.id}`} className="no-underline">
                  <h3 className="text-lg font-semibold font-sans text-black hover:text-green-pea">
                    {course.title}
                  </h3>
                </AppLink>
              </CardTitle>
              <CardDescription>
                <span className="flex items-center gap-2 text-xs text-green-pea font-sans">
                  Updated
                  <span className="font-semibold">
                    {format(course.updatedAt.toDate(), "MMMM yyyy")}
                  </span>
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <span>
                    {Math.round(course.estimatedDuration / 60)} total hours
                  </span>{" "}
                  •{" "}
                  <span className="text-gray-500 capitalize">
                    {course.level}
                  </span>
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-sm text-gray-500">
                {course.description}
              </span>
              {course.whatYouWillLearn && (
                <ul className="list-inside text-sm text-gray-500">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="list-check-mark">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardFooter className="grid grid-cols-[1fr_auto] gap-2">
              <AppLink to={`/cart/add/${course.id}`} className="no-underline">
                <Button className="w-full rounded-none transition-colors duration-700 motion-reduce:transition-none bg-green-pea text-white font-semibold hover:bg-chelsea-gem">
                  Add to Cart
                </Button>
              </AppLink>
              <AppLink
                to={`/wishlist/add/${course.id}`}
                className="no-underline"
              >
                <Button
                  className="w-12 h-12 rounded-full p-2"
                  variant="outline"
                  size="icon"
                >
                  <HeartIcon />
                </Button>
              </AppLink>
            </CardFooter>
          </Card>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
