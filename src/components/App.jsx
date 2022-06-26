import Painting from './Painting';
import paintings from '../paintings.json';

export default function App() {
  return (
    <div>
      {paintings.map(painting => (
        <Painting
          key={painting.id}
          imageUrl={painting.url}
          title={painting.title}
          author={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))}
    </div>
  );
}
