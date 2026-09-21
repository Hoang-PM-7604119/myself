export interface PartnerInfo {
  id: string;
  nameEn: string;
  nameVi: string;
  shortNameEn: string;
  shortNameVi: string;
  logo: string;
  url?: string;
}

export const allPartners: Record<string, PartnerInfo> = {
  vinuni: {
    id: 'vinuni',
    nameEn: 'VinUniversity',
    nameVi: 'Trường Đại học VinUni',
    shortNameEn: 'VinUniversity',
    shortNameVi: 'Đại học VinUni',
    logo: '/images/organizations/vinuniversity.png',
    url: 'https://vinuni.edu.vn'
  },
  greenx: {
    id: 'greenx',
    nameEn: 'Smart Green Transformation Center (GREEN-X)',
    nameVi: 'Trung tâm Chuyển đổi xanh Thông minh (GREEN-X)',
    shortNameEn: 'GREEN-X Center',
    shortNameVi: 'GREEN-X VinUni',
    logo: '/images/organizations/greenx-vinuniversity.png',
    url: 'https://vinuni.edu.vn'
  },
  vnua: {
    id: 'vnua',
    nameEn: 'Vietnam National University of Agriculture',
    nameVi: 'Học viện Nông nghiệp Việt Nam',
    shortNameEn: 'VNUA',
    shortNameVi: 'Học viện Nông nghiệp',
    logo: '/images/organizations/vnua-crest.png',
    url: 'https://vnua.edu.vn'
  },
  ria: {
    id: 'ria',
    nameEn: 'Research Institute for Aquaculture (RIA 1 & RIA 3)',
    nameVi: 'Viện Nghiên cứu Nuôi trồng Thủy sản (RIA 1 & RIA 3)',
    shortNameEn: 'RIA Thủy sản',
    shortNameVi: 'Viện Thủy sản (RIA)',
    logo: '/images/organizations/ria.png',
    url: 'https://vienthuysan2.org.vn'
  },
  ntu: {
    id: 'ntu',
    nameEn: 'Nha Trang University (NTU)',
    nameVi: 'Trường Đại học Nha Trang',
    shortNameEn: 'Nha Trang University',
    shortNameVi: 'ĐH Nha Trang',
    logo: '/images/organizations/nha-trang-university.png',
    url: 'https://ntu.edu.vn'
  },
  'nha-trang-bay': {
    id: 'nha-trang-bay',
    nameEn: 'Nha Trang Bay Management Board',
    nameVi: 'Ban Quản lý Vịnh Nha Trang',
    shortNameEn: 'Nha Trang Bay Authority',
    shortNameVi: 'BQL Vịnh Nha Trang',
    logo: '/images/organizations/nha-trang-bay.png',
    url: 'https://vinhnhatrang.net'
  },
  'can-gio': {
    id: 'can-gio',
    nameEn: 'Can Gio Mangrove Biosphere Reserve Management Board',
    nameVi: 'Ban Quản lý Rừng phòng hộ Cần Giờ',
    shortNameEn: 'Can Gio Biosphere Reserve',
    shortNameVi: 'BQL Rừng Cần Giờ',
    logo: '/images/organizations/can-gio-emblem.png',
    url: 'http://www.rungngapmancangio.org'
  },
  hust: {
    id: 'hust',
    nameEn: 'Hanoi University of Science and Technology (HUST)',
    nameVi: 'Đại học Bách khoa Hà Nội',
    shortNameEn: 'HUST',
    shortNameVi: 'ĐH Bách khoa Hà Nội',
    logo: '/images/organizations/hust.svg',
    url: 'https://hust.edu.vn'
  },
  mard: {
    id: 'mard',
    nameEn: 'Ministry of Agriculture and Rural Development',
    nameVi: 'Bộ Nông nghiệp và Phát triển Nông thôn',
    shortNameEn: 'MARD',
    shortNameVi: 'Bộ NN & PTNT',
    logo: '/images/organizations/mard.png',
    url: 'https://www.mard.gov.vn'
  }
};

export const projectPartners: Record<string, string[]> = {
  'smart-marine-aquaculture': ['greenx', 'vinuni', 'vnua', 'ria', 'ntu'],
  'coral-reef-conservation-nha-trang': ['greenx', 'vinuni', 'nha-trang-bay', 'ntu'],
  'can-gio-mangrove-iot': ['greenx', 'vinuni', 'can-gio'],
  'bee-monitoring-aiot-system': ['hust', 'vnua', 'mard']
};

export function getProjectPartners(projectId: string): PartnerInfo[] {
  const ids = projectPartners[projectId] ?? [];
  return ids.map(id => allPartners[id]).filter((p): p is PartnerInfo => Boolean(p));
}
