import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Technologic</h1>
            <p>We sell tech to you</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-facebook'></i>
                <span>Facebook</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-instagram'></i>
                <span>Instagram</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>PLAĆANJE</h2>
            <ul>
              <li>.</li>
              <li>.</li>
              <li>.</li>
              <li>.</li>
              <li>.</li>
            </ul>
          </div>
          <div className='box'>
            <h2>KONTAKT</h2>
            <ul>
              <li>Olovo,71340,Bosna i Hercegovian</li>
              <li>E-mail: info@technologic.ba</li>
              <li>Kontakt telefon: +387603127948 </li>
            </ul>
          </div>
          <div className='box'>
            <h2>RADNO VRIJEME</h2>
            <ul>
              <li>Ponedeljak - Petak:08-16h</li>
              <li>Vikend:Ne radimo</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
