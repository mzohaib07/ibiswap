import { Grid } from "@mui/material";
import { CardTile } from "../../../constants/constants";
import { CardStyles, Item } from "./CardWrapper.styles";

const CardWrapper = () => {
  return (
    <CardStyles>
      <Grid container>
        <Grid item xs={12}>
          <Item elevation={0} className="title-section">
            <span className="title">Notable Drops</span>
          </Item>
        </Grid>
      </Grid>
      <Grid container className="grid-section">
        {CardTile &&
          CardTile.map((item, index) => (
            <Grid item xs="auto" key={index} className="card-section">
              <Item elevation={0} className="card">
                <img
                  className="img-container"
                  src={item?.img}
                  alt="green iguana"
                />
              </Item>
            </Grid>
          ))}
      </Grid>
    </CardStyles>
  );
};

export default CardWrapper;
