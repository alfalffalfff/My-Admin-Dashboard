import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to you dashboard" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sc={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHART */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* --Row 1 Column 1-- */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="5px"
                >
                    <StatBox
                        title="12,360"
                        subtitle="Email Sent"
                        progress="0.75"
                        increase="+15%"
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                    marginLeft: "15px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* --Row 1 Column 2-- */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="426,589"
                        subtitle="Sales Oblained"
                        progress="0.55"
                        increase="+19%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                    marginLeft: "15px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* --Row 1 Column 3-- */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="36,885"
                        subtitle="New Clicents"
                        progress="0.35"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                    marginLeft: "15px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* --Row 1 Column 4-- */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="8,125,568"
                        subtitle="Traffic Inbound"
                        progress="0.85"
                        increase="+85%"
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                    marginLeft: "15px",
                                }}
                            />
                        }
                    />
                </Box>

                {/* Row2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342,32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                {/*  ROW 2 COLUMN 2 ( Transaction )*/}
                <Box 
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                        >
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display='flex'
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography
                                    color={colors.grey[100]} 
                                >
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box
                                color={colors.grey[100]}
                            >
                                {transaction.date}
                            </Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/*  ROW 3 COLUMN 1 */}
                <Box
                    gridColumn={"span 4"}
                    gridRow={"span 2"}
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                    >
                        Campaign
                    </Typography>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px"}}
                        >
                            $50,000 revenue generated
                        </Typography>
                        <Typography>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>

                {/*  ROW 3 COLUMN 2 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{ p:"30px 30px 0 30px"}}
                    >
                        Sales Quantity
                    </Typography>

                    <Box
                        height="250px"
                        mt="-20px"
                    >
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                {/*  ROW 3 COLUMN 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{ mb: "15px"}}
                    >
                        Geography Based Traffic
                    </Typography>

                    <Box
                        height="200px"
                    >
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
                
            </Box>
        </Box>
    );
};

export default Dashboard;
