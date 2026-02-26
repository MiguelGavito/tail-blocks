import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Statist from './components/statists'
import Footer from './components/footer'
import SidebarMenu from './components/SidebarMenu'
import InfoCard from './components/InfoCard'
import PrimaryButton from './components/PrimaryButton'

const infoCards = [
  {
    title: 'Shooting Stars',
    description:
      'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.',
    linkText: 'Ver más',
    href: '#',
  },
  {
    title: 'The Catalyzer',
    description:
      'Gentrify poutine marfa, art party taiyaki live-edge and sustainable design.',
    linkText: 'Detalles',
    href: '#',
  },
  {
    title: 'Neptune',
    description:
      'Tacos squid narwhal hammock, paleo air plant cardigan scenester disrupt.',
    linkText: 'Explorar',
    href: '#',
  },
]

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Header></Header>

      <main className="container mx-auto px-5 py-8">
        <div className="mb-6 flex justify-start">
          <PrimaryButton type="button" onClick={() => setIsSidebarOpen(true)}>
            Abrir menú
          </PrimaryButton>
        </div>

        <div className="flex-1">
          <Statist Users={1.9} Subscribes={2.5} Downloads={300} Products={4}></Statist>
          <section className="text-gray-600 body-font">
            <div className="flex flex-wrap -m-4">
              {infoCards.map((card) => (
                <InfoCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  linkText={card.linkText}
                  href={card.href}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <Footer></Footer>
    </>

  )
}

export default App
