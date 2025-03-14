'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  // 添加錯誤處理
  useEffect(() => {
    // 捕獲全局錯誤
    const handleError = (error) => {
      console.error('捕獲到錯誤:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark">
          {/* 使用背景色替代圖片，避免圖片加載問題 */}
          <div className="absolute inset-0 bg-dark/70"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            專業攝影器材<span className="text-primary">，</span>卓越品質
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            怪機絲提供高品質攝影器材，滿足專業攝影師和影像創作者的各種需求
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-luxury">
              瀏覽所有商品
            </Link>
            <Link href="/categories" className="px-6 py-3 border border-white text-white rounded-md transition-all duration-300 hover:bg-white hover:text-dark-light font-medium">
              查看商品分類
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="page-title text-center mb-16">熱門商品分類</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="card-luxury group">
              <div className="relative h-64 overflow-hidden bg-dark-light">
                {/* 使用背景色替代圖片 */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-2">直播設備</h3>
                <p className="text-gray-300 mb-4">專業直播用攝影機、讀稿機、導播設備等</p>
                <Link href="/products" className="text-white hover:text-primary transition-colors flex items-center">
                  查看商品
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="card-luxury group">
              <div className="relative h-64 overflow-hidden bg-dark-light">
                {/* 使用背景色替代圖片 */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-2">穩定器</h3>
                <p className="text-gray-300 mb-4">手機、相機穩定器，適合拍攝Vlog和專業影片</p>
                <Link href="/products" className="text-white hover:text-primary transition-colors flex items-center">
                  查看商品
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="card-luxury group">
              <div className="relative h-64 overflow-hidden bg-dark-light">
                {/* 使用背景色替代圖片 */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-2">收音設備</h3>
                <p className="text-gray-300 mb-4">麥克風、收音器、監聽耳機等專業音頻設備</p>
                <Link href="/products" className="text-white hover:text-primary transition-colors flex items-center">
                  查看商品
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Category 4 */}
            <div className="card-luxury group">
              <div className="relative h-64 overflow-hidden bg-dark-light">
                {/* 使用背景色替代圖片 */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-2">攝影燈具</h3>
                <p className="text-gray-300 mb-4">LED補光燈、RGB彩色燈、環形燈等各種攝影燈具</p>
                <Link href="/products" className="text-white hover:text-primary transition-colors flex items-center">
                  查看商品
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4">
          <h2 className="page-title text-center mb-16">熱門商品</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="card-luxury">
              <div className="relative p-4 bg-dark-light">
                <h3 className="text-xl font-serif text-primary mb-2">Ulanzi RT02 讀稿機</h3>
                <p className="text-white font-bold mb-1">NT$ 3,980</p>
                <p className="text-gray-400 mb-2">直播設備</p>
                <p className="text-gray-300 mb-4">專業直播讀稿機，適合網紅主播使用，支援多種設備連接。</p>
                <Link href="/products" className="btn-luxury w-full text-center">
                  查看詳情
                </Link>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="card-luxury">
              <div className="relative p-4 bg-dark-light">
                <h3 className="text-xl font-serif text-primary mb-2">Zhiyu Smooth Q4 手機穩定器</h3>
                <p className="text-white font-bold mb-1">NT$ 2,980</p>
                <p className="text-gray-400 mb-2">穩定器</p>
                <p className="text-gray-300 mb-4">專業手機穩定器，三軸防抖，適合Vlog拍攝，支援多種手機尺寸。</p>
                <Link href="/products" className="btn-luxury w-full text-center">
                  查看詳情
                </Link>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="card-luxury">
              <div className="relative p-4 bg-dark-light">
                <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 m-2 text-sm font-bold">
                  新品
                </div>
                <h3 className="text-xl font-serif text-primary mb-2">Panasonic S5M2 全片幅相機</h3>
                <p className="text-white font-bold mb-1">NT$ 52,900</p>
                <p className="text-gray-400 mb-2">相機</p>
                <p className="text-gray-300 mb-4">Panasonic全片幅無反相機，2420萬像素，支援6K錄影，內建五軸防抖。</p>
                <Link href="/products" className="btn-luxury w-full text-center">
                  查看詳情
                </Link>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className="card-luxury">
              <div className="relative p-4 bg-dark-light">
                <h3 className="text-xl font-serif text-primary mb-2">RODE Wireless Go II 無線麥克風</h3>
                <p className="text-white font-bold mb-1">NT$ 8,990</p>
                <p className="text-gray-400 mb-2">收音設備</p>
                <p className="text-gray-300 mb-4">RODE雙通道無線麥克風系統，內建錄音功能，最遠傳輸距離200米。</p>
                <Link href="/products" className="btn-luxury w-full text-center">
                  查看詳情
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-luxury">
              查看所有商品
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="page-title">關於怪機絲</h2>
              <p className="text-gray-300 mb-6">
                怪機絲GGS是專業攝影器材批發零售訂製商，成立於2006年，致力於提供高品質的攝影相關設備，包括相機、鏡頭、穩定器、收音設備等專業攝影器材。
              </p>
              <p className="text-gray-300 mb-6">
                我們的使命是為攝影愛好者和專業攝影師提供最優質的產品和服務，幫助他們實現創意願景。無論您是專業攝影師、影片創作者還是直播主，我們都能滿足您的需求。
              </p>
              <p className="text-gray-300 mb-8">
                怪機絲擁有豐富的產品線，包括各大知名品牌如Panasonic、SONY、DJI、RODE等，並提供專業的技術支援和售後服務。
              </p>
              <Link href="/products" className="btn-luxury">
                了解更多
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-dark-light">
              {/* 使用背景色替代圖片 */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-dark-light">
        <div className="container mx-auto px-4">
          <h2 className="page-title text-center mb-16">客戶評價</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card-luxury p-8">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">
                "怪機絲的產品質量非常好，我購買的DJI Osmo Mobile 6穩定器使用起來非常順暢，客服也很專業，能夠解答我所有的問題。"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-dark font-bold">
                    TW
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium">陳先生</h4>
                  <p className="text-gray-400 text-sm">專業攝影師</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="card-luxury p-8">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">
                "作為一名直播主，我需要各種專業設備。怪機絲提供的Ulanzi讀稿機和RODE麥克風大大提升了我的直播質量，非常感謝！"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-dark font-bold">
                    LY
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium">林小姐</h4>
                  <p className="text-gray-400 text-sm">網路直播主</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="card-luxury p-8">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">
                "我在怪機絲購買了Panasonic S5M2相機和幾個SmallRig配件，品質都很好，出貨速度也很快，是值得信賴的攝影器材店。"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-dark font-bold">
                    WH
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-medium">王先生</h4>
                  <p className="text-gray-400 text-sm">影片創作者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark-light opacity-20">
          {/* 使用背景色替代圖片 */}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              需要專業建議？
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              我們的專業團隊隨時為您提供攝影器材選購建議和技術支援
            </p>
            <Link href="/chat" className="btn-luxury text-lg px-8 py-4">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
      
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/chat" className="bg-primary text-dark w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </Link>
      </div>
      
      <Footer />
    </main>
  );
}
