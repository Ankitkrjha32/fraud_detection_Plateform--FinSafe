const graphConfig = {
    nodeHighlightBehavior: true,
    staticGraph: false,  // Allows dragging nodes
    panAndZoom: true,  // Enables zooming and panning
    d3: {
      gravity: -100,  // Adjust gravity to space out nodes
      linkLength: 120, // Adjust link length for readability
      scaleExtent: [0.1, 2] // Allows zooming between 10% to 200%
    },
    node: {
      size: 800,
      fontSize: 10,
      fontFamily: "Arial, sans-serif",
      highlightStrokeColor: "black",
      labelProperty: "name",
    },
    link: {
      highlightColor: "lightblue",
    },
    directed: false,
    height: 400,
    width: 400,
  };
  