import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCloudEffect: string | null = null;
  activeSection: string = 'home';

  // Resume Download
  downloadResume() {
    const resumeUrl = 'assets/resume.pdf'; // Update with your actual resume path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf';
    link.click();
  }

  // External URL Navigation
  navigateToExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  // Cloud Animation Effect
  showCloud(section: string) {
    this.showCloudEffect = section;
    setTimeout(() => {
      this.showCloudEffect = null;
    }, 2000);
  }

  // Active Section Toggle
  setActiveSection(section: string) {
    this.activeSection = section;
  }

  // Projects Data
  projects = [
    {
      name: 'Project 1',
      image: 'assets/project1.jpg',
      details: 'Description of Project 1',
      technologies: 'Angular, TypeScript, CSS',
      link: 'https://github.com/yourrepo/project1'
    },
    {
      name: 'Project 2',
      image: 'assets/project2.jpg',
      details: 'Description of Project 2',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://github.com/yourrepo/project2'
    }
  ];

  activeIndex = 0;
  isModalOpen = false;
  selectedProject: any = null;

  // Modal Functions
  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }

  // Project Carousel Navigation
  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }
}
