import { useState } from "react"
import { AppBar, Box, FormControl, MenuItem, Toolbar, Typography } from "@mui/material"
import WelcomeMessage from "./WelcomeMessage"
import { Select } from "antd"

const Navbar = () => {
    const [position, setPosition] = useState<string>('Full-stack developer')

    const onPositionChange = () => {

    }

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Box 
                    display='flex' 
                    justifyContent='space-between' 
                    alignItems='center'
                    width={1}
                    py={2}
                >
                    <Typography variant='h6'>My movies</Typography>
                    <Box textAlign='center'>
                        <WelcomeMessage position={position} />
                        <FormControl>
                            <Select value={position} onChange={onPositionChange}>
                                <MenuItem value='Full-stack Developer'>Full-stack Developer</MenuItem>
                                <MenuItem value='Front-end Developer'>Front-end Developer</MenuItem>
                                <MenuItem value='Back-end Developer'>Back-end Developer</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar