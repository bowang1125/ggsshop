'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ulanzi RT02 讀稿機",
      price: 3980,
      image: "/images/product_1.jpg",
      quantity: 1
    },
    {
      id: 3,
      name: "DJI Osmo Mobile 6 手機穩定器",
      price: 4290,
      image: "/images/product_3.jpg",
      quantity: 2
    }
  ]);
  
  const [subtotal, setSubtotal] = useState(0);
  
  useEffect(() => {
    // 計算小計
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cartItems]);
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const formatPrice = (price) => {
    return `NT$ ${price.toLocaleString()}`;
  };
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <h1 className="page-title text-center">購物車</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            查看您的購物車商品，調整數量或繼續購物。
          </p>
        </div>
      </section>
      
      {/* Cart Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="card-luxury overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="py-4 px-6 text-left text-white">商品</th>
                          <th className="py-4 px-6 text-center text-white">價格</th>
                          <th className="py-4 px-6 text-center text-white">數量</th>
                          <th className="py-4 px-6 text-center text-white">小計</th>
                          <th className="py-4 px-6 text-center text-white">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id} className="border-b border-gray-700">
                            <td className="py-4 px-6">
                              <div className="flex items-center">
                                <div className="relative w-20 h-20 mr-4">
                                  <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    fill 
                                    style={{objectFit: 'cover'}}
                                    className="rounded"
                                  />
                                </div>
                                <div>
                                  <Link href={`/products/${item.id}`} className="text-white hover:text-primary transition-colors">
                                    {item.name}
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-center text-gray-300">
                              {formatPrice(item.price)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              <div className="flex items-center justify-center">
                                <button 
                                  className="bg-dark-light text-white w-8 h-8 flex items-center justify-center rounded-l-md hover:bg-primary hover:text-dark transition-colors"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <input 
                                  type="number" 
                                  className="w-12 h-8 bg-dark-light text-white text-center border-x border-gray-700"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  min="1"
                                />
                                <button 
                                  className="bg-dark-light text-white w-8 h-8 flex items-center justify-center rounded-r-md hover:bg-primary hover:text-dark transition-colors"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-center text-primary font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              <button 
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                onClick={() => removeItem(item.id)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Link href="/products" className="btn-outline">
                    繼續購物
                  </Link>
                  <button 
                    className="btn-outline text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                    onClick={clearCart}
                  >
                    清空購物車
                  </button>
                </div>
              </div>
              
              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <div className="card-luxury p-6">
                  <h3 className="text-xl font-serif text-primary mb-6">訂單摘要</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-300">小計</span>
                      <span className="text-white">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">運費</span>
                      <span className="text-white">NT$ 0</span>
                    </div>
                  </div>
                  
                  <div className="divider-luxury my-6"></div>
                  
                  <div className="flex justify-between mb-8">
                    <span className="text-white text-lg">總計</span>
                    <span className="text-primary text-lg font-bold">{formatPrice(subtotal)}</span>
                  </div>
                  
                  <Link href="/checkout" className="btn-luxury w-full text-center">
                    前往結帳
                  </Link>
                  
                  <div className="mt-6">
                    <h4 className="text-white mb-3">付款方式</h4>
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-gray-300">現金自取</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-2xl font-serif text-white mb-4">您的購物車是空的</h2>
              <p className="text-gray-300 mb-8">
                看起來您還沒有將任何商品加入購物車。
              </p>
              <Link href="/products" className="btn-luxury">
                開始購物
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-dark w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
      
      <Footer />
    </main>
  );
}
