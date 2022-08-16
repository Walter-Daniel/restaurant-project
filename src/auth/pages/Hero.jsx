

export const Hero = () => {
  const item = {
    title: 'Bon Apéttit',
    subtitile: 'Minutas, pastas, parrilladas, comidas para llevar.',
  }
  return (
    <>
      <div className='hero'>
        <div className='hero-img'></div>
        <div className="logo">
          <img src="/assets/images/decoracion/principal-logo.png" alt="logo de sombrero y bigotes Bon Appétit" />
        </div>
        <div className="heroText">
          <h1>{item.title}</h1>
          <h3>{item.subtitile}</h3>
          {/* <p>{item.context}</p> */}
        </div>
      </div>
    </>
  )
}