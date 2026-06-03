import RecruiterJobsTable from '@/components/dashboard/RecruiterJobsTable';
import { getCompanyJobs } from '@/lib/api/jobs';

const RecruiterJobs = async() => {
    const companyId = 'company_123';
    const jobs = await getCompanyJobs(companyId);
    console.log('jobs for company',jobs);
    return (
        <div>
            <RecruiterJobsTable jobs={jobs} />
        </div>
    );
};

export default RecruiterJobs;