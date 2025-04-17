// assets
import { DashboardOutlined, RobotOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  RobotOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'chatbot',
      title: 'AI Assistant',
      type: 'item',
      url: '/chatbot',
      icon: icons.RobotOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
