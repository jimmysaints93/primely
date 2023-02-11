// import { BsPlus, BsFillLightningFill}
import { FaUser, FaFire, FaPoo, FaRegCalendarAlt } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

function SideBar() {
    function SideBarIcon({icon}) {
        return (
            <div className="sidebar-icon">
                {icon}
            </div>
        );
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
            flex flex-col bg-gray-900 text-white shadow center">
            <SideBarIcon icon={<MdDashboard size="28" />} />
            <SideBarIcon icon={<FaRegCalendarAlt size="28" />} />
            <SideBarIcon icon={<FaUser size="28" />} />
        </div>
    );
}

export default SideBar