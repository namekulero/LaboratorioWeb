import express from 'express';
import * as http from 'http';

const app: express.Application = express();
const port: number = 3000;

// Configuración básica del servidor
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Servidor Express con TypeScript funcionando ✅');
});

// Iniciar servidor
const server: http.Server = http.createServer(app);
server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app;
