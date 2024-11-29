import React, { useState } from "react";
import MuiCard from "@mui/material/Card";
import { TextField, Button, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function CardRegistration() {
  const [form, setForm] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cartão cadastrado:", form);
    setForm({ cardNumber: "", cardHolder: "", expiryDate: "", cvv: "" });
  };

  return (
    <MuiCard sx={{ height: "100%", p: 3 }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="18px">
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          Cadastro de Cartão
        </VuiTypography>
      </VuiBox>

      <VuiBox component="form" onSubmit={handleSubmit} mb={3}>
        <Grid container spacing={3}>
          {/* Campo para o número do cartão */}
          <Grid item xs={12} sm={6}>
            <VuiBox pr={1}>
              <TextField
                label="Número do Cartão"
                variant="outlined"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }} // Garantindo que o label fique no topo
                sx={{
                  marginBottom: 2, // Adiciona um espaçamento entre os campos
                  "& .MuiInputLabel-root": {
                    top: "-10px", // Ajuste para garantir que o label não sobreponha o campo
                  },
                }}
              />
            </VuiBox>
          </Grid>

          {/* Campo para o nome no cartão */}
          <Grid item xs={12} sm={6}>
            <VuiBox pr={1}>
              <TextField
                label="Nome no Cartão"
                variant="outlined"
                name="cardHolder"
                value={form.cardHolder}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }} // Garantindo que o label fique no topo
                sx={{
                  marginBottom: 2, // Adiciona um espaçamento entre os campos
                  "& .MuiInputLabel-root": {
                    top: "-10px", // Ajuste para garantir que o label não sobreponha o campo
                  },
                }}
              />
            </VuiBox>
          </Grid>

          {/* Campo para a data de expiração */}
          <Grid item xs={12} sm={6}>
            <VuiBox pr={1}>
              <TextField
                label="Data de Expiração"
                variant="outlined"
                name="expiryDate"
                value={form.expiryDate}
                onChange={handleChange}
                fullWidth
                type="month" // Corrigido para type="month"
                InputLabelProps={{ shrink: true }} // Garantindo que o label fique no topo
                sx={{
                  marginBottom: 2, // Adiciona um espaçamento entre os campos
                  "& .MuiInputLabel-root": {
                    top: "-10px", // Ajuste para garantir que o label não sobreponha o campo
                  },
                }}
              />
            </VuiBox>
          </Grid>

          {/* Campo para o CVV */}
          <Grid item xs={12} sm={6}>
            <VuiBox pr={1}>
              <TextField
                label="CVV"
                variant="outlined"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                fullWidth
                type="password"
                InputLabelProps={{ shrink: true }} // Garantindo que o label fique no topo
                sx={{
                  marginBottom: 2, // Adiciona um espaçamento entre os campos
                  "& .MuiInputLabel-root": {
                    top: "-10px", // Ajuste para garantir que o label não sobreponha o campo
                  },
                }}
              />
            </VuiBox>
          </Grid>

          {/* Botão para submeter o formulário */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Cadastrar Cartão
            </Button>
          </Grid>
        </Grid>
      </VuiBox>
    </MuiCard>
  );
}

export default CardRegistration;
