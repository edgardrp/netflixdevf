const { graphql } = require('graphql');
const { schema } = require('../index');
const setUpTest = require('./helpers');
const mutationRegister = `

    mutation Register($first_name:String!, $last_name:String!, $email:String!, $password:String!) {
        signup(data:{first_name:$first_name, 
            last_name:$last_name, 
            email:$email,
            password:$password
        }){
            token
        }
    }

`

describe('Register user works correctly', () => {

    beforeEach(async () => await setUpTest());

    it('Should create user correctly', async () => {
        const first_name = "Prueba";
        const last_name = "Prueba";
        const email = "prueba@prueba.com";
        const password = "prueba";

        const res = await graphql(
            schema,
            mutationRegister,
            null,
            {},
            { first_name, last_name, email, password }
        );

        expect(res).toMatchSnapshot();
        expect(res).toHaveProperty("data");
    });

});