import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import movies from "./movie_plots.json";
import EasyEdit from "react-easy-edit";

const save = (value) => {
  alert(value);
};
const cancel = () => {
  alert("Cancelled");
};

const Movies = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Release Year</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Director</Table.HeaderCell>
        <Table.HeaderCell>Genre</Table.HeaderCell>
        <Table.HeaderCell>Wiki Page</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    {movies.map((film) => {
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <EasyEdit
                type="text"
                onSave={save}
                onCancel={cancel}
                placeholder={`${film.Release}`}
              />
            </Table.Cell>
            <Table.Cell>
              <EasyEdit
                type="text"
                onSave={save}
                onCancel={cancel}
                placeholder={`${film.Title}`}
              />
            </Table.Cell>
            <Table.Cell>
              <EasyEdit
                type="text"
                onSave={save}
                onCancel={cancel}
                placeholder={`${film.Director}`}
              />
            </Table.Cell>
            <Table.Cell>
              <EasyEdit
                type="text"
                onSave={save}
                onCancel={cancel}
                placeholder={`${film.Genre}`}
              />
            </Table.Cell>
            <Table.Cell>
              <EasyEdit
                type="text"
                onSave={save}
                onCancel={cancel}
                placeholder={`${film.Wiki}`}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    })}

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="5">
          <i
            style={{
              color: "green",
            }}
          >
            Click in Cell to Edit
          </i>
          <Menu floated="right" pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default Movies;
