import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "PLAĆANJE I DOSTAVA",
      decs: "Sigurnost plaćanja kreditnim karicama.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "POVRAT I ZAMJENA",
      decs: "Garancije i reklamacije.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "OPĆI USLOVI",
      decs: "Opći uslovi,izjava o privatnosti i kontakt.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "TREBATE POMOĆ?",
      decs:"Česta pitanja.Narudžbe putem e-maila i telefona."
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
