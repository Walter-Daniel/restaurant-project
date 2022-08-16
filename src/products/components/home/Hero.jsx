
import { Carousel } from 'antd';

const items = [
    {
        key: '101',
        title: 'Las mejores pizzas de Tucumán',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perferendis iste ut. Iusto excepturi beatae temporibus a quis laboriosam ratione! Illo, ab iusto accusamus quam repellendus adipisci velit magni reiciendis.'
    },
    {
        key: '102',
        title: 'Empanadas en horno de barro',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perferendis iste ut. Iusto excepturi beatae temporibus a quis laboriosam ratione! Illo, ab iusto accusamus quam repellendus adipisci velit magni reiciendis.'
    }
]



export const Hero = () => {
  return (
    <div className="heroBlock">
        <Carousel autoplay>
            {
                items.map(item => {
                    return (
                        <div className='container-fluid'>
                              <div className="content">
                                <h3>{item.title}</h3>
                                {item.content}
                              </div>
                        </div>
          
                    )
                })
            }
            
        </Carousel>
    </div>
  )
}
