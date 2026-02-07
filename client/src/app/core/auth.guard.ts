import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token && role === 'Admin') {
    return true;
  }
  
  router.navigate(['/login']);
  return false;
};