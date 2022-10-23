//========Material Ui========

import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//###############################################################//

const Input = ({ name, label, type, autoFocus, half, handleChange, handleShowPassword }:any) => {
    return (
        <Grid item xs={12} sm={ half ? 6 : 12}>
            <TextField
            name= { name }
            onChange= { handleChange }
            variant= "outlined"
            required
            fullWidth
            label= { label }
            autoFocus= { autoFocus }
            type= { type }
            inputProps= { name === "password" ? {
                endAdorment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={ handleShowPassword }>
                            { type === "password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            } : {} }
            />
        </Grid>
    );
}


export default Input;