import React from "react";
import {
  Button,
  Header,
  Divider,
  Segment,
  Grid,
  Image
} from "semantic-ui-react";
import DividerHidden from "./smallerParts/DividerHidden";

export default function AboutAuthor() {
  return (
    <Segment basic>
      {DividerHidden()} <Divider hidden />
      <Grid centered columns={2} textAlign="left" padded>
        {" "}
        <Grid.Row>
          <Grid.Column width={10}>
            <Image
              size="massive"
              src={
                "https://images.unsplash.com/photo-1632153380265-d1f815db5a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3271&q=80"
              }
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <hr />
            <Header.Subheader> FEATURED</Header.Subheader>{" "}
            <Header as="h1"> BEAUTIFUL BRUNCH AT POPPY SEED, NEWTOWN</Header>{" "}
            <Header.Subheader>
              Last Sunday, we went out looking for a classy but not over the top
              breakfast spot with solid vegan options. We found all that and
              more at Poppy Seed, nested on a quiet Newtown side street.
            </Header.Subheader>
            <Header></Header>
            <Button>READ MORE</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {DividerHidden()}
      <Divider hidden />
    </Segment>
  );
}
