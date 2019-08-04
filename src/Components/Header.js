import React from "react";
import { Sticky, Grid, Card, Form, Input, Button, Icon } from "semantic-ui-react";

const PageTitle = () => {
  return (
    <Sticky>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Card fluid>
              <Card.Header as="h2" size="large" textAlign="center">
                Do Something
              </Card.Header>
              <Card.Content textAlign="center">
                <Form>
                  <Form.Field>
                    <Input
                      action={{
                        labelPosition: "left",
                        icon: "cog",
                        color: "teal",
                        content: "Task"
                      }}
                      actionPosition="left"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      action={{
                        labelPosition: "left",
                        icon: "calendar alternate outline",
                        color: "teal",
                        content: "Date"
                      }}
                      actionPosition="left"
                    />
                  </Form.Field>
                  <Button color="teal" animated="fade">
                    <Button.Content visible>Add Task</Button.Content>
                    <Button.Content hidden>
                      <Icon name="thumbs up" />
                    </Button.Content>
                  </Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
    </Sticky>
  );
};

export default PageTitle;
