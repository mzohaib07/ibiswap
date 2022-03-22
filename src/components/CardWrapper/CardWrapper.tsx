import { Card, Typography } from "@mui/material"
import { CardTile } from "../../constants/MockData"
import { CardStyles } from "./CardWrapper.styles"

const CardWrapper = () => {
  return (
    <CardStyles>
      <div className="title-section">
        <span className="title">Notable Drops</span>
      </div>
      <div className="card-section">
        {CardTile && CardTile.map((item, index) =>
          <Card key={index} className='card'>
            <img
              className="img-container"
              src={item?.img}
              alt="green iguana"
            />
            <div className="content">
              <span><Typography>{item?.title}</Typography></span>
              <span><Typography>{item?.desp}</Typography></span>
            </div>
          </Card>
        )}
      </div>
    </CardStyles>
  )
}

export default CardWrapper