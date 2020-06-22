import React, { useEffect } from 'react'
import { StyleAbout } from './StyleAbout'
import omYogasyster from '../assets/images/om-yogasyster-matilda-edén.jpg'
import omYogasysterBigScreen from '../assets/images/om-yogasyster-matilda.jpg'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <StyleAbout>
        <img
          className='pic-small-screen'
          src={omYogasyster}
          alt='Yogasyster Matilda mediterar i skogen'
        />
        <img
          className='pic-big-screen'
          src={omYogasysterBigScreen}
          alt='Yogasyster Matilda mediterar i skogen'
        />
        <section className='text-container'>
          <h1>Om mig</h1>
          <p>
            Det var yogan som hittade mig! En sökande person, med höga krav på
            sig själv, som alltid varit upptagen av 1000 tankar samtidigt och
            oroat sig för framtiden.
          </p>
          <p>
            Innan yogan kom in i bilden prövade jag på strategin “resa till
            andra platser för att hitta mig själv”. Den där “inre kompassen”
            borde väl ändå finnas på andra sidan jorden? Efter varje resa inser
            jag att i ryggsäcken ligger också mitt inre bagage som jag i så
            många år burit runt på, packat ner, packat om och rest vidare. Efter
            den insikten får jag en yoga-dvd i inflyttningspresent, min syster
            flyttar till Kalifornien och bästisen reser till Indien. Jag börjar
            följa dvd:n, köper yogatidningar och får frågan, vill du följa med
            till Indien?
          </p>
          <p>
            Varför inte göra ett nytt försök till att hitta den “inre kompassen”
            på andra sidan jorden? Vi checkar in på ett ashram i Rishikesh och
            vänder uppmärksamheten inåt. Jag öppnas upp för en värld där asanas
            är ett verktyg för att komma djupare i meditation och det
            spirituella sökandet. På min tallrik serveras ett helhetstänk som
            jag i så många år har letat efter och som jag fortfarande vill lära
            mig mer om!
          </p>
          <p>
            Inom yogan hittar jag svar och strategier till att våga vara kvar i
            mig själv, vara i nuet, acceptera tankar och jag lär mig nya saker
            hela tiden. Är fortfarande så tacksam för att jag och yogan hittade
            varandra och är mer än motiverad till att fördjupa den relationen
            genom att även lära ut yoga till andra.
          </p>
          <p>
            I mitt jobb som arbetsterapeut och yogalärare vill jag vara med och
            bidra till att fler får upp ögonen för ”the power of yoga” och
            hittar verktyg i sin vardag även utanför yogamattan. Jag tycker att
            yoga ska vara enkelt, tillgängligt och prestigelöst.
          </p>
          <p>Hoppas du vill följa med på resan!</p>
          <h2 className='namaste'> Namasté</h2>
          <h3 className='matilda'> Matilda Edén</h3>
        </section>
      </StyleAbout>
    </>
  )
}

export default About
