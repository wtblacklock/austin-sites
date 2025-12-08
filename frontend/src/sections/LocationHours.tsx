import { foodTruck } from "@/config/foodTruck.config";
import Link from "next/link";

export function LocationHours() {
  const { primaryLocation, hours, phone, instagramUrl } = foodTruck;

  // Function to make "check Instagram" clickable
  const renderHoursValue = (value: string) => {
    if (value.toLowerCase().includes("instagram")) {
      const parts = value.split(/(check Instagram|instagram)/i);
      return parts.map((part, i) => {
        if (part.toLowerCase().includes("instagram")) {
          return (
            <Link
              key={i}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF000D] underline hover:text-[#cc000a]"
            >
              {part}
            </Link>
          );
        }
        return part;
      });
    }
    return value;
  };

  return (
    <section id="location" className="pt-24 pb-20 px-6 md:pb-28 lg:pb-36 bg-[#faf8f5]">
      <div className="container-grid">
        {/* Header - Left aligned, no separator */}
        <div className="mb-12">
          <h2 className="font-chunky text-4xl sm:text-5xl md:text-6xl text-[#FF000D]">
            Find Us
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Address */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF000D] mb-3">
                Location
              </h3>
              <Link
                href={primaryLocation.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#FF000D] transition-colors"
              >
                <p className="text-2xl font-semibold text-[#1a1a1a] hover:text-[#FF000D]">
                  {primaryLocation.address.split(",")[0]}
                </p>
                <p className="text-xl text-[#1a1a1a]/70 hover:text-[#FF000D]">
                  {primaryLocation.address.split(",").slice(1).join(",")}
                </p>
              </Link>
            </div>

            <p className="text-lg text-[#1a1a1a]/60 italic">
              Usually parked off Slaughter Lane in South Austin.{" "}
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF000D] underline hover:text-[#cc000a]"
              >
                Check Instagram
              </Link>{" "}
              stories for pop ups and updated hours.
            </p>

            {/* Desktop only button */}
            <Link
              href={primaryLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block bg-[#FF000D] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#cc000a] transition-colors shadow-lg"
            >
              Open in Maps
            </Link>
          </div>

          {/* Right: Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF000D] mb-6">
              Hours
            </h3>
            <div className="space-y-3">
              {hours.map((day, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-[#FF000D]/20 pb-3"
                >
                  <span className="font-semibold text-[#1a1a1a]">{day.label}</span>
                  <span className="text-[#1a1a1a]/70">{renderHoursValue(day.value)}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="text-3xl font-bold text-[#FF000D] hover:text-[#cc000a] transition-colors"
              >
                {phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
