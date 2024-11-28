import { useState } from "react";
import { Button, Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";

function RTL() {
  const [formData, setFormData] = useState({
    account: "",
    amount: "",
    category: "",
    card: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Aqui você pode adicionar a lógica para enviar os dados da transação

    // Resetar o formulário após o envio, se necessário
    setFormData({
      account: "",
      amount: "",
      category: "",
      card: "",
      date: "",
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }}>
                Adicionar Transação
              </h3>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                {/* Input: Conta */}
                <VuiBox pr={1} mb={2}>
                  <VuiInput
                    placeholder="Conta"
                    name="account"
                    value={formData.account}
                    onChange={handleChange}
                    icon={{ component: "account_circle", direction: "left" }}
                    sx={{
                      backgroundColor: "info.main !important",
                    }}
                  />
                </VuiBox>
                {/* Input: Valor */}
                <VuiBox pr={1} mb={2}>
                  <VuiInput
                    placeholder="Valor"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    icon={{ component: "attach_money", direction: "left" }}
                    sx={{
                      backgroundColor: "info.main !important",
                    }}
                  />
                </VuiBox>
                {/* Input: Categoria */}
                <VuiBox pr={1} mb={2}>
                  <VuiInput
                    placeholder="Categoria"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    icon={{ component: "category", direction: "left" }}
                    sx={{
                      backgroundColor: "info.main !important",
                    }}
                  />
                </VuiBox>
                {/* Input: Cartão */}
                <VuiBox pr={1} mb={2}>
                  <VuiInput
                    placeholder="Cartão"
                    name="card"
                    value={formData.card}
                    onChange={handleChange}
                    icon={{ component: "credit_card", direction: "left" }}
                    sx={{
                      backgroundColor: "info.main !important",
                    }}
                  />
                </VuiBox>
                {/* Input: Data */}
                <VuiBox pr={1} mb={2}>
                  <VuiInput
                    placeholder="Data"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    icon={{ component: "calendar_today", direction: "left" }}
                    sx={{
                      backgroundColor: "info.main !important",
                    }}
                  />
                </VuiBox>
                {/* Botão: Adicionar */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "#5a55f7",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Adicionar
                </Button>
              </form>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
