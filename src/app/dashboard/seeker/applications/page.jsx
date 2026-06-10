import { getApplicationsById } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import ApplicationTable from './ApplicationTable';

const ApplicationPage = async() => {
    const user = await getUserSession();
    const jobs = await getApplicationsById(user?.id)
    return (
        <div>
            <h1>Application</h1>
            <ApplicationTable jobs={jobs} />
        </div>
    );
};

export default ApplicationPage;