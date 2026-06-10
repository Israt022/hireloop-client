"use client";

import Link from "next/link";
import { Button, Table, Chip } from "@heroui/react";
import {
  Person,
  Briefcase,
  ArrowUpRightFromSquare,
} from "@gravity-ui/icons";

export default function ApplicationTable({ jobs }) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="w-full bg-[#121212] p-6 rounded-xl border border-zinc-800/80 text-zinc-100">
      <h2 className="text-xl font-semibold mb-6 text-zinc-200">
        Applications ({jobs.length})
      </h2>

      <Table
        className="w-full"
        classnames={{
          base: "bg-transparent",
          table: "border-collapse",
          thead: "[&>tr]:border-b [&>tr]:border-zinc-800/60",
          th: "bg-transparent text-zinc-400 font-medium text-sm py-4 border-b border-zinc-800/60",
          tr: "border-b border-zinc-800/40 hover:bg-zinc-900/40 transition-colors last:border-none",
          td: "py-4 align-middle text-zinc-300 text-sm",
        }}
      >
        <Table.ScrollContainer>
          <Table.Content aria-label="Applications table">
            <Table.Header>
              <Table.Column isRowHeader className="w-[30%]">
                Applicant
              </Table.Column>

              <Table.Column className="w-[25%]">
                Job
              </Table.Column>

              <Table.Column className="w-[15%]">
                Resume
              </Table.Column>

              <Table.Column className="w-[15%]">
                Portfolio
              </Table.Column>

              <Table.Column className="w-[10%]">
                Applied
              </Table.Column>

              <Table.Column className="w-[5%] text-right">
                Action
              </Table.Column>
            </Table.Header>

            <Table.Body
              emptyContent={"No applications found."}
            >
              {jobs.map((application) => (
                <Table.Row key={application._id}>
                  {/* Applicant */}
                  <Table.Cell>
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                        <Person size={18} />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-100">
                          {application.applicantName}
                        </span>

                        <span className="text-xs text-zinc-500">
                          {application.applicantEmail}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* Job */}
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                        <Briefcase size={16} />
                      </div>

                      <span className="text-zinc-200">
                        {application.jobTitle}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Resume */}
                  <Table.Cell>
                    <Link
                      href={application.resumeLink}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      View Resume
                    </Link>
                  </Table.Cell>

                  {/* Portfolio */}
                  <Table.Cell>
                    <Link
                      href={application.portfolioLink}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Portfolio
                    </Link>
                  </Table.Cell>

                  {/* Applied */}
                  <Table.Cell>
                    <Chip
                      variant="flat"
                      color="default"
                      size="sm"
                    >
                      {formatDate(application.createdAt)}
                    </Chip>
                  </Table.Cell>

                  {/* Action */}
                  <Table.Cell>
                    <div className="flex justify-end">
                      <Button
                        size="sm"
                        variant="light"
                        className="text-zinc-300"
                      >
                        <ArrowUpRightFromSquare size={16} />
                        Details
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
}