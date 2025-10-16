import {
  FiLayout,
  FiFileText,
  FiMessageSquare,
  FiGithub,
  FiBook,
  FiTrello,
  FiCheckCircle,
  FiTarget,
  FiCpu,
  FiZap,
  FiCode,
  FiStar,
  FiCloud,
  FiSettings,
  FiDatabase,
  FiActivity,
  FiUsers,
  FiTrendingUp,
} from 'react-icons/fi';

export const getIcon = (iconName) => {
  const iconMap = {
    FiLayout,
    FiFileText,
    FiMessageSquare,
    FiGithub,
    FiBook,
    FiTrello,
    FiCheckCircle,
    FiTarget,
    FiCpu,
    FiZap,
    FiCode,
    FiStar,
    FiCloud,
    FiSettings,
    FiDatabase,
    FiActivity,
    FiUsers,
    FiTrendingUp,
  };
  
  return iconMap[iconName] || FiDatabase;
};

