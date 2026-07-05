import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import AppLink from "@/presentation/components/AppLink";

export interface HeroCarouselItemProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: {
    url: string;
    label: string;
  };
  button?: {
    label: string;
    url: string;
  };
}

interface SliderProps {
  slides: HeroCarouselItemProps[];
}

export default function Slider({ slides }: SliderProps) {
  return (
    <div className="w-full mx-auto flex">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((item) => (
            <CarouselItem key={item.title}>
              <HeroCarouselItem {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {slides.length > 1 && (
          <>
            <CarouselPrevious className="hidden lg:flex absolute xl:w-10 xl:h-10 w-8 h-8 left-2 top-1/2 -translate-y-1/2 bg-green-pea text-white hover:bg-green-pea/70 font-bold text-xl hover:text-white" />
            <CarouselNext className="hidden lg:flex absolute xl:w-10 xl:h-10 w-8 h-8 right-2 top-1/2 -translate-y-1/2 bg-green-pea text-white hover:bg-green-pea/70 font-bold text-xl hover:text-white" />
          </>
        )}
      </Carousel>
    </div>
  );
}

function HeroCarouselItem(props: HeroCarouselItemProps) {
  return (
    <>
      <div className="relative lg:flex hidden h-[400px] w-full lg:px-12">
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src={props.imageUrl}
          alt={props.title}
        />
        <div className="w-full h-3/4 md:relative grid lg:flex items-center sticky ">
          <Card className="w-1/3 h-fit bg-white rounded-none overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl text-start text-balance font-bold font-[serif]">
                {props.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-start text-sm">
                {props.link && (
                  <>
                    <AppLink
                      to={props.link.url}
                      className="text-green-pea hover:underline"
                    >
                      {props.link.label}
                    </AppLink>{" "}
                  </>
                )}
                {props.description}
              </CardDescription>
            </CardContent>
            {props.button && (
              <CardFooter>
                <Button
                  variant="default"
                  className="w-full xl:w-fit rounded-none"
                >
                  <Link to={props.button.url} className="font-bold">
                    {props.button.label}
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
      <div className="lg:hidden">
        <img
          className="w-full h-[300px] object-cover"
          src={props.imageUrl}
          style={{
            objectPosition: "80% 50%",
          }}
          alt={props.title}
        />
        <div className="w-full h-3/4 md:relative grid lg:flex items-center sticky ">
          <Card className="h-fit bg-white rounded-none overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl text-start text-balance font-bold font-[serif]">
                {props.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-start text-sm">
                {props.link && (
                  <>
                    <AppLink
                      to={props.link.url}
                      className="text-green-pea hover:underline"
                    >
                      {props.link.label}
                    </AppLink>{" "}
                  </>
                )}
                {props.description}
              </CardDescription>
            </CardContent>
            {props.button && (
              <CardFooter>
                <Button variant="default" className="w-full py-4 rounded-none">
                  <Link to={props.button.url} className="font-bold">
                    {props.button.label}
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
