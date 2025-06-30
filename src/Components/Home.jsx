import React from 'react'
import Card from '../Components/Card'
import Nav from '../Components/Nav'
import Recipe from '../Components/Recipe'
import Nav2 from '../Nav2'
import Card2 from '../Card2'
import img1 from '../assets/files/pack_of_6.png';
import img2 from '../assets/files/Plant-Protein-Coffee-FOP_1.png';
import img3 from '../assets/files/Plant-Protein-Unflavoured-FOP_1.png';
import img4 from '../assets/files/Plant-Protein-Chocolate-FOP_1.png';
import card2img1 from '../assets/files/Group_794_b6015e30-dfcf-4395-afce-b93c336fc647.png'
import card2img2 from '../assets/files/Artboard_1_5.png'
import card2img3 from '../assets/files/Group_794_b6015e30-dfcf-4395-afce-b93c336fc647.png'
import card2img4 from '../assets/files/Group_793.png'
import card2img5 from '../assets/files/Group_796.png'
import card2img6 from '../assets/files/Group_1714.png'
import card2img7 from '../assets/files/Group_1715.png'
import card2img8 from '../assets/files/Power_Up_Monocarton_Mockup.png'
import Card3 from '../Card3'
import Card4 from '../Card4'
import Slider2 from '../Slider2'
import card3img1 from '../assets/card3/PROTEIN_MINI_BOX_FOP.webp'
import card3img2 from '../assets/card3/12g_Monocarton_FOP.webp'
import card3img3 from '../assets/card3/CreatineFOP_1.png'
import card3img4 from '../assets/card3/Group_822.webp'
import card3img5 from '../assets/card3/Group_1670.webp'
import card3img6 from '../assets/card3/Group_1715.webp'
import card3img7 from '../assets/card3/Group_815.webp'
import card3img8 from '../assets/card3/Group16-_Compressify.io_aa36a991-aa12-40ab-ad94-a40f19408a6f.webp'
import card4img1 from '../assets/files/Group_766.webp'
import card4img2 from '../assets/files/Group80-_Compressify.io_3465c3b9-3ab1-4e62-a367-f0f8569a9965.webp'
import card4img3 from '../assets/files/rolledOats_1kg.webp'
import card4img4 from '../assets/files/Variety_FOP_BO6_-_B07CN1K1Z6.webp'
import card4img5 from '../assets/files/Group739.webp'
import card4img6 from '../assets/files/Pancake150g.webp'
import card4img7 from '../assets/files/Group470.webp'
import card4img8 from '../assets/files/FNS.webp'
import Footerimg from '../Components/Footerimg'
import Footer from '../Components/Footer'
import Nav3 from './Nav3'



const Home = () => {
  return (
    <div>
        <div>

      <Nav />
      <Nav3/>
       <div  className='w-[100vw] max-sm:h-[180vw] max-sm:mb-[10vw] gap-[3vw]  flex flex-wrap justify-center items-center '>

        <Card title='26g Protein Shake Mango Rizz' img={img1} lrs='840.00' rs='799.00' />
        <Card title='ProClean Plant Protein with Monk Fruit (Coffee) 500g' img={img2} lrs='1,850.00' rs='1,599.00' />
        <Card title='ProClean Plant Protein (Unflavoured) 500g' img={img3} lrs='1,750.00' rs='1,499.00' />
        <Card title='ProClean Plant Protein with Monk Fruit (Chocolate) 500g' img={img4} lrs='1,850.00' rs='1,750.00' />

      </div>

      <Nav2 />



      <div className='w-[100vw]  gap-[3vw] max-sm:h-[360vw]  max-sm:mb-[10vw]  mt-[5vw] flex flex-wrap justify-center items-center '>

        <Card2 title='ProClean Whey with Monk Fruit (Chocolate) 3lb' img={card2img1} lrs='5998.00' rs='4,500.00' />
        <Card2 title='ProClean Whey Protein Isolate 750g - Trustified Certified' img={card2img2} lrs='4,499.00' rs='3,600.00' />
        <Card2 title='ProClean Whey with Monk Fruit (Chocolate) 1.5lb' img={card2img3} lrs='2,999.00' rs='2,250.00' />
        <Card2 title='ProClean Whey 0 Calorie Sweetener (Chocolate) 2lb' img={card2img4} lrs='3,999.00' rs='3,200.00' />
        <Card2 title='ProClean Whey Protein Concentrate 1kg' img={card2img5} lrs='2,999.00' rs='2,400.00' />
        <Card2 title='26g Protein Shake Double Chocolate - Pack of 24' img={card2img6} lrs='3,360.00' rs='2,700.00' />
        <Card2 title='26g Protein Shake Cold Coffee - Pack of 24' img={card2img7} lrs='3,360.00' rs='2,700.00' />
        <Card2 title='Power Up Choco Peanut Butter 20g Protein Bars - Pack of 5' img={card2img8} lrs='700.00' rs='650.00' />

      </div>

      <Slider2 />

      <div className='w-[100vw]  gap-[3vw] mb-[5vw] mt-[5vw] flex flex-wrap justify-center items-center '>

        <Card3 title='Protein Minis, 4g Choco Peanut Butter Protein Bar - Pack of 24' img={card3img1} lrs='Rs. 480.00' rs='460.00' />
        <Card3 title='Strong 12g Protein Bar - Choco Peanut - Pack of 6' img={card3img2} lrs='Rs. 549.00' rs='349.00' />
        <Card3 title='Micronised Creatine Monohydrate - Watermelon - 3g per scoop' img={card3img3} lrs='Rs. 799.00' rs='699.00' />
        <Card3 title='ProClean Whey with Monk Fruit (Chocolate) - 35g Sachet Pack of 3' img={card3img4} lrs='Rs. 649.00' rs='640.00' />
        <Card3 title='ProClean Whey 0 Calorie Sweetener (Chocolate) - 35g Sachet Pack of 3' img={card3img5} lrs='' rs='649.00' />
        <Card3 title='26g Protein Shake Cold Coffee' img={card3img6} lrs='' rs='840.00' />
        <Card3 title='26g Protein Shake Double Chocolate' img={card3img7} lrs='' rs='840.00' />
        <Card3 title='Variety Pack 10g Protein Bar Box (Pack of 6)' img={card3img8} lrs='450.00' rs='449.00' />

      </div>

      <Recipe />

      <div className='w-[100vw]  gap-[3vw]  mt-[5vw] flex flex-wrap justify-center items-center '>

        <Card4 title='High Protein Muesli' img={card4img1} lrs='395.00' text='When we say 21g protein, we mean it.' rs='375.00' />
        <Card4 title='20g Protein Oats Choco Almond 850g' img={card4img2} lrs='699.00' rs='664.00' text='We made sure your mornings get the right amount of love and protein.' />
        <Card4 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card4 title='Variety Pack Breakfast Bar Box (Pack of 6)' img={card4img4} lrs='359.00' rs='299.00' text="Name a better flavour combo, we'll wait!" />
        <Card4 title='Apricot Fig Breakfast Dark Chocolate Pancake Bar (Pack of 6)' img={card4img5} lrs='359.00' rs='290.00' text="A quick fruity fix for people who're too busy for breakfast." />
        <Card4 title='Dark Chocolate Pancake Mix, 150g' img={card4img6} lrs='150.00' rs='143.00' text="Who said you can't eat pancakes everyday." />
        <Card4 title='Variety Pack Energy Bar (Pack of 10)' img={card4img7} lrs='499.00' rs='399.00' text="Unadulterated energy, in every bite." />
        <Card4 title='Fruits Nuts & Seeds Muesli 700g' img={card4img8} lrs='499.00' rs='449.00' text='Just a lotta fruits, nuts, seeds, and whole grains. Wholesome innit?' />

      </div>
<Footerimg/>
<Footer/>





    </div>
    </div>
  )
}

export default Home
