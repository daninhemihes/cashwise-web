// src/components/TransactionModal.js
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransactionModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    account: '',
    amount: '',
    category: '',
    card: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose(); // Fecha a modal após o envio
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Adicionar Transação
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Conta"
            name="account"
            value={formData.account}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Valor"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Categoria"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Cartão"
            name="card"
            value={formData.card}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Data"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Adicionar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default TransactionModal;