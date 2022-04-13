/* Se puede importar individualmente */
/* import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; */

/* Se puede importar todo junto */
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";
import { Container, Grid, Typography } from "@mui/material";

/* sx={{ fontWeight: "bold" }} esta propiedad permite agregar estilos personalizados al componente*/

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de noticias
          </Typography>
        </header>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
