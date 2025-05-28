export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Pat Reyes',
    role: 'Founder & Historical Researcher',
    bio: 'Para sa malayang pamamahayag. ',
    image: '/images/Team/Reyes.jpg'
  },
  {
    id: 2,
    name: 'Shane Saludares',
    role: 'Lead Content Writer',
    bio: 'With a background in journalism and cultural studies, Maria crafts the narrative for each infrastructure profile. She specializes in balancing factual reporting with engaging storytelling, ensuring that the historical context is never oversimplified.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Angel Gelangre',
    role: 'Architectural Photographer',
    bio: 'Antonio documents the physical legacy of the Marcos era through his lens. His photography captures both the grandeur and decay of these structures, telling visual stories that words alone cannot convey. He has published two photo books on Southeast Asian architecture.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    id: 4,
    name: 'Raph Dequilla',
    role: 'User Experience Designer',
    bio: 'Forever wandering and entranced in the School of Rock',
    image: '/images/Team/Dequilla.jpg'
  },
  {
    id: 5,
    name: 'Clyde Frongoso',
    role: 'Developer',
    bio: 'Retired TFT veteran.',
    image: '/images/Team/Frongoso.jpg'
  }
];