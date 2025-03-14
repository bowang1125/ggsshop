'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pickupTime: '',
    notes: '',
    agreeTerms: false
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // 清除該欄位的錯誤
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '請輸入姓名';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '請輸入電話號碼';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = '請輸入有效的電話號碼';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '請輸入電子郵件';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '請輸入有效的電子郵件';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = '請輸入自取地址';
    }
    
    if (!formData.pickupTime.trim()) {
      newErrors.pickupTime = '請選擇自取時間';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '請同意服務條款';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // 這裡應該是提交訂單的邏輯
      alert('訂單已提交成功！');
      // 重置表單
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        pickupTime: '',
        notes: '',
        agreeTerms: false
      });
    }
  };
  
  // 模擬訂單摘要數據
  const orderSummary = {
    items: [
      { id: 1, name: "Ulanzi RT02 讀稿機", price: 3980, quantity: 1 },
      { id: 3, name: "DJI Osmo Mobile 6 手機穩定器", price: 4290, quantity: 2 }
    ],
    subtotal: 12560,
    shipping: 0,
    total: 12560
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
          <h1 className="page-title text-center">結帳</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            請填寫您的資料，完成訂單。
          </p>
        </div>
      </section>
      
      {/* Checkout Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-6">
                <h3 className="text-xl font-serif text-primary mb-6">訂購資訊</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white mb-2">姓名 *</label>
                      <input 
                        type="text" 
                        className={`input-luxury w-full ${errors.name ? 'border-red-500' : ''}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-white mb-2">電話 *</label>
                      <input 
                        type="tel" 
                        className={`input-luxury w-full ${errors.phone ? 'border-red-500' : ''}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white mb-2">電子郵件 *</label>
                    <input 
                      type="email" 
                      className={`input-luxury w-full ${errors.email ? 'border-red-500' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white mb-2">自取地址 *</label>
                    <input 
                      type="text" 
                      className={`input-luxury w-full ${errors.address ? 'border-red-500' : ''}`}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="台北市信義區松高路1號"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white mb-2">自取時間 *</label>
                    <select 
                      className={`input-luxury w-full ${errors.pickupTime ? 'border-red-500' : ''}`}
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                    >
                      <option value="">請選擇自取時間</option>
                      <option value="morning">上午 (11:00 - 13:00)</option>
                      <option value="afternoon">下午 (14:00 - 17:00)</option>
                      <option value="evening">晚上 (18:00 - 20:00)</option>
                    </select>
                    {errors.pickupTime && <p className="text-red-500 text-sm mt-1">{errors.pickupTime}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-white mb-2">備註</label>
                    <textarea 
                      className="input-luxury w-full h-32"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="有任何特殊需求請在此說明"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="agreeTerms" 
                        className="mt-1 mr-2 accent-primary"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                      />
                      <label htmlFor="agreeTerms" className={`text-gray-300 ${errors.agreeTerms ? 'text-red-500' : ''}`}>
                        我已閱讀並同意<Link href="/terms" className="text-primary hover:underline">服務條款</Link>和<Link href="/privacy" className="text-primary hover:underline">隱私政策</Link>
                      </label>
                    </div>
                    {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
                  </div>
                  
                  <div className="flex justify-between">
                    <Link href="/cart" className="btn-outline">
                      返回購物車
                    </Link>
                    <button type="submit" className="btn-luxury">
                      提交訂單
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card-luxury p-6 sticky top-24">
                <h3 className="text-xl font-serif text-primary mb-6">訂單摘要</h3>
                
                <div className="space-y-4 mb-6">
                  {orderSummary.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-300">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="text-white">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="divider-luxury my-6"></div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">小計</span>
                    <span className="text-white">{formatPrice(orderSummary.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">運費</span>
                    <span className="text-white">{formatPrice(orderSummary.shipping)}</span>
                  </div>
                </div>
                
                <div className="divider-luxury my-6"></div>
                
                <div className="flex justify-between mb-8">
                  <span className="text-white text-lg">總計</span>
                  <span className="text-primary text-lg font-bold">{formatPrice(orderSummary.total)}</span>
                </div>
                
                <div>
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
