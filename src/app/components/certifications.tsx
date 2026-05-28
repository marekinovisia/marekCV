import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Certifications = readonly string[];

interface CertificationsProps {
  certifications: Certifications;
  className?: string;
}

/**
 * Certifications section component
 * Displays professional certifications as badges
 */
export function Certifications({
  certifications,
  className,
}: CertificationsProps) {
  if (certifications.length === 0) return null;

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <ul
        className={cn("flex list-none flex-wrap gap-1 p-0")}
        aria-label="List of certifications"
      >
        {certifications.map((certification) => (
          <li key={certification}>
            <Badge
              className="print:text-[10px]"
              aria-label={`Certification: ${certification}`}
            >
              {certification}
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
