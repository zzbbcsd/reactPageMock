import React from "react";
import { Grid, Segment } from "semantic-ui-react";

export default function Footer() {
  function columnMid() {
    return (
      <Grid.Column verticalAlign="middle">AmongusReversed.com</Grid.Column>
    );
  }

  return (
    <Grid centered columns={3}>
      <Grid.Row color="black">
        {" "}
        <Segment basic />
      </Grid.Row>

      <Grid.Row color="black">{columnMid()}</Grid.Row>

      <Grid.Row color="black">
        {" "}
        <Segment basic />
      </Grid.Row>
      <Grid.Row color="black">
        {" "}
        <Segment basic />
      </Grid.Row>
    </Grid>
  );
}
