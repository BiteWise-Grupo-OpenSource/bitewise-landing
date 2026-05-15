import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  isDark = false;
  isScrolled = false;

  showLogin = false;
  showRegister = false;

  email = '';
  password = '';
  showPassword = false;

  registerName = '';
  registerEmail = '';
  registerPassword = '';
  showRegisterPassword = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.showLogin = false;
    this.showRegister = false;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  onSubmit() {
    console.log('Login:', this.email);
  }

  onRegister() {
    console.log('Register:', this.registerEmail);
  }
}