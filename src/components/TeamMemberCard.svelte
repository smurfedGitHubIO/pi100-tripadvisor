<script lang="ts">
  import type { TeamMember } from '../types/types';
  
  export let member: TeamMember;
</script>

<div class="team-card slide-up">
  <div class="member-image">
    <img src={member.image} alt={member.name} class="member-img" />
  </div>
  
  <div class="member-content">
    <h3 class="member-name">{member.name}</h3>
    <p class="member-role">{member.role}</p>
    <p class="member-bio">{member.bio}</p>
  </div>
</div>

<style>
  .team-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--spacing-4);
    border-radius: var(--radius-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  }
  
  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .member-image {
    width: 150px;
    height: 150px;
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-bottom: var(--spacing-4);
    border: 3px solid var(--color-primary);
  }
  
  .member-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .member-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .member-name {
    margin-bottom: var(--spacing-1);
    font-size: 1.5rem;
  }
  
  .member-role {
    color: var(--color-primary);
    font-weight: 500;
    margin-bottom: var(--spacing-3);
  }
  
  .member-bio {
    color: var(--color-gray-700);
    font-size: 0.9375rem;
    line-height: 1.6;
  }
</style>