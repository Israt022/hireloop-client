import {Bell, Envelope, Gear, House, LayoutSideContentLeft, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";

const DashboardSidebar = () => {
    const navItems = [
    {icon: House, label: "Home", path:"/dashboard/recruiter"},
    {icon: Magnifier, label: "Jobs",path:'/dashboard/recruiter/jobs'},
    {icon: Bell, label: "Post A Job", path:'/dashboard/recruiter/jobs/new'},
    {icon: Envelope, label: "Company Profile",path:'/dashboard/recruiter/company'},
    {icon: Person, label: "Profile", path:"/dashboard/recruiter"},
    {icon: Gear, label: "Settings", path:"/dashboard/recruiter"},
  ];
  const navContent = <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.path}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                            type="button"
                        >
                            <item.icon className="size-5 text-muted" />
                            {item.label}
                        </Link>
                        ))}
                    </nav>
  return (
    <>
        <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
            {navContent}
        </aside>
        <Drawer>
            <Button className={"lg:hidden"} variant="secondary">
                <LayoutSideContentLeft />
                Menu
            </Button>
            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                <Drawer.Dialog>
                    <Drawer.CloseTrigger />
                    <Drawer.Header>
                    <Drawer.Heading>Navigation</Drawer.Heading>
                    </Drawer.Header>
                    <Drawer.Body>
                        {navContent}
                    </Drawer.Body>
                </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    </>
  );
};

export default DashboardSidebar;