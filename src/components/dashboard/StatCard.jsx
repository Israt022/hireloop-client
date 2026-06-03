import { Card } from "@heroui/react";

const StatCard = ({
  title,
  value,
  icon: Icon,
}) => {
  return (
    <Card className="border border-default-100 bg-content1 p-5">
      <div className="space-y-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-default-100 bg-default-50">
          {Icon && <Icon className="h-5 w-5" />}
        </div>

        <div>
          <p className="text-sm text-default-500">
            {title}
          </p>

          <h2 className="mt-1 text-3xl font-semibold">
            {value}
          </h2>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;