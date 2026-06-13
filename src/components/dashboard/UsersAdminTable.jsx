'use client';

import { Table } from "@heroui/react";
import React, { useState } from 'react';
import { Person, Briefcase, ChevronLeft, ChevronRight } from '@gravity-ui/icons';
import { updateUserRole } from '@/lib/actions/user';

const UsersAdminTable = ({users}) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [pendingChange, setPendingChange] = useState(null);

    const formatDate = (dateObj) => {
        if (!dateObj || !dateObj.$date) return 'N/A';
        const date = new Date(dateObj.$date);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };

    // Safe accessor for MongoDB OID
    const getUserId = (user) => user._id?.$oid || user.id;

    const confirmRoleChange = async () => {
        if (!pendingChange) return;

        try {
            setIsUpdating(true);

            const result = await updateUserRole(
                pendingChange.userId,
                pendingChange.newRole
            );

            console.log(result);

            setIsConfirmOpen(false);
            setPendingChange(null);

            // optional
            // router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setIsUpdating(false);
        }
    };

    const initiateRoleChange = (userId, userName, newRole) => {
        setPendingChange({ userId, userName, newRole });
        setIsConfirmOpen(true);
        // const data = await updateUserRole(userId,newRole)
        console.log(userId, newRole);
    }
    const handleStatusChange = async (userId, newStatus) => {
        console.log(`Status change triggered for ${userId} to ${newStatus}`);
    };

    const handleDelete = async (userId) => {
        console.log(`Delete triggered for user ${userId}`);
    };
    return (
        <div className="relative w-full">
            <div className="w-full bg-[#1e1e1e] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl font-sans">
                <div className="overflow-x-auto">
                    <Table
                        className="w-full"
                        classnames={{
                            base: "bg-transparent",
                            table: "border-collapse min-w-[900px]",
                            thead: "[&>tr]:border-b [&>tr]:border-zinc-800/60",
                            th: "bg-transparent text-zinc-400 font-medium text-sm py-4 border-b border-zinc-800/60",
                            tr: "border-b border-zinc-800/40 hover:bg-zinc-900/40 transition-colors last:border-none",
                            td: "py-4 align-middle text-zinc-300 text-sm"
                        }}
                    >
                        <Table.ScrollContainer>
                            <Table.Content aria-label="User Management Table">

                            <Table.Header>
                                <Table.Column isRowHeader className="min-w-[250px]">
                                User
                                </Table.Column>

                                <Table.Column className="hidden md:table-cell min-w-[220px]">
                                Email
                                </Table.Column>

                                <Table.Column className="min-w-[130px]">
                                Role
                                </Table.Column>

                                <Table.Column className="hidden md:table-cell min-w-[140px]">
                                Join Date
                                </Table.Column>

                                <Table.Column className="min-w-[120px]">
                                Status
                                </Table.Column>

                                <Table.Column className="min-w-[200px] text-right">
                                Actions
                                </Table.Column>
                            </Table.Header>

                            <Table.Body emptyContent={"No users found"}>
                                {users.map((user) => {
                                const userId = getUserId(user);
                                const userRole = user.role?.toLowerCase() || "seeker";
                                const userStatus = user.status || "Active";

                                return (
                                    <Table.Row key={userId}>

                                    {/* USER */}
                                    <Table.Cell>
                                        <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-zinc-700/60 flex items-center justify-center text-xs text-zinc-300 font-bold shrink-0">
                                            {user.name
                                            ? user.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")
                                                .toUpperCase()
                                            : "U"}
                                        </div>

                                        <div className="min-w-0">
                                            <p className="font-medium text-zinc-100 truncate">
                                            {user.name || "Unknown User"}
                                            </p>

                                            {/* Mobile Email */}
                                            <p className="text-xs text-zinc-500 md:hidden truncate">
                                            {user.email}
                                            </p>
                                        </div>
                                        </div>
                                    </Table.Cell>

                                    {/* EMAIL */}
                                    <Table.Cell className="hidden md:table-cell">
                                        {user.email}
                                    </Table.Cell>

                                    {/* ROLE */}
                                    <Table.Cell>
                                        {userRole === "recruiter" ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-zinc-100 text-zinc-900">
                                            <Briefcase width={12} height={12} />
                                            Recruiter
                                        </span>
                                        ) : userRole === "admin" ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-purple-950/40 text-purple-300 border border-purple-800/50">
                                            Admin
                                        </span>
                                        ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                                            <Person width={12} height={12} />
                                            Seeker
                                        </span>
                                        )}
                                    </Table.Cell>

                                    {/* JOIN DATE */}
                                    <Table.Cell className="hidden md:table-cell">
                                        {formatDate(user.createdAt)}
                                    </Table.Cell>

                                    {/* STATUS */}
                                    <Table.Cell>
                                        {userStatus === "Active" ? (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-emerald-950/30 text-emerald-400 border border-emerald-900/40">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            Active
                                        </span>
                                        ) : (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-red-950/30 text-red-400 border border-red-900/40">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            Suspended
                                        </span>
                                        )}
                                    </Table.Cell>

                                    {/* ACTIONS */}
                                    <Table.Cell>
                                        <div className="flex flex-wrap justify-end gap-2 text-xs">

                                        {userRole !== "admin" && (
                                            <button
                                            onClick={() =>
                                                initiateRoleChange(
                                                userId,
                                                user.name,
                                                "admin"
                                                )
                                            }
                                            className="text-zinc-400 hover:text-white"
                                            >
                                            Admin
                                            </button>
                                        )}

                                        {userRole !== "recruiter" && (
                                            <button
                                            onClick={() =>
                                                initiateRoleChange(
                                                userId,
                                                user.name,
                                                "recruiter"
                                                )
                                            }
                                            className="text-zinc-400 hover:text-white"
                                            >
                                            Recruiter
                                            </button>
                                        )}

                                        {userRole !== "seeker" && (
                                            <button
                                            onClick={() =>
                                                initiateRoleChange(
                                                userId,
                                                user.name,
                                                "seeker"
                                                )
                                            }
                                            className="text-zinc-400 hover:text-white"
                                            >
                                            Seeker
                                            </button>
                                        )}

                                        {userStatus === "Active" ? (
                                            <button
                                            onClick={() =>
                                                handleStatusChange(
                                                userId,
                                                "Suspended"
                                                )
                                            }
                                            className="text-red-500 hover:text-red-400"
                                            >
                                            Suspend
                                            </button>
                                        ) : (
                                            <>
                                            <button
                                                onClick={() =>
                                                handleStatusChange(
                                                    userId,
                                                    "Active"
                                                )
                                                }
                                                className="text-emerald-500 hover:text-emerald-400"
                                            >
                                                Activate
                                            </button>

                                            <button
                                                onClick={() =>
                                                handleDelete(userId)
                                                }
                                                className="text-zinc-400 hover:text-red-400"
                                            >
                                                Delete
                                            </button>
                                            </>
                                        )}
                                        </div>
                                    </Table.Cell>

                                    </Table.Row>
                                );
                                })}
                            </Table.Body>

                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>

                {/* Pagination Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 text-xs text-zinc-500 select-none">
                    <div>
                        Showing 1 to {users.length} of 12,842 users
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-1 hover:text-zinc-300 transition-colors">
                            <ChevronLeft width={16} height={16} />
                        </button>
                        <button className="w-6 h-6 flex items-center justify-center bg-white text-zinc-900 rounded font-medium">
                            1
                        </button>
                        <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-800/60 rounded text-zinc-400 transition-colors">
                            2
                        </button>
                        <button className="w-6 h-6 flex items-center justify-center hover:bg-zinc-800/60 rounded text-zinc-400 transition-colors">
                            3
                        </button>
                        <span className="px-1 text-zinc-600">...</span>
                        <button className="w-fit px-1.5 h-6 flex items-center justify-center hover:bg-zinc-800/60 rounded text-zinc-400 transition-colors">
                            1285
                        </button>
                        <button className="p-1 hover:text-zinc-300 transition-colors">
                            <ChevronRight width={16} height={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal Overlay */}
            {isConfirmOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60">
                    <div className="w-full max-w-sm bg-[#1e1e1e] border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-zinc-100">
                                Confirm Role Change
                            </h3>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Are you sure you want to change the role of <span className="text-zinc-200 font-medium">{pendingChange?.userName}</span> to <span className="text-zinc-200 font-medium capitalize">{pendingChange?.newRole}</span>? This alters system access and application flow parameters permissions immediately.
                            </p>
                        </div>

                        <div className="flex items-center justify-end gap-3 text-xs font-medium">
                            <button
                                disabled={isUpdating}
                                onClick={() => { setIsConfirmOpen(false); setPendingChange(null); }}
                                className="px-4 py-2 text-zinc-400 hover:text-zinc-200 bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors disabled:opacity-5"
                            >
                                Cancel
                            </button>
                            <button
                                disabled={isUpdating}
                                onClick={confirmRoleChange}
                                className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors shadow-lg shadow-indigo-600/10 disabled:opacity-50 min-w-[76px] flex items-center justify-center"
                            >
                                {isUpdating ? (
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    'Confirm'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default UsersAdminTable;