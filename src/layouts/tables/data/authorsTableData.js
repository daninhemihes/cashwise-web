/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

function Category({ icon, name }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={icon} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Subcategory({ subcategories }) {
  return (
    <VuiBox>
      {subcategories.map((sub, index) => (
        <VuiBox key={index} mb={1}>
          <VuiTypography variant="caption" fontWeight="medium" color="white">
            {sub.name}
          </VuiTypography>
          <VuiTypography variant="caption" color="text">
            {sub.description} ({sub.type})
          </VuiTypography>
        </VuiBox>
      ))}
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "category", align: "left" },
    { name: "subcategories", align: "left" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      category: <Category icon="path/to/food-icon.png" name="Alimentação" />,
      subcategories: (
        <Subcategory
          subcategories={[
            { name: "Restaurantes", description: " Gastos em restaurantes", type: "Essencial" },
            { name: "Lanches", description: "Pequenos lanches", type: "Opcional" },
          ]}
        />
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Editar
        </VuiTypography>
      ),
    },
    {
      category: <Category icon="path/to/transport-icon.png" name="Transporte" />,
      subcategories: (
        <Subcategory
          subcategories={[
            { name: "Combustível", description: " Gastos com gasolina", type: "Essencial" },
            { name: "Passagens", description: " Transporte público", type: "Essencial" },
          ]}
        />
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Editar
        </VuiTypography>
      ),
    },
    {
      category: <Category icon="path/to/entertainment-icon.png" name="Entretenimento" />,
      subcategories: (
        <Subcategory
          subcategories={[
            { name: "Cinema", description: " Ingressos de filmes", type: "Opcional" },
            { name: "Shows", description: "Ingressos para shows", type: "Opcional" },
          ]}
        />
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Editar
        </VuiTypography>
      ),
    },
    {
      category: <Category icon="path/to/health-icon.png" name="Saúde" />,
      subcategories: (
        <Subcategory
          subcategories={[
            { name: "Medicamentos", description: "Compra de remédios", type: "Essencial" },
            { name: "Consultas", description: "Consultas médicas", type: "Essencial" },
          ]}
        />
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Editar
        </VuiTypography>
      ),
    },
    {
      category: <Category icon="path/to/shopping-icon.png" name="Compras" />,
      subcategories: (
        <Subcategory
          subcategories={[
            { name: "Roupas", description: "Gastos com vestuário", type: "Opcional" },
            { name: "Eletrônicos", description: "Aparelhos e acessórios", type: "Opcional" },
          ]}
        />
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Editar
        </VuiTypography>
      ),
    },
  ],
};
