import { Table, Button, Chip } from "@heroui/react";
import {
  Eye,
  Pencil,
  TrashBin,
} from "@gravity-ui/icons";

import { getCompanyJobs } from "@/lib/api/jobs";


const RecruiterJobsTable = ({jobs}) => {
    return (
        <div className="rounded-2xl border border-default-200 bg-content1 p-6 m-5">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">
                Company Jobs
                </h2>

                <p className="text-default-500">
                Manage all posted jobs
                </p>
            </div>

            <Table>
                <Table.ScrollContainer>
                <Table.Content
                    aria-label="Company Jobs"
                    className="min-w-[900px]"
                >
                    <Table.Header>
                    <Table.Column isRowHeader>
                        Job Title
                    </Table.Column>

                    <Table.Column>
                        Type / Category
                    </Table.Column>

                    <Table.Column>
                        Location
                    </Table.Column>

                    <Table.Column>
                        Status
                    </Table.Column>

                    <Table.Column>
                        Actions
                    </Table.Column>
                    </Table.Header>

                    <Table.Body>
                    {jobs?.map((job) => (
                        <Table.Row
                        key={job._id}
                        >
                        <Table.Cell>
                            <div>
                            <p className="font-medium">
                                {job.jobTitle}
                            </p>

                            <p className="text-xs text-default-500">
                                Deadline:{" "}
                                {job.deadline}
                            </p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            <div>
                            <p className="capitalize">
                                {job.jobType}
                            </p>

                            <p className="text-xs text-default-500 capitalize">
                                {
                                job.jobCategory
                                }
                            </p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            {job.isRemote
                            ? "Remote"
                            : job.location ||
                                "N/A"}
                        </Table.Cell>

                        <Table.Cell>
                            <Chip
                            size="sm"
                            color={
                                job.status ===
                                "active"
                                ? "success"
                                : "danger"
                            }
                            variant="soft"
                            >
                            {job.status}
                            </Chip>
                        </Table.Cell>

                        <Table.Cell>
                            <div className="flex items-center gap-2">
                            <Button
                                isIconOnly
                                size="sm"
                                variant="ghost"
                            >
                                <Eye className="size-4" />
                            </Button>

                            <Button
                                isIconOnly
                                size="sm"
                                variant="ghost"
                            >
                                <Pencil className="size-4" />
                            </Button>

                            <Button
                                isIconOnly
                                size="sm"
                                variant="danger"
                            >
                                <TrashBin className="size-4" />
                            </Button>
                            </div>
                        </Table.Cell>
                        </Table.Row>
                    ))}
                    </Table.Body>
                </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default RecruiterJobsTable;