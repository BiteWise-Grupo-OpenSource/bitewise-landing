import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent {
  posts = [
    { tag: 'Nutrición', title: 'Cómo leer una etiqueta nutricional sin confundirte', desc: 'Guía práctica para entender carbohidratos, proteínas y grasas en cualquier producto.', date: 'Abr 2025', mins: '5' },
    { tag: 'Salud', title: 'Diabetes tipo 2 y alimentación: lo que nadie te dice', desc: 'Los mitos más comunes sobre dietas para diabéticos y qué dice realmente la ciencia.', date: 'Mar 2025', mins: '8' },
    { tag: 'Hábitos', title: 'Por qué fracasan la mayoría de dietas (y cómo evitarlo)', desc: 'El problema no es la fuerza de voluntad. Es el diseño del plan.', date: 'Mar 2025', mins: '6' },
    { tag: 'Recetas', title: '5 desayunos ricos en proteína que puedes preparar en 10 minutos', desc: 'Opciones rápidas, sabrosas y adaptadas a tus restricciones alimentarias.', date: 'Feb 2025', mins: '4' },
  ];
}