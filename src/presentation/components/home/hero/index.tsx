import Slider, { HeroCarouselItemProps } from "./slider";
import Titles from "./titles";

const slides: HeroCarouselItemProps[] = [
  {
    description: "and achieve your goals. 5-10 minutes a day will do.",
    imageUrl:
      "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/542775ce-985d-4103-8f86-1bfc28afb29d.jpg",
    link: {
      url: "/",
      label: "Get back on track",
    },
    title: "Welcome back, Kenfack Sameza",
  },
  {
    description:
      "Now, unlock our best features with courses as low as $10.99 — limited time only.",
    imageUrl:
      "https://img-c.udemycdn.com/notices/web_carousel_slide/image/0d8c97db-5626-4a4d-9af2-56f4da5ad66e.png",
    title: "Kenfack Sameza, thanks for trying a free course",
  },
  {
    description:
      "Subscribe to a collection of our top courses in Javascript, CSS, React, and more with Personal Plan.",
    imageUrl:
      "https://img-c.udemycdn.com/notices/web_carousel_slide/image/6caba229-b963-4af8-84b8-f71693be2507.jpg",
    button: {
      url: "/free",
      label: "Try it free",
    },
    title: "Go further in web development",
  },
  {
    description:
      "Explore thousands of highly-rated courses with Personal Plan.",
    imageUrl:
      "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/5b48f5ce-9263-4442-9b3d-8f5068a8635e.jpg",
    button: {
      url: "/free",
      label: "Start free week",
    },
    title: "Craving some flexibility?",
  },
];

export default function Hero() {
  return (
    <section className="h-full bg-california flex flex-col gap-6">
      <Titles
        name="Kenfack Sameza Victorin-Joy"
        title="DevOps Engineer"
        avatarUrl="https://github.com/shadcn.png"
      />
      <Slider slides={slides} />
    </section>
  );
}
