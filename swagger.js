const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'cse-341-project1-8iwo.onrender.com',
    schemes: [
        'https'
    ],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);