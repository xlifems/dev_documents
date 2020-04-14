# Configurar CORS en NodeJS con Express

Cuando hacemos peticiones AJAX con Fetch, jQuery o Angular a un API REST o backend en en NodeJS es normal que tengamos problemas con el acceso CORS  y nos fallen las peticiones.

Para solucionar esto y sin necesidad de agregar modulos podemos crear un middleware en el cuala establecemos la configuracion para el acceso desde cualquier host:

## Backend

```typescript

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

```

## Frontend petición con fetch

```javascript

function registerPost() {
    
    const data = {
        titulo,
        descripcion
    }

    fetch('https//localhost:3000/api/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': userSession.token
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (dataJson) {        
        console.log(dataJson)
    });
}

```