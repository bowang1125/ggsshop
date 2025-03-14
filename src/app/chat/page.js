'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'system',
      content: '您好！歡迎來到怪機絲攝影器材線上客服，有什麼可以幫助您的嗎？',
      time: '14:30'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // 添加用戶訊息
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // 模擬客服回覆
    setTimeout(() => {
      const systemReply = {
        id: messages.length + 2,
        sender: 'system',
        content: getAutoReply(newMessage),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, systemReply]);
    }, 1000);
  };
  
  // 簡單的自動回覆邏輯
  const getAutoReply = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('價格') || lowerMessage.includes('多少錢')) {
      return '您可以在我們的產品頁面查看詳細價格，或者告訴我您對哪款產品感興趣，我可以為您提供價格資訊。';
    } else if (lowerMessage.includes('庫存') || lowerMessage.includes('有貨')) {
      return '大部分商品都有現貨，少數熱門商品可能需要預訂。請問您想了解哪款產品的庫存狀況？';
    } else if (lowerMessage.includes('運送') || lowerMessage.includes('配送') || lowerMessage.includes('寄送')) {
      return '我們目前提供現金自取服務，您可以在結帳時選擇自取地點和時間。';
    } else if (lowerMessage.includes('退貨') || lowerMessage.includes('退款')) {
      return '我們提供7天鑑賞期，如商品有任何問題可以申請退換貨。非人為因素造成的商品問題，我們將全額退款。';
    } else if (lowerMessage.includes('保固')) {
      return '我們所有商品都提供原廠保固，大部分商品為一年保固期。特定商品可能有不同的保固政策，您可以在產品頁面查看詳細資訊。';
    } else if (lowerMessage.includes('推薦') || lowerMessage.includes('建議')) {
      return '很高興為您提供建議！請問您是用於什麼場景？例如Vlog拍攝、直播、專業攝影等，這樣我能更精準地為您推薦適合的器材。';
    } else if (lowerMessage.includes('謝謝') || lowerMessage.includes('感謝')) {
      return '不客氣！如果您還有其他問題，隨時可以詢問我。';
    } else {
      return '感謝您的訊息！我們的客服人員將盡快回覆您。如果您有關於產品、價格或服務的具體問題，也可以直接詢問。';
    }
  };
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <h1 className="page-title text-center">線上客服</h1>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            有任何問題或需要協助，請隨時與我們聯繫。
          </p>
        </div>
      </section>
      
      {/* Chat Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-luxury overflow-hidden">
              {/* Chat Header */}
              <div className="bg-dark-light p-4 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-dark font-bold mr-3">
                    GS
                  </div>
                  <div>
                    <h3 className="text-white font-medium">怪機絲客服</h3>
                    <p className="text-gray-400 text-sm">線上 • 通常在幾分鐘內回覆</p>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="p-4 h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'system' && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-dark font-bold mr-2 flex-shrink-0">
                        GS
                      </div>
                    )}
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-primary text-dark' 
                          : 'bg-dark-light text-white'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-dark-light' : 'text-gray-400'}`}>
                        {message.time}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold ml-2 flex-shrink-0">
                        您
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-gray-700">
                <form onSubmit={handleSendMessage} className="flex">
                  <input 
                    type="text" 
                    className="input-luxury flex-grow mr-2" 
                    placeholder="輸入訊息..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className="btn-luxury px-4"
                  >
                    發送
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-luxury p-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h4 className="text-white font-medium">電話</h4>
                </div>
                <p className="text-gray-300">(02) 1234-5678</p>
              </div>
              
              <div className="card-luxury p-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h4 className="text-white font-medium">電子郵件</h4>
                </div>
                <p className="text-gray-300">info@ggs-photo.com</p>
              </div>
              
              <div className="card-luxury p-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-white font-medium">營業時間</h4>
                </div>
                <p className="text-gray-300">週一至週五: 11:00 - 20:00<br />週六、日、國定假日固定公休</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
