const fs = require('fs');
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json, then remove "host" and "schemes" (swagger-autogen
// adds localhost:3000/http by default). Without them, Swagger UI sends every
// request to the same server that serves /api-docs, so the same file works
// on localhost AND on Render.
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    const spec = JSON.parse(fs.readFileSync(outputFile, 'utf8'));
    delete spec.host;
    delete spec.schemes;
    fs.writeFileSync(outputFile, JSON.stringify(spec, null, 2));
});
