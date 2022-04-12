import { Card, Grid } from "@mui/material";
import { CardTile } from "../../../constants/constants";
import { CardStyles, Item } from "./CardWrapper.styles";

const CardWrapper = () => {
  return (
    <CardStyles>
      <Grid container>
        <Item>
          <div className="title-section">
            <span className="title">Notable Drops</span>
          </div>
          <div className="card-section">
            {CardTile &&
              CardTile.map((item, index) => (
                <Card key={index} className="card">
                  <img
                    className="img-container"
                    src={item?.img}
                    alt="green iguana"
                  />
                </Card>
              ))}
          </div>
        </Item>
      </Grid>
    </CardStyles>
  );
};

export default CardWrapper;
