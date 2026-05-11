import './App.css'
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import FetchCharacter from './components/FetchCharacter';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Typography variant="h2" component="h2" align='center' sx={{
        color: 'white',
        margin: "32px",
        fontSize: {
          md: "4rem",
          xs: "2rem"
        }
      }}>
        Mark your favorite Disney character by clicking on the heart icon!
      </Typography>
      <FetchCharacter />
      <Footer />
    </>
  )
}

export default App
