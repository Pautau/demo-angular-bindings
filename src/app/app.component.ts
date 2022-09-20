import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Le nom de balise du composant (voir son appel dans index.html)
  templateUrl: './app.component.html', // Correspond au template/vue qui sera affichée à l'utilisateur
  styleUrls: ['./app.component.css'], // Le style du composant
})
export class AppComponent {
  title = 'Leçon sur les liaisons'; // variable qui est appelée dans le template comme ceci : {{title}}
  interpolation = 'Interpolation variable';
  valeurInput = 'Property Binding';
  onClickButton() {
    console.log('Un clic a été effectué sur le bouton !');
  }
  zoneSaisie: any;
}
