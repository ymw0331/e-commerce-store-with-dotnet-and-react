import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Switch } from '@mui/material';

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export const Header = ({ darkMode, handleThemeChange }: Props) => {
    return (

        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>

                <Switch checked={darkMode} onChange={handleThemeChange} />


            </Toolbar>
        </AppBar>
    )
}
