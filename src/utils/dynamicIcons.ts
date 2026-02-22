// Dynamic icon imports for better tree-shaking
// Uses React.lazy for code splitting and dynamic imports

import { lazy } from 'react';

export const FaLinkedinIn = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaLinkedinIn })));
export const FaGithub = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaGithub })));
export const FaYoutube = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaYoutube })));
export const FaTwitter = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaTwitter })));
export const FaInstagram = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaInstagram })));
export const FaTimes = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaTimes })));
export const FaChevronLeft = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaChevronLeft })));
export const FaChevronRight = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaChevronRight })));
export const FaDownload = lazy(() => import('react-icons/fa').then(mod => ({ default: mod.FaDownload })));
export const HiOutlineChevronDown = lazy(() => import('react-icons/hi').then(mod => ({ default: mod.HiOutlineChevronDown })));
export const HiX = lazy(() => import('react-icons/hi').then(mod => ({ default: mod.HiX })));
export const IoChevronBack = lazy(() => import('react-icons/io5').then(mod => ({ default: mod.IoChevronBack })));
export const IoChevronForward = lazy(() => import('react-icons/io5').then(mod => ({ default: mod.IoChevronForward })));
