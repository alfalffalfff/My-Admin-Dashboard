import { Box, useTheme, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Header from "../../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Once a Grandmaster of the Demon Witch tradition of sorcery, Lion earned fame among his brethren for fighting on the side of light and righteousness. But adulation corrupts.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Earth Spike
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Hex
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Transforms an enemy unit into a harmless beast, with all special abilities disabled.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Mana Drain
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        CHANNELED - Channels magical energy, taking mana and slowing enemies over time. If the enemy has no mana remaining, the slow is increased by 15%. Can target allies to give them mana and movement speed at a 50% rate.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Finger of Death
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Rips at an enemy unit, trying to turn it inside-out. Deals massive damage and grows stronger with each life it consumes.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ