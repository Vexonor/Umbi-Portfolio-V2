import { Compare } from "@/components/ui/compare";

export function Compares() {
  return (
    <div
      className="rounded-xl w-[20rem] md:w-[35rem] lg:w-[50rem]">
      <Compare
        firstImage="/image/Lofi.svg"
        secondImage="/image/Hifi.svg"
        firstImageClassName="object-cover object-left-top !rounded-xl"
        secondImageClassname="object-cover object-left-top !rounded-xl"
        className="h-[250px] w-full md:h-[400px] lg:h-[500px] xl:h-[700px]"
        slideMode="hover" />
    </div>
  );
}
