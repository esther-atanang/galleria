import Header from "./Components/Header";
import { useState } from "react";
import Card from "./Components/Card";
import Slideshow from "./Components/Slideshow";
import sun from "./Images/suns.png"
import boat from "./Images/boat.png"
import boy from "./Images/boy.png"
import food from "./Images/food.png"
import garden from "./Images/garden.png"
import lamb from "./Images/lamb.png"
import lion from "./Images/lion.png"
import man from "./Images/man.png"
import monalisa from "./Images/mona-lisa.png"
import monster from "./Images/monster.png"
import pearl from "./Images/pearl.png"
import pool from "./Images/pool.png"
import pope from "./Images/pope.png"
import wave from "./Images/wave.png"
import woman from "./Images/woman.png"
import sun_painter from "./Images/starry_painter.png"
import pope_painter from "./Images/pope_painter.png"
import leonardo from "./Images/leonardo.png"
import boy_painter from "./Images/boy_painter.png"
import swing_painter from "./Images/swing_painter.png"
import wave_painter from "./Images/wave_painter.png"
import woman_painter from "./Images/woman_painter.png"
import monster_painter from "./Images/monster_painter.png"
import gypsy_painter from "./Images/gypsy_painter.png"
import pearl_painter from "./Images/pearl_painter.png"
import storm_painter from "./Images/storm_painter.png"
import Home from "./Components/Home";
import {Routes, Route} from "react-router-dom"
const cards = [
  {id: 0, image:sun ,painter:"Vincent Van Gogh ",year:"1889",painting:"Starry Night",painter_img:sun_painter, desc:`Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."`,},
  {id: 1,image:pearl ,painter:"Johannes Vermeer",year:"1665",painting:"Girl with a Pearl Earring",painter_img:pearl_painter, desc:`The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.`,},
  {id: 2,image:monster ,painter:"Pablo Picasso",year:"1937",painting:"Guernica",painter_img:monster_painter,desc:`The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.`},
  {id: 3,image:woman ,painter:"Artemisia Gentileschi",year:"1625",painting:"Penitent Magdalene",painter_img:woman_painter,desc:`Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy. `},
  {id: 4,image:boat ,painter:"Rembrandt",year:"1633",painting:"The Storm on the Sea of Galilee",painter_img:storm_painter,desc:`The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.`},
  {id: 5,image:wave ,painter:"Hokusai",year:"1831",painting:"The Great Wave off Kanagawa",painter_img:wave_painter,desc:`The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background. `},
  {id: 6,image:man ,painter:"Vincent van Gogh",year:"1889",painting:"Van Gogh self-portrait",painter_img:sun_painter,desc:`This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.`},
  {id: 7,image:lion ,painter:"Henri Rousseau",year:"1897",painting:"The Sleeping Gypsy",painter_img:gypsy_painter,desc:`The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.`},
  {id: 8,image:lamb ,painter:"Leonardo da Vinci",year:"1489",painting:"Lady with an Ermin",painter_img:leonardo,desc:`The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa.`},
  {id: 9,image:pool ,painter:"Vincent van Gogh",year:"1888",painting:"The Night Café",painter_img:sun_painter,desc:`The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too. `},
  {id: 10,image:boy ,painter:"Edward Hopper",year:"1889",painting:"The Boy in the Red Vest",painter_img:boy_painter,desc:`Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US.`},
  {id: 11,image:food ,painter:"Paul Cézanne",year:"1893",painting:"The Basket of Apples",painter_img:boy_painter,desc:`The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.`},
  {id: 12,image:monalisa ,painter:"Leonardo da Vinci",year:"1503",painting:"Mona Lisa",painter_img:leonardo,desc:`The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.`},
  {id: 13,image:pope ,painter:"Jan van Eyck",year:"1434",painting:"Arnolfini Portrait",painter_img:pope_painter,desc:`It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich "in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term".`},
  {id: 14,image:garden ,painter:"Jean-Honoré Fragonard",year:"1767",painting:"The Swing",painter_img:swing_painter,desc:`The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air. `},
]

function App() {
  const[count, setCount] = useState(0)
  const[width, setWidth] = useState(0)


  function handleWidth(){
     setWidth(value=> value < 100 ? value + 7.14 : value)
     setCount(value=>value < 14 ? value + 1 : value)
  }
  function decreaseWidth(){
    setWidth(value=>value > 0 ? value - 7.14 : value)
    setCount(value=>value > 0 ? value - 1 : value)
  }
  console.log(count)
  return (
    <div className="App">
        <Header/>
        <Routes>
         <Route path="/" element={<Home cards={cards} />} />
         <Route path="/slide-show" element={<Slideshow image={cards[count].image}  painter_name={cards[count].painter} painting_name={cards[count].painting} painter_img={cards[count].painter_img} desc={cards[count].desc} year={cards[count].year} handleWidth={handleWidth} width={width} decrease={decreaseWidth}/> }/>
      </Routes>
        
    </div>
  );
}

export default App;
