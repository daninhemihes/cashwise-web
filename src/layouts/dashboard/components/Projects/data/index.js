// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import { FaCar, FaPiggyBank, FaSuitcase, FaHeart } from 'react-icons/fa';

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "meta", align: "left" },
      { name: "valor", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        meta: (
          <VuiBox display="flex" alignItems="center">
           <FaCar size="20px" style={{ color: '#0075ff' }} /> 
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Carro Novo
            </VuiTypography>
          </VuiBox>
        ),
       
        valor: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            R$34.000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              15%
            </VuiTypography>
            <VuiProgress value={15} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        meta: (
          <VuiBox display="flex" alignItems="center">
             <FaPiggyBank size="20px"  style={{ color: '#ff5733' }}/>          
              <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Reserva de emergência   
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        valor: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            R$4.000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        meta: (
          <VuiBox display="flex" alignItems="center">
           <FaSuitcase size="20px" style={{ color: '#007bff' }} />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Viagem a Paris
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
        valor: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            R$25.000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        meta: (
          <VuiBox display="flex" alignItems="center">
               <FaHeart size="20px" style={{ color: '#ff69b4' }} /> 
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Festa de casamento
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
        valor: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            R$50.000
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              25%
            </VuiTypography>
            <VuiProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
  
    ],
  };
}
