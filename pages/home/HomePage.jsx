import MainLayout from '@/components/MainLayout'
import React from 'react'
import Hero from './container/Hero'
import ProductCard from '@/components/ProductCard'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <ProductCard />
    </MainLayout>
  )
}

export default HomePage