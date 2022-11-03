import { Col, Row } from 'antd';
import { FeaturedProduct } from '../components/FeaturedProduct';

export const Home = () => {
 

  return(
     
    
      <div>
        <div className="heroBlock">
        <Row>
            <Col>
              <div className="container-fluid">
                <div className="content">
                  <h3>Cocinamos con amor para que comas con conciencia.</h3>
                  <p>
                    Bon appétit, comidas para llevar.-
                  </p>
                </div>
              </div>
            </Col>
        </Row>
      </div>
      <div>
        <FeaturedProduct />
      </div>
      </div>
     
  )
}
