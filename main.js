var data = [
    {
      type: "scatterpolar",
      mode: "lines+markers",
      r: [1,2,3,4,5],
      theta: [0,90,180,360,0],
      line: {
        color: "#ff66ab"
      },
      marker: {
        color: "#8090c7",
        symbol: "square",
        size: 8
      },
      subplot: "polar"
    },
    {
      type: "scatterpolar",
      mode: "lines+markers",
      r: [1,2,3,4,5],
      theta: [0,90,180,360,0],
      line: {
        color: "#ff66ab"
      },
      marker: {
        color: "#8090c7",
        symbol: "square",
        size: 8
      },
      subplot: "polar2"
    }
  ]

var layout = {
    showlegend: false,
    polar: {
      domain: {
        x: [0,0.4],
        y: [0,1]
      },
      radialaxis: {
        tickfont: {
          size: 8
        }
      },
      angularaxis: {
        tickfont: {
          size: 8
        },
        rotation: 90,
        direction: "counterclockwise"
      }
    },
    polar2: {
      domain: {
        x: [0.6,1],
        y: [0,1]
      },
      radialaxis: {
        tickfont: {
          size: 8
        }
      },
      angularaxis: {
        tickfont: {
          size: 8
        },
        direction: "clockwise"
      }
    }
  }

Plotly.plot('myDiv', data, layout)
