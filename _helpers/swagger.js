import express from 'express';
const router = express.Router();
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.json');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;