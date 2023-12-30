import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from 'pages/Home/Home'

type Props = {};



const App = (props: Props) => {
 
  return (
            <>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <Header />
                    <Home/>
                </StyledEngineProvider>
            </>
        )
    }


export default App
