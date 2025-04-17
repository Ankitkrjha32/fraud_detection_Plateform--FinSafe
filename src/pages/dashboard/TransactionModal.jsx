import React, { useState } from "react";
import { Modal, Box, Typography, Divider } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Graph } from "react-d3-graph";

// Helper function: BFS to compute the connected component of the selected transaction.
const getConnectedComponent = (transactions, selectedId) => {
    const visited = new Set();
    const queue = [selectedId];

    while (queue.length > 0) {
        const current = queue.shift();
        if (!visited.has(current)) {
            visited.add(current);
            const tx = transactions.find((t) => t.tracking_no.toString() === current);
            if (tx && Array.isArray(tx.connections)) {
                tx.connections.forEach((conn) => {
                    const connStr = conn.toString();
                    if (!visited.has(connStr)) {
                        queue.push(connStr);
                    }
                });
            }
            // Also add reverse connections.
            transactions.forEach((t) => {
                const tId = t.tracking_no.toString();
                if (t.connections?.map(String).includes(current) && !visited.has(tId)) {
                    queue.push(tId);
                }
            });
        }
    }
    return visited;
};

const handleClickNode = (nodeId) => {
    const nodeData = transactions.find((t) => t.tracking_no.toString() === nodeId);
    if (nodeData) {
        alert(`Transaction Details:\n\nMerchant: ${nodeData.name}\nAmount: ₹${nodeData.total_amount}`);
    }
};


// Helper function to generate a custom colored marker icon.
const getColoredIcon = (color, size = 20) => {
    return L.divIcon({
        className: "custom-marker",
        html: `<div style="background-color: ${color}; width: ${size}px; height: ${size}px; border-radius: 50%; border: 2px solid white;"></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

const TransactionModal = ({ open, onClose, transaction, transactions }) => {
    if (!transaction || !transactions) return null;

    const [hoveredNodes, setHoveredNodes] = useState(new Set());
    const selectedId = transaction.tracking_no.toString();
    const connectedIds = getConnectedComponent(transactions, selectedId);

    const filteredNodes = transactions
        .filter((tx) => connectedIds.has(tx.tracking_no.toString()))
        .map((tx) => ({
            id: tx.tracking_no.toString(),
            name: tx.name,
            location: tx.location,
            size: 800,
            fontSize: 14,
        }));

    const colorPalette = ["red", "blue", "green", "orange", "purple", "brown", "pink", "teal"];
    const coloredNodes = filteredNodes.map((node, index) => ({
        ...node,
        color: colorPalette[index % colorPalette.length],
    }));

    const filteredLinks = [];
    transactions.forEach((tx) => {
        const txId = tx.tracking_no.toString();
        if (connectedIds.has(txId) && Array.isArray(tx.connections)) {
            tx.connections.forEach((conn) => {
                const connId = conn.toString();
                if (connectedIds.has(connId) && txId < connId) {
                    filteredLinks.push({ source: txId, target: connId });
                }
            });
        }
    });

    const graphData = { nodes: coloredNodes, links: filteredLinks };
    const graphConfig = {
        nodeHighlightBehavior: true,
        directed: false,
        height: 400,
        width: 400,
        d3: {
            gravity: -200, // Adds spacing between nodes
            linkLength: 200, // Adjust distance between nodes
            alphaTarget: 0.05, // Stabilizes the layout
        },
        node: {
            size: 800,
            fontSize: 12,
            fontFamily: "Arial, sans-serif",
            fontColor: "black",
            highlightFontSize: 20,
            highlightFontWeight: "bold",
            highlightStrokeColor: "black",
            labelProperty: "name",
            renderLabel: true,
        },
        link: {
            highlightColor: "lightblue",
            strokeWidth: 2,
        },
        panAndZoom: true, // Enable zoom and pan
        staticGraph: false, // Allow node movement
    };


    const handleMouseOverNode = (nodeId) => {
        const newHovered = new Set([nodeId]);
        filteredLinks.forEach((link) => {
            if (link.source === nodeId) newHovered.add(link.target);
            if (link.target === nodeId) newHovered.add(link.source);
        });
        setHoveredNodes(newHovered);
    };

    const handleMouseOutNode = () => setHoveredNodes(new Set());
    const mapCenter = transaction.location?.latitude && transaction.location?.longitude
        ? [transaction.location.latitude, transaction.location.longitude]
        : [0, 0];

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%",
                    maxWidth: 1100,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
                    Transaction Details
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1"><strong>Tracking No:</strong> {transaction.tracking_no}</Typography>
                <Typography variant="body1"><strong>Merchant:</strong> {transaction.name}</Typography>
                <Typography variant="body1"><strong>Risk Score:</strong> {transaction.risk_score}</Typography>
                <Typography variant="body1" mb={2}><strong>Total Amount:</strong> ₹{transaction.total_amount}</Typography>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
                    <Box sx={{ flex: 1, height: 400, p: 2, bgcolor: "#f8f9fa", borderRadius: 2 }}>
                        <Typography variant="subtitle1" mb={1}>Connected Transactions Graph</Typography>
                        <Graph
                            id="transactions-graph"
                            data={graphData}
                            config={graphConfig}
                            onClickNode={handleClickNode}
                        />

                    </Box>
                    <Box sx={{ flex: 1, height: 500, p: 2, bgcolor: "#f8f9fa", borderRadius: 2 }}>
                        <Typography variant="subtitle1" mb={1}>Transactions Location Map</Typography>
                        <MapContainer center={mapCenter} zoom={3} style={{ height: "100%", width: "100%" }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {coloredNodes.map((node) => node.location &&
                                <Marker key={node.id} position={[node.location.latitude, node.location.longitude]} icon={getColoredIcon(node.color)}>
                                    <Popup>{node.name}</Popup>
                                </Marker>)}
                        </MapContainer>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default TransactionModal;
