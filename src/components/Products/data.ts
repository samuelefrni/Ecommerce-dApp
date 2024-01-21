import ImageTactilePainting from "../../assets/OL_020p_en_2500x1500_L1240145_be-2048x1229.jpg";
import ImageMusicMovement from "../../assets/Blog-Main-Image-5-min.png";
import ImageInclusiveTheatre from "../../assets/ilhom2 (1).jpg.webp";
import ImageInclusivePhotography from "../../assets/Champaner-Heritage-Resort-Ideal-For-Pre-wedding-Shoots.jpg";
import ImageTherapeuticArts from "../../assets/142019441-56a792635f9b58b7d0ebcaa2.webp";
import ImageAccessibleSculpture from "../../assets/100A0228-scaled.jpg";
import { PurchaseI } from "../../utils/interface";

export const courses = [
  {
    description: `Creating works of art using 
    tactile materials such as sand, fabric, crepe 
    paper and other materials with different textures also
    exploring painting with fingers, sponges or brushes`,
    id: "1936",
    image: ImageTactilePainting,
    name: `Tactile Painting`,
    value: "0.0045",
  },
  {
    description: `Exploration of creativity through music 
    and body movement, use of adapted musical instruments or 
    experimentation with creating sounds with everyday objects.`,
    id: "1354",
    image: ImageMusicMovement,
    name: "Music Movement",
    value: "0.0025",
  },
  {
    description: `Acting workshops that highlight diversity 
    and celebrate the skills of each participant, creating and 
    acting out original stories that reflect students' individual experiences.`,
    id: "1846",
    image: ImageInclusiveTheatre,
    name: "Inclusive Theatre",
    value: "0.0048",
  },
  {
    description: `Creating photography projects that capture 
    the world from students' unique perspectives, exploring 
    photography through the use of accessible cameras or smartphones.`,
    id: "1754",
    image: ImageInclusivePhotography,
    name: "Inclusive Photography",
    value: "0.0042",
  },
  {
    description: `Using artistic techniques as a therapeutic 
    tool to address emotional or physical challenges, creating 
    projects that encourage personal expression and reflection.`,
    id: "1246",
    image: ImageTherapeuticArts,
    name: "Therapeutic Arts",
    value: "0.0028",
  },
  {
    description: `Using clay or modeling clay to create 
    three-dimensional sculptures, experimentation with 
    adapted tools and techniques that facilitate modeling.`,
    id: "1584",
    image: ImageAccessibleSculpture,
    name: "Accessible Sculpture",
    value: "0.0048",
  },
];

export const purchase: PurchaseI[] = [];
