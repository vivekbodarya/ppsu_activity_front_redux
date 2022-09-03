const studentNavMainData = {
    studentNavData: [
        { label: 'Home', link: '/student/', icon: 'bx bxs-home' },
        { label: 'Profile', link: '/student/profile', icon: 'bx bx-user' },
        { label: 'Help', link: '/student/help', icon: 'bx bx-help-circle' },
    ],
    role: "student"
}


const facultyNavMainData = {
    facultyNavData: [
        { label: 'Activity', link: '/faculty/', icon: 'bx bxs-user-detail' },
        { label: 'Profile', link: '/faculty/profile', icon: 'bx bx-user' },
        { label: 'Help', link: '/faculty/help', icon: 'bx bx-help-circle' },
    ],
    role: "faculty"
}

const subAdminNavMainData = {
    subAdminNavData: [
        { label: 'Home', link: '/apc/', icon: 'bx bxs-home' },
        { label: 'Activity', link: '/apc/activity', icon: 'bx bxs-user-detail' },
        // { label: 'History', link: '/apc/history', icon: 'bx bx-history' },
        { label: 'Manage', link: '/apc/manage', icon: 'bx bx-user-plus' },
        { label: 'Profile', link: '/apc/profile', icon: 'bx bx-user' },
        { label: 'Help', link: '/apc/help', icon: 'bx bx-help-circle' },
    ],
    role: "apc"
}
// InstaAdmin
const adminNavMainData = {
    adminNavData: [
        { label: 'Home', link: '/instadmin/', icon: 'bx bxs-home' },
        { label: 'Activity', link: '/instadmin/activity', icon: 'bx bxs-user-detail' },
        { label: 'Manage', link: '/instadmin/manage', icon: 'bx bx-list-check' },
        { label: 'Profile', link: '/instadmin/profile', icon: 'bx bx-user' },
        { label: 'Help', link: '/instadmin/help', icon: 'bx bx-help-circle' },
    ],
    role: "admin"
}

// Coe
const masterNavMainData = {
    masterNavData: [
        { label: 'Home', link: '/coe/', icon: 'bx bxs-home' },
        // { label: 'Schools', link: '/coe/schools', icon: 'bx bxs-school' },
        { label: 'Manage', link: '/coe/manage', icon: 'bx bx-list-check' },
        { label: 'Profile', link: '/coe/profile', icon: 'bx bx-user' },
        { label: 'Help', link: '/coe/help', icon: 'bx bx-help-circle' },
    ],
    role: "coe"
}

export { studentNavMainData, facultyNavMainData, subAdminNavMainData, adminNavMainData, masterNavMainData }

