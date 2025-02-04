import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';

const TextbookCreate: React.FC = (props) => (
    <Create {...props} title={'Добавяне на нов учебник'}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} label="Заглавие" />
            <TextInput source="author" validate={[required()]} label="Автор" />
            <NumberInput source="price" validate={[required()]} label="Цена" />
            <TextInput multiline source="description" validate={[required()]} label="Описание" />
            <TextInput source="imageUrl" validate={[required()]} label="Изображение" />
            <NumberInput source="stock" defaultValue={0} validate={[required()]} label="Количество" />
            <TextInput source="category" validate={[required()]} label="Категория" />
        </SimpleForm>
    </Create>
);

export default TextbookCreate;

