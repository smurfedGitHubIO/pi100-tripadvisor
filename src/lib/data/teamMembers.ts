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
    bio: 'Exploring monuments, questioning legacies.',
    image: '/images/Team/Saludares.jpg'
  },
  {
    id: 3,
    name: 'Angel Gelangre',
    role: 'Architectural Photographer',
    bio: 'PI100 Student.',
    image: '/images/Team/Gelangre.jpeg'
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
    bio: 'Aspiring film director.',
    image: '/images/Team/Frongoso.jpg'
  }
];