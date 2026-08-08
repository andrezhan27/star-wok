import { MotionReveal } from "@/components/star-wok/motion-reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <MotionReveal className="max-w-3xl">
      <p className="section-label">
        <span aria-hidden="true" />
        {label}
      </p>
      <h2 className={light ? "text-white" : "text-ink"}>{title}</h2>
      {description ? (
        <p className={`section-description ${light ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </MotionReveal>
  );
}
