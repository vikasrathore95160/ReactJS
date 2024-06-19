import logo from './logo.svg';
import './App.css';

let name = "Vikas";

let obj1 = {
  firstName : "Vikas",
  lastName : "Rathore"
};

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </nav>

      <h1>Good Morning {obj1.firstName + ' ' + obj1.lastName} !!</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quam reiciendis incidunt, labore totam eaque doloremque. Nisi, veniam rerum! Recusandae dolore maiores aspernatur natus quos perferendis molestias nihil pariatur, saepe sint sunt repudiandae enim magnam est totam temporibus sequi maxime quia id ipsam. Ratione repudiandae ipsum esse explicabo quam nostrum debitis at voluptatem repellendus aperiam omnis laborum quas illo nulla reprehenderit error dolorum excepturi ducimus commodi aspernatur accusamus neque, facere exercitationem. Repellendus, nobis reiciendis, a inventore perferendis magnam voluptas placeat laborum, provident numquam architecto voluptatibus accusamus fugit! Saepe, iusto? Iusto magnam omnis delectus voluptatum? Nihil et minima quaerat velit quod!</p>
    </>

  );
}

export default App;
