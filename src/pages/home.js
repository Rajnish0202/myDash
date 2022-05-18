import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);

  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data]);

  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <div className='logo'>
            <h1>Chart-MyDash</h1>
          </div>

          <ul className='nav_list'>
            <li className='list'>
              <a href='/home'>Home</a>
            </li>
            <li className='list'>
              <a href='/home'>About</a>
            </li>
            <li className='list'>
              <a href='/home'>Contact</a>
            </li>
          </ul>

          <div className='user'>
            <div className='user_image'>
              <img src='image/facenormal.svg' alt='' />
            </div>
            <p className='user_name'>Rajnish</p>

            <a className='user_exit' href='/'>
              exit
            </a>
          </div>
        </nav>
      </header>

      <section className='chart'>
        <svg ref={svgRef}>
          <g className='x-axis' />
          <g className='y-axis' />
        </svg>
        <button
          className='update'
          onClick={() => setData(data.map((value) => value + 5))}
        >
          Update Data
        </button>
      </section>
    </>
  );
};

export default Home;
