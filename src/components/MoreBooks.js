import React from "react";
import { Grid, Segment, Header, Divider, Item } from "semantic-ui-react";

export default function MoreBooks() {
  const item = () => {
    return (
      <Grid.Column textAlign="center">
        <div className="shortStories">
          <Item>
            <Item.Image
              size="huge"
              src={
                "https://images.unsplash.com/photo-1658041133672-17552737d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
              }
            />
            <br />
            <br />
            <br />
            <a href="#" className="item-header">
              <Header as="h2">I still go back to Martha’s</Header>
            </a>
            <Item.Description>
              <p>
                I still go back to Martha’s when I visit my uncle to have
                pancakes and remind me how good the simple things can be.me how
                good the simple things can be.me how good the simple things can
                be.
              </p>
            </Item.Description>

            <a href="#" className="item-header">
              <Header color="grey" as="h5">
                READ MORE
              </Header>
            </a>
          </Item>
        </div>
      </Grid.Column>
    );
  };

  return (
    <Segment placeholder>
      <Divider hidden />
      <Divider hidden />
      <Grid centered columns={2} textAlign="left" padded>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h1">MORE BOOKS</Header>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}></Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Divider hidden />
      <Grid.Row>
        <Grid centered columns="equal">
          {item()}
          {item()}
        </Grid>
      </Grid.Row>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    </Segment>
  );
}
