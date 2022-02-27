import React from 'react'
import '../../components/Blog/Blog.css'

const Blog = () => {
  return (
    <div className="container">
          <div className="row">
              <div className="heading-section">
                  <h1>Our <span>Blog</span></h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rem quis error architecto</p>
              </div>
              <div className="content-section">
                  <div className="card">
                      <img src="https://v2.cimg.co/news/71200/65584/responsive-images/artboard-4___media_library_original_832_468.jpg" alt="bit1" />
                      <h4>FHUD 1.5: The Most Valuable Stablecoin This Year</h4>
                      <p>FantOHM is proving itself as the premiere DAO asset on Fantom Opera through its most recent release: FHUD 1.5. FHUD will soon expand to cover all networks where the FHM protocol touches (or will touch) and now is the perfect time to be an early adopter. FHUD enables the vision of FantOHM DAO in ways that will produce wealth at every level of investment through successful treasury management.</p>
                  </div>
                  <div className="card">
                      <img src="https://v2.cimg.co/news/71179/65561/adobestock-479298600.jpg" alt="bit1" />
                      <h4>DEX Trends in 2022: Greater Market Share, New Products, Familiar Challenges</h4>
                      <p>Well, crypto has in fact already provided a solution to this problem, in the form of decentralized exchanges (DEXes). These are effectively protocols for creating pools of assets that can be traded, and while they have remained relatively marginal in previous years, 2021 saw them gaining in importance.</p>
                  </div>
                  <div className="card">
                      <img src="https://v2.cimg.co/news/71104/64921/responsive-images/10___media_library_original_1280_853.jpg" alt="bit1" />
                      <h4>Bitcoin Price Obsession - Andreas Antonopoulos</h4>
                      <p>Bitcoin price started a downside correction below the USD 44,000 level. BTC even declined below USD 43,000, but the bulls appeared near USD 42,500. It is currently (11:02 UTC) consolidating near USD 43,500, with a key hurdle near USD 44,500.</p>
                  </div>
              </div>
          </div>      
    </div>
  )
}

export default Blog