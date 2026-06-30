import { Card, Text } from "./ui";

interface InfoCardProps {
  label: string;
  value: string;
}

export function InfoCard({ label, value }: InfoCardProps) {
  return (
    <Card.Root>
      <Card.Body className="gap-1">
        <Text as="span" variant="label" className="text-olive">
          {label}
        </Text>

        <Text as="span" variant="body" className="text-xl">
          {value}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
