import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
    imageAndCaptions = [
        {
            "imgUrl": "assets/img/silhouette-3360822_1920.jpg",
            "caption": "We are a group of individuals who are passionate about learning and teaching"
        },
        {
            "imgUrl": "assets/img/bible-3392752_1920.jpg",
            "caption": "With us Books no longer remain a big bundle of dead pages and black boring text..."
        },
        {
            "imgUrl": "assets/img/narrative-794978_1920.jpg",
            "caption": "... But becomes a Journey... A story... And sometimes an Adventure..."
        },
        {
            "imgUrl": "assets/img/boys-1782427_1920.jpg",
            "caption": "True teaching is all about creating the environment ..."
        },
        {
            "imgUrl": "assets/img/earth-2434001_1280.jpg",
            "caption": "... And making the content real and alive ..."
        },
        {
            "imgUrl": "assets/img/nature-3289812_1920.jpg",
            "caption": "We seek out the soul, the living world in your books and syllabus... And put in the hand of our students..."
        },
        {
            "imgUrl": "assets/img/animal-3346192_1920.jpg",
            "caption": "The learning becomes so enchanting, even The Biggest Ones sit and listen..."
        },
        {
            "imgUrl": "assets/img/baby-2604853_1920.jpg",
            "caption": "... And thus Study becomes a Fun Filled Experience..."
        },
        {
            "imgUrl": "assets/img/welcome-to-knexsol-1920x1088.png",
            "caption": " Welcome to Knexsol ..."
        }

    ];
}
