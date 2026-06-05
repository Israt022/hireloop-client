import RecruiterJobsTable from '@/components/dashboard/RecruiterJobsTable';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import { getCompanyJobs } from '@/lib/api/jobs';

const RecruiterJobs = async() => {
    const company = await getLoggedInRecruiterCompany();
    const jobs = await getCompanyJobs(company._id);

    return (
        <div>
            <RecruiterJobsTable jobs={jobs} />
        </div>
    );
};

export default RecruiterJobs;