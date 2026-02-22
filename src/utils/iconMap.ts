// Centralized icon mapping for optimal tree-shaking
// Imports only the specific icons that are actually used

import React from 'react';

import { 
  BsCheckCircleFill,
  BsDownload,
  BsXCircleFill,
  BsStarFill
} from 'react-icons/bs';

import { 
  HiAcademicCap,
  HiOutlineChevronDown,
  HiX
} from 'react-icons/hi';

import { 
  FaLaptopCode,
  FaBriefcase,
  FaCalendarAlt,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload as FaDownloadIcon,
  FaCheckCircle,
  FaPlay,
  FaArrowUp,
  FaUserCheck,
  FaBookOpen,
  FaChalkboardTeacher,
  FaFileContract,
  FaBriefcase as FaBriefcaseIcon
} from 'react-icons/fa';

import { 
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiPrometheus
} from 'react-icons/si';

import { 
  MdLiveTv,
  MdCloudQueue,
  MdVideoLibrary
} from 'react-icons/md';

import { 
  IoChevronBack,
  IoChevronForward
} from 'react-icons/io5';

// Centralized icon mapping
export const iconMap = {
  // Bootstrap Icons
  BsCheckCircleFill,
  BsDownload,
  BsXCircleFill,
  BsStarFill,
  
  // Heroicons
  HiAcademicCap,
  HiOutlineChevronDown,
  HiX,
  
  // Font Awesome
  FaLaptopCode,
  FaBriefcase,
  FaCalendarAlt,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload: FaDownloadIcon,
  FaCheckCircle,
  FaPlay,
  FaArrowUp,
  FaUserCheck,
  FaBookOpen,
  FaChalkboardTeacher,
  FaFileContract,
  FaBriefcaseIcon,
  
  // Simple Icons
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiPrometheus,
  
  // Material Design Icons
  MdLiveTv,
  MdCloudQueue,
  MdVideoLibrary,
  
  // Ionicons
  IoChevronBack,
  IoChevronForward,
} as const;

// Type-safe icon getter
export const getIcon = (iconName: string, size?: number) => {
  const icon = iconMap[iconName as keyof typeof iconMap];
  if (!icon) return null;
  
  const IconComponent = icon as React.ComponentType<any>;
  return size ? React.createElement(IconComponent, { size }) : React.createElement(IconComponent);
};
