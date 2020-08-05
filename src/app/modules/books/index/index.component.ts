import { Component } from '@angular/core';

// Definition de l'interface
// Viens typer un livre
// Un livre est : un titre, un prix et un description facultative
interface BookInterface {
  title: string; // Titre doit etre une chaine
  description?: string; // Description facultative "?" doit etre un chaine
  price: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor() { }

  // Liste des livres
  // La liste est un tableau "array" qui contien des livres de type "BookInterface"
  books:Array<BookInterface> = [

    // Premier livre
    {
      title: "Comment devenir un belle Licorne !",
      price: 99.99,
    },

    // Second Livre
    {
      title: "Comment vendre des Pizzas par 40°",
      description: "Lorem ipsum....",
      price: 10
    }
    
  ];
}
