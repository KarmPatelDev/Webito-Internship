import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const Dashboard = () => {


    const DashboardContainer = styled(Container)({
        backgroundColor: '#0b1a32', // Dark blue background
        color: '#fff',
        height: "100vh",
        paddingTop: '20px',
        width: "100%"
      });
      
      const DashboardCard = styled(Card)({
        backgroundColor: '#12264a', // Slightly lighter blue for the cards
        color: '#fff',
      });
      
      const DashboardHeader = styled(Box)({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      });

    return (
        <>
            <NavBar />
            <Box height={40} />
            <Box sx={{ display: "flex" }}>
                <SideBar />
                <Box component="main" sx={{ pt: 3 }}>
                <DashboardContainer style={{ maxWidth: "100%" }}>
                    <DashboardHeader>
                        <Typography variant="h4">Dashboard Home</Typography>
                        <Button variant="contained" color="primary">Execute Trade</Button>
                    </DashboardHeader>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">₹3L</Typography>
                            <Typography variant="subtitle1">Investment Value</Typography>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">₹2.5L</Typography>
                            <Typography variant="subtitle1">Market Value</Typography>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">₹-50,000 (-10%)</Typography>
                            <Typography variant="subtitle1">Total P&L</Typography>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">₹0.00</Typography>
                            <Typography variant="subtitle1">Today's P&L</Typography>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">Market</Typography>
                            <Box mt={2}>
                                {/* Add market data here */}
                                <Typography>Sensex: 29,986.00 (+1.18%)</Typography>
                                <Typography>Nifty 50: 11,172.50 (+0.75%)</Typography>
                                {/* Add more market data as needed */}
                            </Box>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">Profit And Loss Overview</Typography>
                            <Box mt={2}>
                                {/* Add a chart component here */}
                                <Typography>Chart Placeholder</Typography>
                            </Box>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">Buy</Typography>
                            <Box mt={2}>
                                {/* Add buy orders here */}
                                <Typography>Sensex: 29,986.00 (Buy Price: 29,800.00)</Typography>
                                <Typography>Nifty 50: 11,172.50 (Buy Price: 11,150.00)</Typography>
                                {/* Add more buy orders as needed */}
                            </Box>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <DashboardCard>
                            <CardContent>
                            <Typography variant="h6">Sell</Typography>
                            <Box mt={2}>
                                {/* Add sell orders here */}
                                <Typography>Sensex: 29,986.00 (Sell Price: 30,000.00)</Typography>
                                <Typography>Nifty 50: 11,172.50 (Sell Price: 11,200.00)</Typography>
                                {/* Add more sell orders as needed */}
                            </Box>
                            </CardContent>
                        </DashboardCard>
                        </Grid>
                    </Grid>
                </DashboardContainer>
                </Box>
            </Box>
        </>
    )

};

export default Dashboard;