const dataset = [
    {
      song: 'The Box',
      plays: 2639517,
    },
    {
      song: 'Life Is Good',
      plays: 1571038,
    },
    {
      song: 'Intentions',
      plays: 1547576,
    },
    {
      song: 'No Time To Die',
      plays: 1453095,
    },
    {
      song: 'Forever',
      plays: 1188522,
    },
    {
      song: 'Roxanne',
      plays: 1148401,
    },
    {
      song: 'Blinding Lights',
      plays: 1051017,
    },
    {
      song: 'High Fashion',
      plays: 1028121,
    },
    {
      song: 'Falling',
      plays: 994267,
    },
    {
      song: 'Blueberry Faygo',
      plays: 981430,
    }
];


const svgHeight = 650;
const svgWidth = 900;
const margin = 80;
const width = 750;
const height = 500;


const svg = d3.select('svg')
    .attr('width',svgWidth)
    .attr('height', svgHeight)
    .attr('class', 'bar-chart');


const barGraph = svg.append('g')
    .attr('transform', 'translate(115, 50)');


const xScale = d3.scaleBand()
    .range([0, width])
    .domain(dataset.map((s) => s.song))
    .padding(0.3)


const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([500000, 2700000]);


barGraph.append('g')
    .attr('transform', 'translate(0, 500)')
    .call(d3.axisBottom(xScale));


barGraph.append('g')
    .call(d3.axisLeft(yScale));


const bars = barGraph.selectAll()
    .data(dataset)
    .enter()
    .append('g')


bars.append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.song))
    .attr('y', (g) => yScale(g.plays))
    .attr('height', (g) => height - yScale(g.plays))
    .attr('width', xScale.bandwidth())

const tags = bars.append('text')
    .attr('x', (g) => xScale(g.song))
    .attr('y', (g) => yScale(g.plays))
    .text((g) => g.plays)


const xAxisTitle = svg.append('text')
    .attr('class', 'titles')
    .attr('x', width / 2 + margin)
    .attr('y', height +  100)
    .attr('text-anchor', 'middle')
    .text('Song Titles')


const yAxisTitle = svg
    .append('text')
    .attr('class', 'titles')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Number of Plays')


const graphTitle = svg.append('text')
    .attr('class', 'titles')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Top Songs Listened to on Spotify in Febuary 2020')