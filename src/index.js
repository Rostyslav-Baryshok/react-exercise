import ReactDOM from 'react-dom';
import paintings from '../src/paintings.json';

const data = paintings[0];

const painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Цена: {data.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

ReactDOM.render(painting, document.querySelector('#root'));
