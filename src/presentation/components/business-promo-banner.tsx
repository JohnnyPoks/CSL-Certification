import { Button } from "@/components/ui/button";

export default function BusinessPromoBanner() {
  return (
    <div className="p-6 bg-green-pea grid gap-4 lg:flex justify-between">
      <div>
        <span className="text-white text-md font-semibold">
          Training 2 or more people?
        </span>
        <span className="text-white text-md">
          {" "}
          Get your team access to CSL's top 27,000+ courses
        </span>
      </div>
      <div className="grid lg:flex gap-2 lg:gap-4">
        <Button variant="secondary" className="rounded-none">
          Get CSL for Business
        </Button>
        <Button
          className="rounded-none bg-transparent border border-white hover:bg-chelsea-gem/30 text-white hover:text-white"
          variant="outline"
          onClick={() => {
            localStorage.setItem("hideBusinessPromoBanner", "true");
          }}
        >
          Dismiss
        </Button>
      </div>
    </div>
  );
}
