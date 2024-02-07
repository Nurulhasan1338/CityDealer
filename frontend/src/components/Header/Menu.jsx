import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';
import { Link } from 'react-router-dom';

const Popup = styled(Popper)({
  zIndex: 1000,
});

export default function MenuListComposition() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      buttonRef.current.focus();
      setOpen(false);
    }
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        id="composition-button"
        aria-controls={'composition-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
      >
         Menu
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener
          onClickAway={(event) => {
            if (event.target !== buttonRef.current) {
              handleClose();
            }
          }}
        
        >
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md',
                  padding:3
                }}
          >
            <MenuItem ><Link className="nav-link" aria-current="page" to="/">Home</Link></MenuItem>
            <MenuItem ><Link className="nav-link" ara-current="page" to="/interior">Interior</Link></MenuItem>
            <MenuItem > <Link className="nav-link" to="/Construction">Construction</Link></MenuItem>
            <MenuItem ><Link className="nav-link" to="/Properties">Properties</Link></MenuItem>
            <MenuItem ><Link className="nav-link" to="/AboutUs">About us</Link></MenuItem>
            <MenuItem > <Link className="nav-link" to="/sell">Sell</Link></MenuItem>
            <MenuItem >  <span className="navbar-text">
                        <Button
                            className='me-3'
                            color="success"
                        >
                            Countact Us!
                        </Button>
                    </span></MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}
