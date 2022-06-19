import { getClientToken } from "../clientAuthentication";
import { axios } from '../utils/axios';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle';

async function goToConsent(userId) {
    const token = await getClientToken(userId);
    window.location = `https://consent.basiq.io/home?token=${token}`;
  }

export function ConnectNow() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post('/api/create-user', { email: document.getElementById('email').value})
            .then(async res => {
                goToConsent(res.data.id)
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Let me help!
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You can help us by sharing your data. The more we have the better!
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit}>Connect</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}