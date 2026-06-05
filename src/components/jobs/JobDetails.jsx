import {
  Card,
  Chip,
  Button,
} from "@heroui/react";

import {
  MapPin,
  Briefcase,
  CircleDollar,
} from "@gravity-ui/icons";

export default function JobDetails({ job }) {
  const formatSalary = (amount) => {
    const value = parseInt(amount, 10);

    return value >= 1000
      ? `${value / 1000}k`
      : value;
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <Card className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-white">

        {/* Header */}

        <div className="flex items-center gap-4 mb-8">
          <img
            src={job.companyLogo}
            alt={job.companyName}
            className="w-16 h-16 rounded-xl object-contain bg-white p-2"
          />

          <div>
            <p className="text-zinc-400">
              {job.companyName}
            </p>

            <h1 className="text-4xl font-bold">
              {job.jobTitle}
            </h1>
          </div>
        </div>

        {/* Tags */}

        <div className="flex flex-wrap gap-3 mb-8">
          {job.isRemote && (
            <Chip color="secondary">
              Remote
            </Chip>
          )}

          <Chip
            startContent={
              <Briefcase className="w-4 h-4" />
            }
          >
            {job.jobType}
          </Chip>

          <Chip
            startContent={
              <CircleDollar className="w-4 h-4" />
            }
          >
            ${formatSalary(job.minSalary)} - $
            {formatSalary(job.maxSalary)}
          </Chip>

          {job.location && (
            <Chip
              startContent={
                <MapPin className="w-4 h-4" />
              }
            >
              {job.location}
            </Chip>
          )}
        </div>

        {/* Category */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Category
          </h2>

          <p className="text-zinc-300 capitalize">
            {job.jobCategory}
          </p>
        </div>

        {/* Responsibilities */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Responsibilities
          </h2>

          <ul className="space-y-2 text-zinc-300">
            {job.responsibilities
              ?.split("\n")
              .map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Requirements */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Requirements
          </h2>

          <ul className="space-y-2 text-zinc-300">
            {job.requirements
              ?.split("\n")
              .map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Benefits */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Benefits
          </h2>

          <ul className="space-y-2 text-zinc-300">
            {job.benefits
              ?.split("\n")
              .map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Deadline */}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Application Deadline
          </h2>

          <p className="text-zinc-400">
            {job.deadline}
          </p>
        </div>

        {/* Apply Button */}

        <Button
          size="lg"
          color="secondary"
          className="w-full"
        >
          Apply Now
        </Button>
      </Card>
    </div>
  );
}