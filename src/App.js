import Title from './Title.js';
import ImageBlock from './ImageBlock.js'; 

import myPlot from './myplot.jpg';
import ganPlot from './ganplot.jpg';

function App() {
  return (
    <div className="app">
      <Title></Title>
      <ImageBlock imgUrl={myPlot}></ImageBlock>
      <ImageBlock imgUrl={ganPlot}></ImageBlock>
    </div>
  );
}

export default App;
