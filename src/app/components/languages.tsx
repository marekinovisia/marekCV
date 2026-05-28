import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Languages = (typeof RESUME_DATA)["languages"];

interface LanguagesProps {
  languages: Languages;
  className?: string;
}

/**
 * Languages section component
 * Displays spoken languages grouped by proficiency level
 */
export function Languages({ languages, className }: LanguagesProps) {
  if (languages.length === 0) return null;

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="languages-section">
        Languages
      </h2>
      <ul className="flex list-none flex-col gap-2 p-0" aria-label="Languages">
        {languages.map((group) => (
          <li key={group.level} className="flex flex-wrap items-center gap-1">
            <span className="font-mono text-xs text-foreground/70 print:text-[10px]">
              {group.level}:
            </span>
            {group.items.map((language) => (
              <Badge
                key={language}
                className="print:text-[10px]"
                aria-label={`${group.level}: ${language}`}
              >
                {language}
              </Badge>
            ))}
          </li>
        ))}
      </ul>
    </Section>
  );
}
