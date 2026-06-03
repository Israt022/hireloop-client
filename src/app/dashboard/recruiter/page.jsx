'use client'

import { useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";

import DashboardStats from "@/components/dashboard/DashboardStats";
import { Briefcase, CircleCheck, Persons, Thunderbolt } from "@gravity-ui/icons";
import RecruiterTable from "@/components/dashboard/RecruiterTable";

const RecruiterDashboard = () => {
    const {data: session, isPending} = useSession();

    if(isPending){
        return <div className="flex flex-col items-center gap-2">
                    <Spinner color="current" />
                    <span className="text-xs text-muted">Current</span>
                </div>
    }

    const user = session?.user;
    
    const recruiterStats = [
        {
            id: 1,
            title: "Total Job Posts",
            value: 48,
            icon: Briefcase,
        },
        {
            id: 2,
            title: "Total Applicants",
            value: "1,284",
            icon: Persons,
        },
        {
            id: 3,
            title: "Active Jobs",
            value: 18,
            icon: Thunderbolt,
        },
        {
            id: 4,
            title: "Jobs Closed",
            value: 32,
            icon: CircleCheck,
        },
    ];

    return (
        <div className="p-2 space-y-2">
            <h1 className='text-2xl'>
                Welcome back, {user?.name}
            </h1>
            <DashboardStats stats={recruiterStats} />
            <RecruiterTable />
        </div>
    );
};

export default RecruiterDashboard;