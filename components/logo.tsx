import { cn } from "@/lib/utils";

// Brand mark: the approved TerraScapes Landscaping logo (orange canopy in a
// white ring + wordmark), shipped as a transparent PNG in public/images/logo.png.
// build.sh rewrites the /images/ prefix to /preview/terrascapes/images/ on export.
export function TerraScapesLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <img
      src="/images/logo.png"
      alt="TerraScapes Landscaping"
      className={cn("w-auto shrink-0", compact ? "h-9" : "h-12", className)}
    />
  );
}
