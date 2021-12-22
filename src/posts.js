import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `${record.id} "${record.title}"` : "" }</span>
}

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty >
    <SelectInput optionText="name" />
  </ReferenceInput>
]

export const PostList = props => (
  <List {...props} filters={postFilters}>
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);


export const PostEdit = props => (
  <Edit {...props} title={<PostTitle/> }>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput  multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput  multiline source="body" />
    </SimpleForm>
  </Create>
);
