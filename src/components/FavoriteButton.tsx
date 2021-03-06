import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selected: {
            color: theme.palette.secondary.main
        }
    })
);

export function FavoriteButton() {
    const [selected, setSelected] = React.useState(false);
    const classes = useStyles();

    const toggleSelected = () => setSelected(!selected);
    const className = selected ? classes.selected : undefined;

    return (
        <Tooltip title="Сохранить">
            <IconButton
                aria-label="add to favorites"
                className={className}
                onClick={toggleSelected}
            >
                <FavoriteIcon />
            </IconButton>
        </Tooltip>
    );
}

export default FavoriteButton;
